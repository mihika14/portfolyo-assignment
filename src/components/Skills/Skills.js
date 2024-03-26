import React, { useState } from "react";
import "./Skills.css";

function Skills({ userData }) {
  // State to track whether the video is playing or not
  const [videoPlaying, setVideoPlaying] = useState(false);
  if (!userData || !userData.skills || !userData.youtube) {
    return null; // Render nothing if userData or required fields are unavailable
  }

  const { skills, youtube } = userData;

  // Function to toggle the video play state
  const toggleVideoPlay = () => {
    setVideoPlaying(!videoPlaying);
  };

  return (
    <>
      <div class="section-header" id="services">
        <h1>Technical Proficiencies</h1>
      </div>
      <div className="skills-and-videos">
        <div className="skills-container">
          {skills.map((skill) => (
            <div className="skill-card" key={skill._id}>
              <img
                src={skill.image.url}
                alt={skill.name}
                className="skill-image"
              />
              <div className="skill-name">{skill.name}</div>
              <div className="skill-level">
                <div
                  className="skill-percent"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
              <div className="skill-percent-number">{skill.percentage}%</div>
            </div>
          ))}
        </div>

        <div className="videos">
          <div className="video-container">
            <div key={youtube._id} className="video">
              <div className="video-clickable">
                {videoPlaying ? (
                  <iframe
                    title={youtube.title}
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${youtube.embedId}`}
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <>
                    <img
                      src={youtube.thumbnail}
                      alt={youtube.title}
                      className="video-thumbnail"
                    />
                    <button onClick={toggleVideoPlay} className="play-button">
                     
                    </button>
                  </>
                )}
                <p className="video-title">{youtube.title}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
