import React from "react";
import { skills } from "../constants";
import SkillCard from "../components/SkillCard";

const Skills = () => {
  return (
    <div id="skills" className="pt-28 mb-28 sm:w-4/5 px-4 mx-auto">
      <h1 className="text-3xl mt-22 font-bold mb-12">
        <span className="text-highlight">02.</span> Skills
      </h1>
      <div className="flex md:flex-row flex-col my-4">
        {skills.map((skill) => (
          <SkillCard
            key={skill.id} // Make sure to provide a unique key
            title={skill.title}
            icon={skill.icon}
            content={skill.content}
          />
        ))}
      </div>
    </div>
  );
};
export default Skills;
