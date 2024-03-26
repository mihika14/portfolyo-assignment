import React, { useState } from "react";
import "./Projects.css";
import { AiFillGithub } from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";

function Projects({ userData }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  if (!userData || !userData.projects) {
    return null;
  }

  const { projects } = userData;

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalOpen(false);
  };

  return (
    <div className="projects-container" id="projects">
      <div class="section-header">
        <h1>Project Portfolio</h1>
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project._id}>
            <img
              src={project.image.url}
              alt={project.title}
              className="project-image"
            />
            <button
              className="project-button"
              onClick={() => openModal(project)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {modalOpen && selectedProject && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <h2 className="project-title">{selectedProject.title}</h2>
            <img
              className="selected-image"
              src={selectedProject.image.url}
              alt={selectedProject.title}
            />
            <p>Description: {selectedProject.description}</p>
            <p className="project-stack">
              <span className="Tech-stack">Tech Stack: </span>
              {selectedProject.techStack.join(", ")}
            </p>
            <div className="project-links">
              <a href={selectedProject.githuburl}>
                <AiFillGithub
                  style={{
                    backgroundColor: "white",
                    borderRadius:"50%",
                    color: "black",
                    fontSize: "40px",
                  }}
                />
                <p className="link-text">Github Link</p>
              </a>
              <a href={selectedProject.liveurl}>
                <BsGlobe
                  style={{
                    backgroundColor: "white",
                    borderRadius:"50%",
                    color: "black",
                    fontSize: "40px",
                  }}
                />
                <p className="link-text">Live Link</p>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
