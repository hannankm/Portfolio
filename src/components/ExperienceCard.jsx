import React, { useState } from "react";

const ExperienceCard = ({ experience }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="p-4 flex flex-row border-2 border-highlight my-4 rounded-xl md:text-base text-sm  items-start md:items-center">
        <div className="flex flex-col md:flex-row md:items-center md:flex-grow">
          <h1 className="md:mr-4">
            <span className="font-bold">{experience.title}</span>
            <span className="italic"> @ {experience.company}</span>
          </h1>
          <p className="md:text-sm sm:text-xs">{experience.time_frame}</p>
        </div>
        <button
          className="font-bold text-2xl md:ml-auto mt-2 md:mt-0 rounded-full hover:border-highlight"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? <p className="text-4xl">-</p> : <p>+</p>}
        </button>
      </div>

      {toggle && (
        <div className="bg-beige text-navy font-semibold opacity-95 border-2 rounded p-2">
          {/* logo */}
          <p>{experience.content}</p>
          {/* tech stack */}
        </div>
      )}
    </>
  );
};

export default ExperienceCard;
