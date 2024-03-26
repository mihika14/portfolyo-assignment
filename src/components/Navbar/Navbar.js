import React from "react";
import './Navbar.css'

export default function Navbar() {

    const navData = [
        { name: "About", link: "#about" },
        { name: "Projects", link: "#projects" },
        { name: "Services", link: "#services" },
        { name: "Skills", link: "#skills" },
        { name: "Testimonials", link: "#testimonials" },
        { name: "Education And Experience", link: "#timeline" },
        { name: "Contact", link: "#contact" },
    ]

  return (
    <div className="navbar-portfolio">
      <nav className="navigationWrapper">
        <div className="logoWrapper">
          <span className="stylish">John</span>
          <span className="logo">Doe</span>
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
