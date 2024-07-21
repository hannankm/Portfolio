import { useState } from "react";
import { hijabi1 } from "../assets";
import { navLinks } from "../constants";
import { HiOutlineMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="flex py-2 justify-between items-center navbar px-5 sticky top-0 z-50 bg-navy">
      <img
        className="md:mr-10 h-10 w-10 rounded-full"
        src={hijabi1}
        alt="Hanan Kedir "
      />

      <ul className="font-sans font-semibold leading-[22.4px] list-none lg:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`mr-10  cursor-pointer text-[16px] hover:text-white `}
          >
            <a href={nav.link} className="hover:text-highlight">
              <span className="text-highlight">{"0" + nav.id + "."}</span>
              <br />
              <p className="text-beige hover:text-highlight">{nav.title}</p>
            </a>
          </li>
        ))}
        <li className="mr-5">
          <a href="/resume.pdf" download>
            <button
              title="Download Resume"
              className="bg-beige text-navy font-bold mt-4 py-2 px-6 rounded-2xl hover:bg-highlight hover:text-beige"
            >
              Resume
            </button>
          </a>
        </li>
      </ul>

      <div className="lg:hidden flex flex-1 justify-end items-center">
        <button
          className="object-contain cursor-pointer text-beige"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? (
            <IoMdClose className="w-6 h-6 " />
          ) : (
            <HiOutlineMenu className="w-6 h-6 " />
          )}
        </button>

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } bg-beige text-navy p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-40 border-2 border-beige`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-sans font-medium cursor-pointer text-[16px] mb-4 `}
              >
                <a
                  href={`${nav.link}`}
                  className={({ isActive }) =>
                    isActive
                      ? "text-highlight px-1"
                      : "text-navy hover:text-underline-orange rounded text-navy px-1"
                  }
                >
                  {nav.title}
                </a>
              </li>
            ))}
            <li className="mr-5">
              <a href="/resume.pdf" download>
                <button className="bg-highlight text-beige font-bold py-4 px-6 rounded-2xl hover:bg-orange-600">
                  Resume
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
