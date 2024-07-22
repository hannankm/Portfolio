import React from "react";
import { projects } from "../constants";
import ProjectCard from "../components/ProjectCard";
import { GrFormNextLink } from "react-icons/gr";

// filter by category
const Projects = () => {
  return (
    <div id="projects" className="px-12 mx-auto pt-24 mb-32">
      <h1 className="text-3xl font-bold mb-2 ml-12">
        <span className="text-highlight">04.</span> Projects
      </h1>
      <div className="flex md:flex-row flex-col justify-center items-center lg:align-between my-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      {/* link to live demo and code
        title, screenshot, short description, tech stack
        one mobile and other web  */}
      <div className="flex justify-end items-center">
        <button className=" border-2 border-highlight hover:bg-highlight rounded-full font-bold p-2 ">
          <a href="/projects" className="flex justify-center items-center">
            <p>View More Projects</p>
            <GrFormNextLink className="w-6 h-6" />
          </a>
        </button>
      </div>
    </div>
  );
};
export default Projects;
