import React from "react";
import "./Experience.css";

const jobdetails = [
  {
    date: "(August 2023- February 2024)",
    title: "Technical Support Engineer",
    organization: "MICROLAND",
    body: "I excel in managing network servers and implementing troubleshooting procedures to maintain seamless operations. With a proactive approach, I swiftly address network issues by implementing effective solutions that optimize performance and enhance reliability. My ability to collaborate with cross-functional teams allows me to tackle complex technical challenges collectively, fostering an environment of innovation and continuous improvement. Through strategic planning and diligent execution, I consistently enhance system efficiency, ensuring optimal functionality and user satisfaction.",
  },
  {
    date: "(September 2022 - December 2022)",
    title: "Web Developer",
    organization: "SIMMI FOUNDATION",
    body: "During my three-month internship at Simmi Foundation, I had the opportunity to work with a team of developers and gain practical experience in React.js, JavaScript, HTML, and CSS. I led the creation of a crowdfunding website, managing API payloads and ensuring data accuracy. I enhanced site responsiveness for better user experience and collaborated with a developer team, gaining expertise in Git and web development practices. Our joint efforts produced a high-quality platform that met client and user expectations.",
    link: "https://drive.google.com/drive/folders/1Cc6YIGhz8BsYNDIQ8EiSPD5CG0Nygtr8?usp=sharing",
  },
  
];

const Experience = () => {
  return (
    <div id="experience">
      <div class="section-header">
        <h1>Experience</h1>
      </div>
      <div className="experience-certification">
        <div className="exp">
          <ul className="exp-timeline">
            {jobdetails.map((jobdetail, index) => (
              <li className="event" key={index}>
                <h3 className="exp-title">
                  {jobdetail.title} at {jobdetail.organization}
                </h3>
                <div className="exp-year">{jobdetail.date} </div>
                <p className="exp-inst">{jobdetail.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
