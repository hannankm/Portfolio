// Moon.jsx
import React from "react";
import { moonImage } from "../assets"; // Adjust the path as necessary

const MoonComponent = () => {
  return (
    <div className="relative flex items-center justify-center w-full h-full animate-spin-pause">
      <div className="relative z-10">
        <img src={moonImage} alt="Moon" className="rounded-full " />
      </div>
      {/* <div className="absolute w-80 h-80 rounded-full bg-orange-200 opacity-50 z-0 animate-ping"></div> */}
    </div>
  );
};

export default MoonComponent;
