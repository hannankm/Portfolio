import React from "react";
import HorizontalLine from "../components/HorizontalLine";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="lg:w-1/3 sm:w-2/3 w-4/5 mx-auto my-32">
      <h1 className="text-3xl mt-22 font-bold mb-8">
        <span className="text-highlight">05.</span> Contact
      </h1>
      <h2 className="font-semibold">Let's Connect!</h2>
      <HorizontalLine />
      <div className="">
        <p className="text-justify">
          Feel free to reach out through any of these channels.
        </p>
        <a
          href="mailto:hanankmoh@gmail.com"
          className="my-2 hover:text-highlight font-bold"
        >
          hanankmoh@gmail.com
        </a>
        <div className="flex my-2 text-xl">
          <a href="https://github.com/hannankm">
            <FaGithub className="mr-2 text-beige hover:text-highlight" />
          </a>
          <a href="https://www.linkedin.com/in/hanankmoh/">
            <FaLinkedin className="mr-2 text-beige hover:text-highlight" />
          </a>
          <a href="https://t.me/hvnvnn">
            <FaTelegram className="mr-2 text-beige hover:text-highlight" />
          </a>
          <a href="https://">
            <FaTwitter className="mr-2 text-beige hover:text-highlight" />
          </a>
        </div>
      </div>
      {/* <div className="flex flex-row justify-between">
        {/* <div className="mr-4 flex-1">
          <form>
            <input
              type="text"
              className="w-3/4 py-1 bg-beige text-navy rounded-md block my-4"
              placeholder="Name"
            />
            <input
              type="email"
              className="w-3/4 rounded-md py-1 bg-beige text-navy block my-4"
              placeholder="Email"
            />

            <textarea className="w-3/4 rounded-md py-1 bg-beige text-navy block my-4">
              Message
            </textarea>
          </form>
        </div> 
       
      </div> */}
      {/* contact form and link to socials */}
    </div>
  );
};
export default Contact;
