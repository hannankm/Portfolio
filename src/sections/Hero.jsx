import React from "react";
import { TypeAnimation } from "react-type-animation";
import Moon from "../components/Moon";
import { code } from "../assets";
const Hero = () => {
  return (
    // add gradient on hero
    // beige star
    <div id="hero" className="relative h-screen overflow-hidden ">
      {/* <Navbar /> */}
      <div className="absolute sm:bottom-36 bottom-36 left-12 ">
        <h1 className=" sm:text-5xl text-4xl font-extrabold text-beige opacity-100">
          HANAN KEDIR.
        </h1>
        <TypeAnimation
          sequence={[
            "Software Engineer",
            1000,
            "Frontend Developer",
            1000,
            "Backend Developer",
            1000,
            "Mobile App Developer",
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ display: "inline-block" }}
          className="text-highlight text-2xl font-semibold"
          repeat={Infinity}
        />
      </div>
      {/*  left-1/2 transform -translate-x-1/4 */}
      <div className="absolute top-16 left-2/3  transform -translate-x-1/4 z-40">
        <Moon />
      </div>
      <div className="relative h-64 z-20 md:mt-48 mt-32 mx-auto">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-45 lg:mr-24 z-40 lg:w-1/2  mr-12 lg:mb-28 mb-32 ml-auto"
          style={{ backgroundImage: `url(${code})` }}
        ></div>
        <div className="relative z-10 p-4">{/* Your content here */}</div>
      </div>
      {/* <hr className="border-t-2  border-b-0 border-dotted border-beige my-4 lg:border-0 w-2/3 mx-auto" /> */}
    </div>
  );
};

export default Hero;
