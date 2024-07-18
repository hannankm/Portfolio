import React from "react";
import { TypeAnimation } from "react-type-animation";
import Moon from "../components/Moon";
import Navbar from "./NavBar";
import { code } from "../assets";

const Hero = () => {
  return (
    // add gradient on hero
    // beige star
    <div id="hero" className="relative h-screen overflow-hidden ">
      {/* <Navbar /> */}
      <div className="absolute bottom-44 left-16">
        <h1 className=" text-5xl font-extrabold text-beige">HANAN KEDIR.</h1>
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
      <div className="relative h-64 z-20 mt-48 mx-auto">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25 mr-24 z-40 w-1/2 ml-auto"
          style={{ backgroundImage: `url(${code})` }}
        ></div>
        <div className="relative z-10 p-4">{/* Your content here */}</div>
      </div>
    </div>
  );
};

export default Hero;
