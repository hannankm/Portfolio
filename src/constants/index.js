import {
  database,
  react,
  mobile,
  project3,
  project1,
  project2,
} from "../assets";
import { FaReact } from "react-icons/fa";

const skills = [
  {
    id: 1,
    title: "Frontend Development ",
    icon: react,
    content: "Frontend with html, css, js and react.",
  },
  {
    id: 2,
    title: "Backend Development",
    icon: database,
    content: "Backend with flask, laravel and node. ",
  },
  {
    id: 3,
    title: "Mobile App Development",
    icon: mobile,
    content: "Mobile apps in React Native . ",
  },
  // {
  //   id: 4,
  //   title: "Data Analytics",
  //   icon: mobile,
  //   content: "Mobile apps in React Native . ",
  // },
];

const experience = [
  {
    id: 1,
    title: "Software Engineer Intern",
    company: "Ethiopian Space Science Society",
    content:
      "In a team of five, full stack web application with React, Node/Express and Postgres.",
    time_frame: "May 2023 - Oct 2023",
    stack: ["React", "Node/ Express", "Postgres", "RESTful API"],
  },
  {
    id: 2,
    title: "Digital Library Systems Intern",
    company: "Addis Ababa University",
    content: "In a team of two, fworking on dspace",
    time_frame: "May 2023 - Oct 2023",
    // stack: ["DSpace", "XML", "Postgres", "RESTful API"],
  },
];

const projects = [
  {
    id: 1,
    title: "Hotel Mgmt System",
    img: project1,
    content:
      "A web application developed using the MERN (MongoDB, Express.js, React, Node.js) stack. This system efficiently handles various hotel operations, such as reservations, check-ins, check-outs, room management, and billing. ",
    stack: ["React Native", "Firebase", "Node"],
    code: null,
    demo: "hiii",
  },
  {
    id: 2,
    title: "Recipe App",
    img: project3,
    content:
      "A web application developed using the MERN (MongoDB, Express.js, React, Node.js) stack. This system efficiently handles various hotel operations, such as reservations, check-ins, check-outs, room management, and billing.",
    stack: ["React Native", "Firebase", "Node"],
    code: "hi",
    demo: null,
  },
  {
    id: 3,
    title: "Mobile App",
    img: project2,
    content:
      "A mobile application developed using the MERN (MongoDB, Express.js, React, Node.js) stack. This system efficiently handles various hotel operations, such as reservations, check-ins, check-outs, room management, and billing.",
    stack: ["React Native", "Firebase", "Node"],
    code: "hi",
    demo: "null",
  },
];

export const navLinks = [
  {
    id: 1,
    title: "About",
    link: "#about",
  },
  {
    id: 2,
    title: "Skills",
    link: "#skills",
  },
  {
    id: 3,
    title: "Experience",
    link: "#experience",
  },
  {
    id: 4,
    title: "Projects",
    link: "#projects",
  },
  {
    id: 5,
    title: "Contact",
    link: "#contact",
  },
  // {
  //   id: 6,
  //   title: "Blog",
  //   link: "/projectGroups",
  // },
];

export { skills, experience, projects };
