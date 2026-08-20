import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectDetail from "./ProjectDetail";
import WatchmeApp from '../../assets/Project-Picture/WatchmeApp.png'
import WatchmeWeb from '../../assets/Project-Picture/WatchmeWeb.png'
import KhmerAuto from '../../assets/Project-Picture/KhmerAuto.png'
import CGScanner from '../../assets/Project-Picture/CGScanner.png'
import EscapeTheRoom from '../../assets/Project-Picture/EscapeTheRoom.png'
import TankBattle from '../../assets/Project-Picture/TankBattle.png'
 
const projects = [
  {
    title: "WatchME - Movie Streaming Application",
    subtitle: "Web Application",
    description:
      "A modern movie streaming web app built with Laravel, powered by the TMDB API. Browse trending movies, explore detailed info, and enjoy a clean, responsive interface.",
    technologies: ["Laravel", "MySQL", "TMDB API", "Vite", "CSS", "JavaScript"],
    githubLink: "https://github.com/RakZ77/WatchME_Movie_WebApp.git",
    image: WatchmeWeb
  },
  {
    title: "WatchME - Movie Streaming Application",
    subtitle: "Mobile Application",
    description: "A Netflix-style Android movie browser app built with Java, powered by the TMDB API, with Supabase backend and Room local persistence.",
    technologies: ["Java", "Supabase", "TMDB API"],
    githubLink: "https://github.com/RakZ77/WatchME_Movie_App.git",
    image: WatchmeApp
  },
  {
    title: "KhmerAuto - Car Selling Application",
    subtitle: "Web Application",
    description: "This project is a React-based web application developed as part of a school assignment. The goal of this project is to practice building a modern frontend application using React and related technologies.",
    technologies: ["React", "Vite", "Supabase", "CSS", "Tailwindcss", "JavaScript"],
    githubLink: "https://github.com/RakZ77/Car_Selling_Website.git",
    image: KhmerAuto
  },
  {
    title: "Smart-Attendance System",
    subtitle: "Web Application",
    description: "A modern Streamlit attendance system powered by MediaPipe face detection.",
    technologies: ["Python", "CSS"],
    githubLink: "https://github.com/RakZ77/CG-Smart-Attendance.git",
    image: CGScanner
  },
  {
    title: "Escape The Room - 3D Puzzle Game",
    subtitle: "PC Game",
    description: "A Netflix-style Android movie browser app built with Java, powered by the TMDB API, with Supabase backend and Room local persistence.",
    technologies: ["Unity", "C#", "Blender"],
    githubLink: "https://github.com/RakZ77/EscapeTheRoom.git",
    image: EscapeTheRoom
  },
  {
    title: "Tank Battle - 2D Game",
    subtitle: "PC Game",
    description: "A Netflix-style Android movie browser app built with Java, powered by the TMDB API, with Supabase backend and Room local persistence.",
    technologies: ["Unity", "C#", "Aesprite"],
    githubLink: "https://github.com/RakZ77/Tank-Battle-Project.git",
    image: TankBattle
  }

];

function Project() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 2);

  return (
    <div className="flex flex-col items-start w-full gap-10 px-6 py-12 sm:px-10 md:px-16 lg:px-32 md:py-20">
      <h1 className="heading-1">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
        {visibleProjects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
            onSelect={setSelectedProject}
          />
        ))}
      </div>

      {projects.length > 2 && (
        <button
          onClick={() => setShowAll((prev) => !prev)}
          className="cursor-pointer mx-auto bg-blue-300 hover:bg-blue-400 dark:bg-sky-700 dark:hover:bg-sky-600 text-gray-900 sub-body font-semibold px-5 py-2.5 rounded-lg transition-colors"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      )}

      <ProjectDetail
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </div>
  );
}

export default Project;