import React from "react";
import "./Timeline.css";

function Education() {
  const educationData = [
    {
      type: "College",
      timeline: [
        {
          year: "2020-2023",
          title: "Bsc(Hons.) Electronics",
          institution: "Delhi University , 8.29 CGPA",
        },
      ],
    },
    {
      type: "School",
      timeline: [
        {
          year: "2019-2020",
          title: "PCM , Class 12",
          institution: "DMA Rampur , 87.00%",
        },
      ],
    },
    {
      type: "School",
      timeline: [
        {
          year: "2017-2018",
          title: "Class 10",
          institution: "DMA Rampur , 92.6%",
        },
      ],
    },
  ];

  return (
    <div className="education-extracurii" id="education">
      <div className="education">
        <h1 className="education-header">Education Timeline</h1>
        <ul className="timeline">
          {educationData.map((educationItem, index) => (
            <li
              className="event"
              key={index}
              data-date={educationItem.timeline[0].year}
            >
              <h3 className="education-title">
                {educationItem.timeline[0].title}
              </h3>
              <p className="education-inst">
                {educationItem.timeline[0].institution}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="extracurricular">
        <h1 className="extra-header">Extracurricular Engagements</h1>
        <div className="extracurricular-container">
          <div class="extracurricular-item">
            <h2 className="edu-descr">
              National-Level Hockey Player (2014-2019):
            </h2>
            <hr />
            <p>
              <ul>
                <li className="edu-descr">
                  I had the privilege of being a member of the national-level
                  hockey team. Throughout my school years, I actively
                  participated in esteemed championships and tournaments, honing
                  my skills and contributing to the team's success.
                </li>
                <br />{" "}
                <li className="edu-descr">
                  This invaluable experience played a significant role in
                  shaping my teamwork, discipline, and determination. It not
                  only propelled me to achieve on the field but also positively
                  impacted my personal growth beyond the hockey arena.
                </li>
              </ul>
            </p>
          </div>
          <br />
          <div class="extracurricular-item">
            <h2 className="edu-descr">Departmental Council (College):</h2>
            <hr />
            <p>
              <ul>
                <li className="edu-descr">
                  During my time in college, I actively participated in the
                  academic community by serving as a committed member of the
                  departmental council.
                </li>
                <br />
                <li className="edu-descr">
                  {" "}
                  Within this role, I assumed diverse responsibilities such as
                  coordinating events and enhancing the channels of
                  communication between students and faculty. Through this
                  engagement, my abilities in leadership, communication, and
                  problem-solving thrived and developed.
                </li>
                <br />
                <li className="edu-descr">
                  {" "}
                  Additionally, I had the opportunity to orchestrate a prominent
                  Hackathon in partnership with Coding Blocks, which
                  successfully drew the participation of more than 500
                  individuals.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
