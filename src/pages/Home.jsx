import "../App.css";
import Hero from "../sections/Hero";
import NavBar from "../sections/NavBar";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";

function Home() {
  return (
    <div className="text-beige bg-navy min-h-screen mx-auto">
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
