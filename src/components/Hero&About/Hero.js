import React from "react";
import "./Hero.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import girl from "./hi.gif";
function Hero() {
  return (
    <div className="portfolio-hero" id="about">
      <div className="about-section animate-from-left">
        <div className="about-header">
          <div className="about-hi">
            Hi, I'm <span className="about-name">Mihika</span>
          </div>
          <div className="about-title">A Full Stack Developer</div>
        </div>
        <p className="about-subtitle">
          I specialize in the development of web applications.
        </p>
        <p className="about-description">
          As a full-stack developer, I've refined my proficiency in JavaScript
          and the MERN stack, while actively enhancing my skill set with
          TypeScript. With a commitment to continuous learning, I prioritize
          attentive listening and rapid adaptation, fostering productive
          collaborations with clients to craft scalable, user-friendly solutions
          that address tangible challenges
        </p>
      </div>
      <div className="portfolio-image animate-from-right">
        <img className="about-image" src={girl} alt="Avatar" />
      </div>
    </div>
  );
}

export default Hero;
