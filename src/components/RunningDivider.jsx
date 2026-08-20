import { useEffect, useRef } from "react";

const techs = [
  "Java",
  "C++",
  "Python",
  "React",
  "Laravel",
  "Node.js",
  "Git",
  "GitHub",
];

export default function RunningDivider() {
  const trackRef = useRef(null);
  const position = useRef(0);
  const velocity = useRef(-0.5);
  const targetVelocity = useRef(-0.5);
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    let frame;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        targetVelocity.current = -1.5; // left
      } else if (currentScrollY < lastScrollY.current) {
        targetVelocity.current = 1.5; // right
      }

      lastScrollY.current = currentScrollY;
    };

    const animate = () => {
      // Smooth direction change
      velocity.current +=
        (targetVelocity.current - velocity.current) * 0.08;

      position.current += velocity.current;

      if (trackRef.current) {
        const halfWidth = trackRef.current.scrollWidth / 2;

        // Infinite loop
        if (position.current <= -halfWidth) {
          position.current += halfWidth;
        }

        if (position.current >= 0) {
          position.current -= halfWidth;
        }

        trackRef.current.style.transform =
          `translateX(${position.current}px)`;
      }

      frame = requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", handleScroll);
    frame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  const items = [...techs, ...techs];

  return (
    <div className="overflow-hidden border-y-2 bg-sky-100 dark:bg-sky-700 border-gray-800 dark:border-sky-200 py-2">
      <div
        ref={trackRef}
        className="flex w-max whitespace-nowrap"
      >
        {items.map((tech, index) => (
          <span
            key={index}
            className="sub-body font-mono font-bold uppercase tracking-widest"
          >
            {tech} <span className="mx-8">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}