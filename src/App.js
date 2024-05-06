import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero&About/Hero";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education&Experience/Education";
import Experience from "./components/Education&Experience/Experience";
import Certifications from "./components/Certifications/Certifications";
import Contact from "./components/Contact/Contact";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="exp-container">
        <Experience />
      </div>
      <div className="edu-container">
        <Education />
      </div>
      <div className="skill-container">
        <Skills />
      </div>
      <div className="project-container">
        <Projects />
      </div>
      <div className="cert-container">
      <Certifications />
      </div>
      <div className="contact-container">
      <Contact />
      </div>
    </>
  );
};

export default App;
