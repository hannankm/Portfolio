import React from "react";
import HorizontalLine from "../components/HorizontalLine";
import { hijabi1 } from "../assets";

const About = () => {
  return (
    <div
      id="about"
      className="flex md:flex-row flex-col-reverse align- sm:w-2/3 sm:mx-auto mx-6 justify-between mb-12 lg:pt-24
      "
    >
      <div className="self-start mr-4 md:w-3/4">
        <h1 className="text-3xl font-bold mt-4 mb-2 ">
          <span className="text-highlight ">01. </span>About me
        </h1>
        <HorizontalLine />
        <p className="md:text-left mt-8 text-justify text-base ">
          Heya It's <span className="text-highlight">Hanan!</span> I am a
          skilled web and app developer specializing in JS and Python. In
          addition, I am an Information Systems graduate from Addis Ababa
          University. I do both frontend and back end web developemet. I also
          dabble around with data analytics and web scrapping. Aside from
          programming, I'm into baking, reading, writing and watching football
          matches.
        </p>
      </div>
      <div className="self-start mx-auto lg:ml-4 mb-2 md:w-1/4 w-full">
        <img src={hijabi1} alt="" className="w-56 h-56 mx-auto  " />
      </div>

      {/* two columns - text and image  */}
    </div>
  );
};
export default About;
