import React from "react";
import HorizontalLine from "../components/HorizontalLine";
import mypic from "../assets/mypic.jpg";

const About = () => {
  return (
    <div
      id="about"
      className="flex lg:flex-row flex-col-reverse align- w-2/3 mx-auto justify-between mb-12 pt-24"
    >
      <div className="self-start mr-4">
        <h1 className="text-3xl font-bold ">
          <span className="text-highlight">01. </span>About me
        </h1>
        <HorizontalLine />
        <p className="text-left mt-8">
          Heya It's Hanan! I am a skilled web and app developer specializing in
          JS and Python. In addition, I am an Information Systems graduate from
          Addis Ababa University. I do both frontend and back end web
          developemet. I also dabble around with data analytics and web
          scrapping. Aside from programming, I'm into baking, reading, writing
          and watching football matches.
        </p>
      </div>
      <div className="self-start ml-4 mb-2">
        <img src={mypic} alt="" className="rounded-full" />
      </div>

      {/* two columns - text and image  */}
    </div>
  );
};
export default About;
