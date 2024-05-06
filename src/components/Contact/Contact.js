import React from "react";
import "./Contact.css";
import { FaGithub, FaLinkedin, FaDiscord, FaInstagram } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { ImGithub } from "react-icons/im";

function Contact() {
  return (
    <footer className="footer" id="contact">
      <div className="footer__container bd-container">
        <h2 className="footer__title">Contact me here!</h2>

        <div className="footer__social">
          <div className="icon-container">
            <a
              href="mailto:mihikasaxena13@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CiMail className="footer__icon" style={{ color: "#ff5d5d" }} />
            </a>
            <div className="icon-name">Gmail</div>
          </div>

          <div className="icon-container">
            <a
              href="https://github.com/mihika14"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImGithub className="footer__icon" style={{ color: "white" }} />
            </a>
            <div className="icon-name">Github</div>
          </div>

          <div className="icon-container">
            <a
              href="https://www.linkedin.com/in/mihikasaxena14/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="footer__icon" style={{ color: "#0A66C2" }} />
            </a>
            <div className="icon-name">Linkedin</div>
          </div>

          <div className="icon-container">
            <a
              href="https://www.instagram.com/_mihika14_/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="footer__icon" style={{ color: "#E4405F" }} />
            </a>
            <div className="icon-name">Instagram</div>
          </div>

          <div className="icon-container">
            <a
              href="https://discord.com/channels/@me"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDiscord className="footer__icon" style={{ color: "#8A2BE2" }} />
            </a>
            <div className="icon-name">Discord</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
