import React, { useState } from "react";
// image, link to demo/ code, title, description, stack,
// category
// if id is even switch places
// side 1 - image
// side 2 - title, description, stack as buttons, action buttons

// or screenshot image , title and buttons below then on hover view description and tech stack on differenet page (but no need they can see a demo or github code + documentation)
// three or two
const ProjectCard = ({ project }) => {
  const [content, setContent] = useState(
    project.content.substring(0, 150) + " ..."
  );
  return (
    <div className="my-4 mx-auto inline">
      <h1 className="text-lg font-bold my-2 ml-4 underline underline-offset-2 decoration-highlight">
        {project.title}
      </h1>

      <img className=" rounded mr-2 w-3/4 h-32 my-2" src={project.img} alt="" />

      <div className=" w-4/5  ">
        <p className="text-xs mb-4 text-justify">
          {project.content.substring(0, 150) + "..."}
        </p>
        {project.stack.map((x) => (
          <button className="rounded-xl px-1 bg-beige text-navy mr-2 text-sm px-2 ">
            {x}
          </button>
        ))}
        <div className="flex flex-row ">
          {project.demo && (
            <button
              className={`rounded-xl border-2 border-highlight hover:bg-highlight p-1 my-4 font-bold text-base mr-4`}
            >
              <a href={project.demo}>Live Demo</a>
            </button>
          )}
          {project.code && (
            <button
              className={`rounded-xl border-2 border-highlight hover:bg-highlight p-1 my-4 font-bold  text-base${
                project.demo && "ml-4"
              }`}
            >
              <a href={project.code}>View Code</a>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
