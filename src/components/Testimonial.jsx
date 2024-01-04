import React, { useState, useEffect } from "react";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([
    { content: "[Company Name] industry impact and unwavering dedication to customer satisfaction set them apart", author: "Hannah Schmitz", position: "Media Personnel", photo: "/img/Hannah Scmitz CAT201.webp" },
    { content: "Fast and reliable service. Highly recommended!", author: "Charles Leclerc", position: "Customer", photo: "/img/Charles Leclerc CAT201.webp" },
    { content: "Exceptional service—quick, professional, and hassle-free.", author: "Daniel Ricciardo", position: "Customer", photo: "/img/Daniel Ricciardo CAT201.webp" },
    { content: "The positive work culture and emphasis on growth create an environment where I can thrive. Proud to contribute to our shared success.", author: "Susie Wolff", position: "Employee", photo: "/img/Sussie Wolff CAT201.webp" },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const calculateTransformValue = () => {
    const multiplier = 3.5;
    return `translateX(-${currentIndex * 100 + currentIndex * multiplier}%)`;
  };

  return (
    <div>
      <h2 className="testimonial-header">Testimonials</h2>
      <div className="testimonials-container">
        <div className="testimonials" style={{ transform: calculateTransformValue() }}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`testimonial ${index === currentIndex ? "active" : ""}`}>
              <img src={testimonial.photo} alt={`Testifier ${index + 1}`} className="testifier-photo" />
              <div className="testimonial-text">
                <p className="author">{testimonial.author} - {testimonial.position}</p>
                <p style={{ wordWrap: "break-word", whiteSpace: "pre-line" }}>{testimonial.content}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="arrows-container">
          <div className="arrow arrow-left" onClick={prevTestimonial}>
            &#8592; Back
          </div>
          <div className="arrow arrow-right" onClick={nextTestimonial}>
            Next &#8594;
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
