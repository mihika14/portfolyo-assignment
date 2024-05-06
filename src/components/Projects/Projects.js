import React, { useState } from "react";
import "./Projects.css";
import { AiFillGithub } from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";
import filestorage from "./assests/drive.png";
import booking from "./assests/bookin app.png";
import ecom from "./assests/ecom.png";
import recipe from "./assests/recipe.png";
import crud from "./assests/crud.png";

function Projects() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      _id: 1,
      title: "File Management App",
      image: filestorage,
      description:
        "The MERN File Management App with Multer streamlines file handling, offering secure uploads, storage, and downloads. Built on MERN, it enables user authentication, multiple uploads, efficient storage, and easy downloads.",
      keypoints: [
        "Authentication: Secure login ensures authorized access.",
        "Uploads: Multer facilitates multiple file uploads with metadata storage.",
        "Storage: Files stored securely, locally or in the cloud.",
        "Downloads: Easy file retrieval with secure downloads.",
        "Deletion: Users can delete files, managing storage.",
        "Error Handling: Robust error management ensures reliability.",
        "Responsive UI: React frontend ensures seamless navigation.",
        "Scalability: Efficient handling of large volumes of files.",
      ],
      techStack: ["MongoDB", "ReactJS", "NodeJS", "ExpressJS", "Multer"],
      githuburl: "https://github.com/mihika14/File-App",
    },
    {
      _id: 2,
      title: "E-Rickshaw Booking App ",
      image: booking,
      description:
        "The E-Rickshaw Booking App offers a seamless booking experience for users and drivers alike. It efficiently matches users with drivers. With robust login and signup functionalities, users can access the app securely, while drivers can register and manage their services effortlessly.",
      keypoints: [
        "User Authentication: Secure login and signup processes enable users to access the app securely.",
        "Driver Registration: Drivers can sign up and create profiles, providing necessary information such as license details, vehicle information, and contact details for verification.",
        "Location Tracking: The app utilizes GPS technology to track the real-time location of both users and drivers, ensuring accurate positioning and efficient matching.",
        "Nearest Driver Allocation: Upon booking a ride, the app identifies the user's location and displays the nearest available drivers on the map interface.",
        "Booking Management: Users can easily book rides, specify destinations, and view estimated fares, with options to schedule rides in advance.",
        "Driver Dashboard: Drivers have access to a dedicated dashboard where they can manage ride requests, track earnings, and view user feedback, optimizing their efficiency and performance'",
      ],
      techStack: [
        "MongoDB",
        "ReactJS",
        "NodeJS",
        "ExpressJS",
        "SeetAlert2",
        "React-router-dom",
      ],
      githuburl: "https://github.com/mihika14/RickshawBookingApp-frontend-",
    },
    {
      _id: 3,
      title: "Recipes App",
      image: recipe,
      description:
        "The Recipes App offers a wide range of recipes for food enthusiasts. Users can explore various cuisines, search for specific dishes, and discover new recipes to try out.",
      keypoints: [
        "User-Friendly Interface: Intuitive design for easy navigation and pleasant user experience.",
        "Recipe Exploration: Users can explore various cuisines, search for specific dishes, and discover new recipes.",
        "Visual Appeal: Beautifully presented recipes with high-quality images to entice users.",
        "Food API Integration: Utilizes a food API to fetch recipe data, ensuring an extensive collection of recipes from around the world.",
        "Responsive Design: Ensures compatibility across devices, allowing users to access the app from desktops, tablets, and smartphones.",
        "Ingredient List and Instructions: Provides detailed ingredient lists and step-by-step instructions for each recipe, making cooking hassle-free.",
        "Save and Rate Recipes: Users can save their favorite recipes for easy access later and rate them.",
      ],
      techStack: ["ReactJS", "Food API", "HTML", "CSS"],
      githuburl: "https://github.com/mihika14/recipebook",
    },
    {
      _id: 4,
      title: "E-Commerce Website",
      image: ecom,
      description:
        "The E-Commerce Website offers a seamless shopping experience for users, featuring a wide range of products across various categories.",
      keypoints: [
        "Product Catalog: A diverse catalog of products across various categories, providing users with a wide selection of items to choose from.",
        "Cart Functionality: Users can add products to their cart, review their selections, and adjust quantities as needed before proceeding to checkout.",
        "PayPal Checkout: Secure PayPal integration allows users to complete transactions with confidence, ensuring a smooth and hassle-free checkout process.",
        "User Authentication: Secure login and signup processes enable users to create accounts, track order history, and manage personal information.",
        "Responsive Design: Ensures compatibility across devices, allowing users to shop seamlessly from desktops, tablets, and smartphones.",
        "Product Reviews and Ratings: Users can leave reviews and ratings for products, helping other shoppers make informed purchasing decisions.",
      ],
      techStack: ["MongoDB", "ExpressJS", "ReactJS", "Node.js", "PayPal API"],
      githuburl: "https://github.com/mihika14/ecommerce",
    },
    {
      _id: 5,
      title: "Student Admin Panel",
      image: crud,
      description:
        "The Student Admin Panel simplifies management of student records. Built with MERN stack, it offers CRUD functionality for adding, updating, and maintaining student information.",
      keypoints: [
        "CRUD Operations: Add, update, and maintain student records.",
        "Secure Authentication: Ensures authorized access to admin panel.",
        "Data Validation: Validates input data to maintain data integrity.",
        "Responsive Design: Compatible across devices for easy access.",
      ],
      techStack: ["MongoDB", "ExpressJS", "ReactJS", "Node.js"],
      githuburl: "https://github.com/mihika14/Student-adminpanel",
    }
  ];

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
              src={project.image}
              alt={project.title}
              className="project-image"
            />
            <h2 className="project-title1">{project.title}</h2>
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
            <p className="project-descr"><b>Description: </b>{selectedProject.description}</p>
            <p className="project-stack">
              <span className="Tech-stack">Tech Stack: </span>
              {selectedProject.techStack.join(", ")}
            </p>
            <div className="project-keypoints">
              <p>
                <strong className="keypoint">Key Points:</strong>
              </p>
              <ul>
                {selectedProject.keypoints.map((point, index) => (
                  <li className="project-point" key={index}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="project-links">
              <a href={selectedProject.githuburl}>
                <AiFillGithub
                  style={{
                    backgroundColor: "white",
                    borderRadius: "50%",
                    color: "black",
                    fontSize: "40px",
                  }}
                />
                <p className="link-text">Github Link</p>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
