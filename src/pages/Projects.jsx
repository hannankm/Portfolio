import React, { useState } from "react";
import { moreprojects } from "../constants";
import ProjectCard from "../components/ProjectCard";
import { IoMdHome } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import Footer from "../sections/Footer";

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Handle the search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter projects based on search term
  const filteredProjects = moreprojects.filter((project) => {
    const searchTermLower = searchTerm.toLowerCase();
    return (
      project.title.toLowerCase().includes(searchTermLower) ||
      project.content.toLowerCase().includes(searchTermLower) ||
      project.stack.some((tech) => tech.toLowerCase().includes(searchTermLower))
    );
  });

  return (
    <>
      <div id="projects" className="min-h-screen mx-auto bg-navy">
        <div className="py-6 bg-navy text-beige">
          <button className="rounded p-1 ml-4">
            <a href="/">
              <IoMdHome className="w-6 h-6 hover:text-highlight" />
            </a>
          </button>

          <h1 className="text-4xl font-bold mb-2 ml-12 text-center">
            Projects
          </h1>
        </div>
        <div className="md:w-1/3 w-1/2 flex border-2 rounded-2xl border-[#07212B] shadow-xl mx-auto">
          <CiSearch className="text-beige w-6 h-8 font-semibold pl-1 items-end justify-end" />
          <input
            type="text"
            placeholder="Search Project..."
            className="w-full py-1 px-2 bg-navy text-beige items-start rounded-2xl"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
        <div className="w-5/6 mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <p className="text-beige text-center col-span-full">
              No projects match your search criteria.
            </p>
          )}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Projects;
