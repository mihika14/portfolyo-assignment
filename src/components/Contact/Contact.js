import React from "react";
import "./Contact.css";
import { CiGlobe } from "react-icons/ci";
import { BiLogoGmail } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import { FaHome } from "react-icons/fa";

function Contact({ userData }) {
  // Check if userData is available
  if (!userData || !userData.about) {
    return null; // Render nothing if userData is unavailable
  }

  // Destructure userData to access contact information
  const { username, email, address, phoneNumber } = userData;

  return (
    <footer className="contact-footer">
      <div className="contact-info">
        <p className="contact-details">
          <FaHome
            style={{
              fontSize: "30px",
              color: "black",
              marginRight: "10px",
              backgroundColor: "white",
              borderRadius: "50%",
            }}
          />{" "}
          {userData.about.address}
        </p>
        <p className="contact-details">
          <CiGlobe
            style={{
              fontSize: "40px",
              color: "blue",
              marginRight: "10px",
              backgroundColor: "white",
              borderRadius: "50%",
            }}
          />{" "}
          {username}
        </p>
        <p className="contact-details">
          <BiLogoGmail
            style={{
              fontSize: "40px",
              color: "red",
              marginRight: "10px",
              backgroundColor: "white",
              borderRadius: "50%",
            }}
          />{" "}
          {email}
        </p>

        <p className="contact-details">
          <FaPhoneAlt
            style={{
              fontSize: "40px",
              color: "black",
              marginRight: "10px",
              backgroundColor: "white",
              borderRadius: "50%",
            }}
          />
          {userData.about.phoneNumber}
        </p>
      </div>
    </footer>
  );
}

export default Contact;
