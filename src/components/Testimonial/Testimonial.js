import React, { useState, useEffect } from "react";
import "./Testimonials.css"; // Import your CSS file for styling

function Testimonials({ userData }) {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    if (userData && userData.testimonials && userData.testimonials.length > 0) {
      const interval = setInterval(() => {
        setCurrentTestimonialIndex((prevIndex) => 
          (prevIndex + 1) % (userData.testimonials.length)
        );
      }, 5000); 

      return () => clearInterval(interval); 
    }
  }, [userData]); 

  if (!userData || !userData.testimonials || userData.testimonials.length === 0) {
    return null;
  }

  const { testimonials } = userData;
  const currentTestimonial = testimonials[currentTestimonialIndex];

  return (
    <div className="owl-carousel testimonial-carousel" id="testimonials">
      <h1 className="testimonial-header">Testimonials</h1>
      <div className="single-testimonial">
        <div className="testimonials-wrapper">
          <h4>{currentTestimonial.review}</h4>
          <div className="testimonials-blob"></div>
          <div className="testimonials-img">
            <img src={currentTestimonial.image.url} alt="Testimonial" />
          </div>
          <div className="testimonials-person-info">
            <p className="testimonial-title">
              <b>{currentTestimonial.name}</b>
              <br />
              {currentTestimonial.position}
            </p>
          </div>
        </div>
      </div>
    </div>
   
  );
}

export default Testimonials;
