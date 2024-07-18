import React from "react";
import { experience } from "../constants";
import ExperienceCard from "../components/ExperienceCard";
import { desk, desk1 } from "../assets";

const Experience = () => {
  return (
    <div id="experience" className="relative mb-24 pt-20">
      <div
        className="absolute top-0 right-20 w-28 h-28 bg-cover bg-no-repeat opacity-35"
        style={{ backgroundImage: `url(${desk})` }}
      ></div>
      <h1 className="text-3xl mt-22 font-bold mb-12 w-4/5 mx-auto relative z-10">
        <span className="text-highlight">03.</span> Experience
      </h1>
      <div className="w-2/3 mx-auto relative z-10">
        {experience.map((x) => (
          <ExperienceCard key={x.id} experience={x} />
        ))}
      </div>
    </div>
  );
};
export default Experience;
