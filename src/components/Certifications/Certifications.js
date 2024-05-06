import React from "react";
import "./Certifications.css";

export default function Certifications() {

    const certificationDetails = [
        {
            logo: "UDEMY",
            title: "Modern React with Redux",
            content: "This course provided me with a solid understanding of how to create complex and dynamic user interfaces using React. The course also covered state management in depth, which is crucial for building complex React applications. And how to use more advanced state management libraries such as Redux to handle complex state."
        },
        {
            logo: "DEVTOWN",
            title: "AUTHENTICATION SERVER",
            content: "In a seven-day workshop, I was able to develop a secure and reliable authentication server using MongoDB and Node.js. During this project, I learned how to integrate MongoDB with Node.js. This project provided me with hands-on experience in building a secure and scalable authentication system using MongoDB and Node.js."
        },
        {
            logo: "CETPA",
            title: "Advance Python",
            content: "During this workshop, I learned about the basics of Python programming, including classes, functions, and the popular data analysis library pandas. I also had the opportunity to build projects using Python's GUI library Tkinter and did a project, i.e., Zomato Food Analysis using libraries pandas and Numpy."
        },
        {
            logo: "Accenture",
            title: "Developer Job Simulation",
            content: "This Developer Program offered hands-on experience in key areas such as architecture, artificial intelligence, programming, security, and testing. From designing scalable systems to mastering AI techniques, coding, ensuring security, and validating software quality, I gained practical skills essential for a successful developer career."
        }
    ]
  
  return (
    <div id="certifications">
      <div className="section-header">
        <h1>Certifications</h1>
      </div>
      <section className="container">
        {certificationDetails.map((certification, index) => (
          <div className="cert-card" key={index}>
            <div className="cert-content">
              <p className="cert-logo">{certification.logo}</p>
              <div className="cert-title">{certification.title}</div>
              <div className="cert-hover_content">
                <p>{certification.content}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
