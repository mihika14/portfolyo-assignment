import React, { useState } from "react";
import "./Skills.css";
import python from './assests/python.png'
import electronics from './assests/electronics.jpeg'
import html from './assests/html.jpeg'
import css from './assests/css.png'
import react from './assests/react.png'
import node from './assests/node.png'
import mongo from './assests/mongo.jpeg'
import express from './assests/express.png'
import cpp from './assests/c++.jpeg'
import docker from './assests/docker.png'
import git from './assests/git.png'
import java from './assests/java.jpeg'
import semantic from './assests/sem.png'
import tailwind from './assests/tailwind.jpeg'
import linux from './assests/linux.jpeg'
import postman from './assests/pos.png'
import vercel from './assests/vercel.png'
import sql from './assests/sql.png'
import js from './assests/js..png'
function Skills() {
  const icons = [
    { name: "Electronics", image: electronics, color: "#fcd116" },
    { name: "SQL", image: sql, color: "#00758f" },
    { name: "JavaScript", image: js, color: "#f0db4f" },
    { name: "Python", image: python, color: "#00758f" },
    { name: "Java", image: java, color: "#f89820" },
    { name: "C++", image: cpp, color: "#00599c" },
    { name: "HTML", image: html, color: "#f06529" },
    { name: "CSS", image: css, color: "#2965f1" },
    { name: "MongoDB", image: mongo, color: "#21ba45" },
    { name: "Express", image: express },
    { name: "React.js", image: react, color: "#2965f1" },
    { name: "Node.js", image: node, color: "#215732" },
    { name: "Git", image: git, color: "#f34f29" },
    // { name: "Semantic-UI", image: semantic, color: "#2185d0" },
    { name: "Postman", image: postman, color: "#f06529" },
    { name: "Tailwind", image: tailwind, color: "#06b6d4" },
    { name: "Linux", image: linux },
    { name: "Docker", image: docker, color: "#ADD8E6" },
    { name: "Vercel", image: vercel, color: "#000000" },
  ];

  return (
    <>
      <div className="section-header" id="skills">
        <h1>Skills & Technologies</h1>
      </div>
      <div className="skills-and-videos">
        <div className="skills-container">
          {icons.map((icon, index) => (
            <div className="skill-card" key={index}>
               <div className="icon-containers">
                {icon.image && <img src={icon.image} alt={icon.name} className="icon" />}
              </div>
              <div className="skill-name">{icon.name}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Skills;