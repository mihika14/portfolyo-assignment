import React from "react";
import "./Hero.css";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

function Hero({ userData }) {
  // to Check if userData is available and if it contains the about field
  if (!userData || !userData.about) {
    return null;
  }

  const { about, social_handles } = userData;

  return (
    <div className="portfolio-hero" id="about">
      <div className="about-section animate-from-left">
        <div className="about-header">
          <div className="about-hi">
            Hi, I'm <span className="about-name">{about.name}</span>
          </div>
          <div className="about-title">A {about.title}</div>
        </div>
        <p className="about-subtitle">{about.subTitle}</p>
        <p className="about-description">{about.description}</p>

        <div className="social-buttons">
          {social_handles.map((handle) => (
            <a
              key={handle._id}
              href={handle.url}
              className={`social-button ${handle.platform.toLowerCase()}`}
            >
              {handle.platform === "Instagram" && <FaInstagram />}
              {handle.platform === "LinkedIn" && <FaLinkedin />}
              {handle.platform === "Twitter" && <FaTwitter />}
              {handle.platform === "Facebook" && <FaFacebook />}
            </a>
          ))}
        </div>
      </div>
      <div className="portfolio-image animate-from-right">
        <img className="about-image" src={about.avatar?.url} alt="Avatar" />
      </div>
    </div>
  );
}

export default Hero;
