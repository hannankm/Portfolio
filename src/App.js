import "./App.css";
import Hero from "./sections/Hero";
import NavBar from "./sections/NavBar";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </header>
    </div>
  );
}

export default App;
