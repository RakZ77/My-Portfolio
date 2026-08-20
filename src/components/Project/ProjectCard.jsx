import { Eye } from "lucide-react";
import DetailButton from "../buttons/DetailButton"

export default function ProjectCard({ project, onSelect }) {
  return (
    <div
      onClick={() => onSelect(project)}
      className="w-full rounded-2xl overflow-hidden shadow-md bg-white dark:bg-slate-900 cursor-pointer hover:shadow-xl hover:-translate-y-2 ease-out duration-300 transition-all"
    >
      {/* ---------- Project screenshot ---------- */}
      <div className="relative group">
        <img
          src={project.image}
          alt={project.title}
          className="w-full aspect-video object-contain bg-slate-100 dark:bg-gray-950"
        />

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-200 transition-opacity flex items-center justify-center">
          <DetailButton/>
        </div>
      </div>

      {/* ---------- Basic info ---------- */}
      <div className="p-4">
        <h3 className="body-1 text-gray-900 dark:text-white">{project.title}</h3>
        <p className="sub-body text-gray-400 dark:text-slate-300">{project.subtitle}</p>
      </div>
    </div>
  );
}