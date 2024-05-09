import React from "react";
import "./Contact.css";
import { FaGithub, FaLinkedin, FaDiscord, FaInstagram } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { ImGithub } from "react-icons/im";
import gmail from './assests/gmail.jpeg'
import slack from './assests/slack.png'
import linkedin from './assests/linkedin.jpeg'
import discord from './assests/docker.png'
import insta from './assests/insta.jpeg'
import github from './assests/github.png'

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
              <img src={gmail} className="footer__icon"/>
            </a>
            <div className="icon-name">Gmail</div>
          </div>

          <div className="icon-container">
            <a
              href="https://github.com/mihika14"
              target="_blank"
              rel="noopener noreferrer"
            >
                  <img src={github} className="footer__icon"/>
            </a>
            <div className="icon-name">Github</div>
          </div>

          <div className="icon-container">
            <a
              href="https://www.linkedin.com/in/mihikasaxena14/"
              target="_blank"
              rel="noopener noreferrer"
            >
                <img src={linkedin} className="footer__icon"/>
            </a>
            <div className="icon-name">Linkedin</div>
          </div>

          <div className="icon-container">
            <a
              href="https://www.instagram.com/_mihika14_/"
              target="_blank"
              rel="noopener noreferrer"
            >
                 <img src={insta} className="footer__icon"/>
            </a>
            <div className="icon-name">Instagram</div>
          </div>

          <div className="icon-container">
            <a
              href="https://discord.com/channels/@me"
              target="_blank"
              rel="noopener noreferrer"
            >
                 <img src={discord} className="footer__icon"/>
            </a>
            <div className="icon-name">Discord</div>
          </div>
          </div>
      </div>
    </footer>
  );
}

export default Contact;
