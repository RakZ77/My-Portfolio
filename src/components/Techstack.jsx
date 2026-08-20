import React from 'react';
import {
  javaIcon, cIcon, cppIcon, csIcon, pyIcon, kotlinIcon, htmlIcon, cssIcon, reactIcon, jsIcon, bsIcon, twIcon, viteIcon,
  phpIcon, laraveIcon, nodeIcon, sqlIcon, supaIcon, ghubIcon, gitIcon, vsIcon, blenderIcon, asIcon, figIcon, postIcon
} from "../assets/tech_icons";

import { FileChartColumnIncreasing, KeyRound, Wrench } from 'lucide-react';
import { useInView } from './About/useInView';

const techStack = [
  {
    title: "LANGUAGES",
    techs: [
      { name: "Java", icon: javaIcon },
      { name: "C", icon: cIcon },
      { name: "C++", icon: cppIcon },
      { name: "C#", icon: csIcon },
      { name: "Python", icon: pyIcon },
      { name: "Kotlin", icon: kotlinIcon }
    ]
  },
  {
    title: "FRONTEND",
    techs: [
      { name: "HTML", icon: htmlIcon },
      { name: "CSS", icon: cssIcon },
      { name: "JavaScript", icon: jsIcon },
      { name: "React", icon: reactIcon },
      { name: "Bootstrap", icon: bsIcon },
      { name: "Tailwind", icon: twIcon },
      { name: "Vite", icon: viteIcon }
    ]
  },
  {
    title: "BACKEND",
    techs: [
      { name: "PHP", icon: phpIcon },
      { name: "Laravel", icon: laraveIcon },
      { name: "Node.Js", icon: nodeIcon },
      { name: "MySQL", icon: sqlIcon },
      { name: "Supabase", icon: supaIcon }
    ]
  },
  {
    title: "TOOLS",
    techs: [
      { name: "Git", icon: gitIcon },
      { name: "Github", icon: ghubIcon },
      { name: "Visual Studio", icon: vsIcon },
      { name: "Android Studio", icon: asIcon },
      { name: "Figma", icon: figIcon },
      { name: "PostMan", icon: postIcon },
      { name: "Blender", icon: blenderIcon }
    ]
  },
  {
    title: "CONCEPTS",
    techs: [
      { name: "MVP", icon: FileChartColumnIncreasing, isComponent: true },
      { name: "MVC", icon: FileChartColumnIncreasing, isComponent: true },
      { name: "MVVM", icon: FileChartColumnIncreasing, isComponent: true },
      { name: "REST API", icon: KeyRound, isComponent: true },
      { name: "Debugging", icon: Wrench, isComponent: true },
    ]
  }

]

function TechCategory({ category }) {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out
        ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
    >
      <h2 className='heading-2 py-2'>{category.title}</h2>

      <div className='flex flex-row flex-wrap gap-2 sm:gap-3 my-2'>
        {category.techs.map((tech, i) => {
          const Icon = tech.icon;

          return (
            <div
              key={tech.name}
              className={`sub-body flex gap-2 items-center border-2 border-gray-400 dark:border-gray-200 rounded-md px-2 py-1 sm:py-0.5 transition-all duration-500 ease-out
                ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {tech.isComponent ? (
                <Icon size={18} className="sm:w-5 sm:h-5" />
              ) : (
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-4 h-4 sm:w-5 sm:h-5"
                />
              )}
              <span>{tech.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Techstack() {
  return (
    <div className='*:font-inter flex flex-col w-full px-4 py-10 sm:px-10 md:px-16 lg:px-32 sm:py-12 md:py-20'>
      <h1 className='heading-1 py-10'>
        Tech <span className='text-green-900 dark:text-sky-500'>Stack</span>
      </h1>

      {techStack.map((category) => (
        <TechCategory key={category.title} category={category} />
      ))}
    </div>
  )
}

export default Techstack