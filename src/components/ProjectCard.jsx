import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="max-w-xs w-full lg:max-w-full lg:flex my-4 mx-4 border border-[#1a2430] shadow-2xl shadow-[#0a1420] transition-all duration-300 ease-in-out hover:shadow-[0_20px_40px_0_rgba(0,0,0,0.5)] hover:shadow-[#000000]  rounded-lg bg-navy text-beige rounded-lg  overflow-hidden">
      <div>
        <img
          className="w-full h-40 object-cover rounded-t-lg"
          src={project.img}
          alt={project.title}
        />
        <div className="p-4">
          <h2 className="text-lg font-bold mb-1">{project.title}</h2>
          <p className="text-gray-200 text-xs mb-2">
            {project.content.substring(0, 100) + "..."}
          </p>
          <div className="flex flex-wrap mb-2">
            {project.stack.map((tech, index) => (
              <span
                key={index}
                className="bg-beige text-navy text-xs font-semibold mr-2 mb-1 px-1 py-1 rounded-lg"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex justify-between">
            {project.code && (
              <a
                href={project.code}
                className="rounded-xl border-2 border-highlight hover:bg-highlight  hover:text-white p-1 my-2 font-semibold lg:text-base text-sm text-beige transition-colors duration-300"
              >
                View More
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                className="rounded-xl border-2 border-highlight hover:bg-highlight text-beige hover:text-white p-1 my-2 font-semibold lg:text-base text-sm transition-colors duration-300"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
