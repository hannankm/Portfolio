import React from "react";

const SkillCard = ({ title, icon, content }) => {
  return (
    <div className="flex flex-col border-2 border-orange text-beige py-8 px-4 mx-2 my-2 rounded">
      <div className="flex md:flex-col lg:flex-row flex-row">
        <img src={icon} alt={title} className="h-12 w-12" />
        <h1 className="ml-2 text-lg font-bold">{title}</h1>
      </div>
      <p className="mt-4">
        <span></span>
        {content}
      </p>
    </div>
  );
};

export default SkillCard;
