import React from "react";
// image, link to demo/ code, title, description, stack,
// category
// if id is even switch places
// side 1 - image
// side 2 - title, description, stack as buttons, action buttons

// or screenshot image , title and buttons below then on hover view description and tech stack on differenet page (but no need they can see a demo or github code + documentation)
// three or two
const ProjectCard = ({ project }) => {
  return (
    <div className="flex flex-row my-6">
      <img className="flex-1 rounded mr-2 w-96 h-64" src={project.img} alt="" />
      <div className="flex-1 w-4/5 mx-auto ml-4">
        <h1 className="text-xl font-bold">{project.title}</h1>
        <p className="text-sm mb-4">{project.content}</p>
        {project.stack.map((x) => (
          <button className="rounded-xl px-1 bg-beige text-navy ml-2 text-sm px-2 ">
            {x}
          </button>
        ))}
        <div className="flex flex-row ">
          {project.demo && (
            <button className="rounded-xl border-2 border-highlight hover:bg-highlight p-2 my-4 font-bold mr-8">
              <a href={project.demo}>Live Demo</a>
            </button>
          )}
          {project.code && (
            <button className="rounded-xl border-2 border-highlight hover:bg-highlight p-2 my-4 font-bold ml-4">
              <a href={project.code}>View Code</a>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
