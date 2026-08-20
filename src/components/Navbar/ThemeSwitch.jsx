function SunIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      className={className}
      fill="currentColor"
    >
      <path d="M440-800v-120h80v120h-80Zm0 760v-120h80v120h-80Zm360-400v-80h120v80H800Zm-760 0v-80h120v80H40Zm708-252-56-56 70-72 58 58-72 70ZM198-140l-58-58 72-70 56 56-70 72Zm564 0-70-72 56-56 72 70-58 58ZM212-692l-72-70 58-58 70 72-56 56Zm98 382q-70-70-70-170t70-170q70-70 170-70t170 70q70 70 70 170t-70 170q-70 70-170 70t-170-70Zm283.5-56.5Q640-413 640-480t-46.5-113.5Q547-640 480-640t-113.5 46.5Q320-547 320-480t46.5 113.5Q413-320 480-320t113.5-46.5ZM480-480Z" />
    </svg>
  );
}

function MoonIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 -960 960 960"
      className={className}
      fill="currentColor"
    >
      <path d="M484-80q-84 0-157.5-32t-128-86.5Q144-253 112-326.5T80-484q0-146 93-257.5T410-880q-18 99 11 193.5T521-521q71 71 165.5 100T880-410q-26 144-138 237T484-80Zm0-80q88 0 163-44t118-121q-86-8-163-43.5T464-465q-61-61-97-138t-43-163q-77 43-120.5 118.5T160-484q0 135 94.5 229.5T484-160Zm-20-305Z" />
    </svg>
  );
}

export default function ThemeSwitch({ isDark = false, onChange }) {
  const toggle = () => {
    const next = !isDark;
    onChange?.(next);
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle theme"
      onClick={toggle}
      className={`relative inline-flex h-8 w-16 items-center rounded-full
        transition-colors duration-300 ease-in-out focus:outline-none
        focus-visible:ring-2 focus-visible:ring-offset-2
        ${isDark ? "bg-slate-800" : "bg-sky-100"}`}
    >
      {/* Track icons */}
      <SunIcon
        className={`absolute left-1.5 h-3.5 w-3.5 transition-opacity duration-300
          ${isDark ? "opacity-0" : "opacity-100 text-sky-500"}`}
      />
      <MoonIcon
        className={`absolute right-1.5 h-3.5 w-3.5 transition-opacity duration-300
          ${isDark ? "opacity-100 text-slate-300" : "opacity-0"}`}
      />

      {/* Sliding knob */}
      <span
        className={`z-10 flex h-6 w-6 items-center justify-center rounded-full
          bg-white shadow-md transition-transform duration-300 ease-in-out
          ${isDark ? "translate-x-9" : "translate-x-1"}`}
      >
        {isDark ? (
          <MoonIcon className="h-3.5 w-3.5 text-slate-700" />
        ) : (
          <SunIcon className="h-3.5 w-3.5 text-sky-500" />
        )}
      </span>
    </button>
  );
}
