import React from "react";
import "./Navbar.css";

export default function Navbar() {
  const navData = [
    { name: "About", link: "#about" },
    { name: "Experience", link: "#experience" },
    { name: "Education", link: "#education" },
    { name: "Skills", link: "#skills" },
    { name: "Certifications", link: "#certifications" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <div className="navbar-portfolio">
      <nav className="navigationWrapper">
        <div className="logoWrapper">
          <span className="stylish">Mihika</span>
          <span className="logo">Saxena</span>
        </div>
        <ul className="navigation">
          {navData.map((item, index) => (
            <li key={index} className="parent">
              <a className="link" href={item.link}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
