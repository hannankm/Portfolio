import React, { useState } from "react";

const ExperienceCard = ({ experience }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div className="p-4 flex flex-row border-2 border-highlight my-4 rounded-xl md:text-sm text-base ">
        <h1>
          <span className="font-bold ">{experience.title}</span>
          <span className="italic"> @ {experience.company}</span>
        </h1>
        <p className="text-sm">{experience.time_frame}</p>
        <button
          className="font-bold text-xl justify-self-end rounded-full hover:border-highlight"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? <p>-</p> : <p>+</p>}
        </button>
      </div>

      {toggle && (
        <div className="bg-beige text-navy font-semibold opacity-95 border-2 rounded p-2">
          <p>{experience.content}</p>
        </div>
      )}
    </>
  );
};

export default ExperienceCard;
