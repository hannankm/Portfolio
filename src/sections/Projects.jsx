import React from "react";
import { projects } from "../constants";
import ProjectCard from "../components/ProjectCard";

// filter by category
const Projects = () => {
  return (
    <div id="projects" className="w-4/5 mx-auto pt-24 mb-32">
      <h1 className="text-3xl  font-bold mb-2">
        <span className="text-highlight">04.</span> Projects
      </h1>
      <div className="flex lg:flex-row flex-col lg:align-between justify-items-center align-items-center">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      {/* link to live demo and code
        title, screenshot, short description, tech stack
        one mobile and other web  */}
      <div className="ml-auto">
        <button className="border-2 border-highlight hover:bg-highlight rounded-full font-bold p-2 mr-auto ">
          View More Projects
        </button>
      </div>
    </div>
  );
};
export default Projects;
