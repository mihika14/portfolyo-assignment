import React from "react";
import "./Services.css";

function Services({ userData }) {
  // Check if userData is available and if it contains the services field
  if (!userData || !userData.about) {
    return null; // Render nothing if userData or userData.services is unavailable
  }

  const { services } = userData;

  return (
    <div className="portfolio-services" >
      <div class="section-header">
        <h1>Explore Services</h1>
      </div>
      <div className="service-card" id="services">
        {services.map((service) => (
          <div key={service._id} className="services-card">
            <img
              src={service.image.url}
              alt="Service"
              className="services-card-img"
            />
            <div className="services-card-info">
              <p className="services-text-title">{service.name}</p>
              <p className="services-text-body">{service.desc}</p>
            </div>
            <span className="services-text-title">{service.charge}</span>
            <div className="services-card-button"></div>
          </div>
          //
        ))}
      </div>
    </div>
  );
}

export default Services;
