import React from "react";
import "./Timeline.css"; 

export default function Education({ userData }) {
  if (!userData || !userData.timeline) {
    return null; 
  }

  const { timeline } = userData;

  const educationItems = timeline.filter((item) => item.forEducation);

  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0];
  };

  return (
    <>
    <div className="timeline-portfolio">
      <div className="timeline" id="timeline">
        <div className="section">
          {educationItems.map((item) => (
            <div className="entry" key={item._id}>
              <div className="title">
              <h2 className="company-name">{`${item.jobTitle}, ${item.company_name}`}</h2>
                <h3 className="company-date">{`${formatDate(item.startDate)} - ${formatDate(
                  item.endDate
                )}`}</h3>
               
              </div>
              <div className="body">
                <p>{item.summary}</p>
                <ul>
                  {item.bulletPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
