import React, { useState } from "react";
import "./Skills.css";
import { FaPython, FaReact , FaDocker ,  FaJava} from "react-icons/fa";
import {
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoPython,
  BiLogoHtml5,
} from "react-icons/bi";
import { DiNodejs, DiCss3 } from "react-icons/di";
import { TbBrandCpp } from "react-icons/tb";
import { FcElectronics , FcLinux  } from "react-icons/fc";
import { BsGit } from "react-icons/bs";
import { SiSemanticuireact ,  SiVercel , SiExpress ,  SiTailwindcss } from "react-icons/si";
import { PiFileSql } from "react-icons/pi";

function Skills({}) {
  const icons = [
    { name: "Electronics", component: FcElectronics, color: "#fcd116" },
    { name: "SQL", component: PiFileSql, color: "#f34f29" },
    { name: "JavaScript", component: BiLogoJavascript, color: "#f0db4f" },
    { name: "Python", component: BiLogoPython, color: "#306998" },
    { name: "Java", component: FaJava, color: "#f34f29" },
    { name: "C++", component: TbBrandCpp, color: "#00599c" },
    { name: "HTML", component: BiLogoHtml5, color: "#e34c26" },
    { name: "CSS", component: DiCss3, color: "#2965f1" },
    { name: "MongoDB", component: BiLogoMongodb, color: "#439934" },
    { name: "Express", component: SiExpress },
    { name: "React.js", component: FaReact, color: "#61dbfb" },
    { name: "Node.js", component: DiNodejs, color: "#68a063" },
    { name: "Git", component: BsGit, color: "#f34f29" },
    {
      name: "Semantic-UI React",
      component: SiSemanticuireact,
      color: "#61dafb",
    },
    { name: "Tailwind", component:SiTailwindcss, color:"#06b6d4" },
    { name: "Linux", component: FcLinux },
    { name: "Docker", component: FaDocker, color: "#ADD8E6" },
    { name: "Vercel", component: SiVercel, color: "#000000" },
  ];

  return (
    <>
      <div class="section-header" id="skills">
        <h1>Skills & Technologies</h1>
      </div>
      <div className="skills-and-videos">
        <div className="skills-container">
        {icons.map((icon, index) => (
          <div className="skill-card" key={index}>
            <div className="icon" style={{ color: icon.color }}>
              {React.createElement(icon.component)}
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
