import { X } from "lucide-react";
import GitButton from "../buttons/GitButton";

export default function ProjectDetail({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-6 sm:py-10"
      onClick={onClose}
    >
      <div
        className="scrollbar-none relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-2xl shadow-xl overflow-hidden max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ---------- Close button ---------- */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 bg-white/90 hover:bg-white rounded-full p-1.5 shadow"
        >
          <X size={18} className="text-gray-700" />
        </button>

        {/* ---------- Project screenshot ---------- */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 sm:h-64 md:h-80 object-contain bg-slate-100 dark:bg-gray-950"
        />

        {/* ---------- Project details ---------- */}
        <div className="p-4 sm:p-6 md:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
            {project.title}
          </h2>
          <p className="text-sm sm:text-base text-gray-500 dark:text-slate-400 mt-1">
            {project.subtitle}
          </p>

          <p className="text-sm sm:text-base text-gray-600 dark:text-slate-300 mt-4 leading-relaxed">
            {project.description}
          </p>

          <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white my-4">
            Core Technologies
          </h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="border border-gray-300 rounded-full px-3 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm text-gray-700 dark:text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="w-fit">
            <GitButton project={project} />
          </div>
        </div>
      </div>
    </div>
  );
}