import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Insights from "../components/Insights";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Clients from "../components/Clients";
import Experience from "../components/Experience";
import Education from "../components/Education";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Clients />
      <Insights />
      <Contact />
    </>
  );
};

export default Home;
