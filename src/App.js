import React, { useState, useEffect } from "react";
import Homepage from "./components/Homepage/Homepage";
import Hero from "./components/Hero&About/Hero";
import Projects from "./components/Projects/Projects";
import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skills";
import Testimonials from "./components/Testimonial/Testimonial";
import Education from "./components/Education&Experience/Education";
import Experience from "./components/Education&Experience/Experience";
import { fetchUserData } from "./components/ApiData";
import Contact from "./components/Contact/Contact";
import "./App.css";

const App = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    // After data is fetched, set showContent to true to trigger animation
    if (userData || error) {
      setShowContent(true);
    }
  }, [userData, error]);

  const fetchData = async () => {
    try {
      const userData = await fetchUserData();
      if (userData.success) {
        setUserData(userData.user);
      } else {
        setError("API call failed.");
      }
    } catch (error) {
      setError("Error fetching data. Please try again later.");
    }
  };

  return (
    <>
      <Homepage userData={userData} />
      <Hero userData={userData} />
      <div className="services">
        <Services userData={userData} />
      </div>
      <div className="skills">
        <Skills userData={userData} />
      </div>
      <div className="projects">
        <Projects userData={userData} />
      </div>
      <div className="edu-exp-timeline">
        <div className="education-timeline">
          <h1 className="exp-section-header">Education</h1>
          <Education userData={userData} />
        </div>
        <div className="experience-timeline ">
          <h1 className="exp-section-header">Experience</h1>
          <Experience userData={userData} />
        </div>
      </div>
      <div className="testimonial-Contact">
        <Testimonials userData={userData} />
        <Contact userData={userData} />
      </div>
      </>
  );
};

export default App;
