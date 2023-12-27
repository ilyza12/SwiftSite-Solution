import React, { useState, useEffect } from "react";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([
    { content: "Testimonial 1 content", author: "Hannah Schmitz, Editor" },
    { content: "Testimonial 2 content", author: "Charles Leclerc, Customer" },
    { content: "Testimonial 3 content", author: "Daniel Ricciardo" },
    { content: "Testimonial 4 content", author: "Susie Wolff" },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the index to show the next testimonial
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change the duration as needed (currently set to 5 seconds)

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [testimonials]);

  return (
    <div>
      <h2 className="testimonial-header">Testimonials</h2>
      <div className="testimonials-container">
        <div className="testimonials" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial">
              <p>{testimonial.content}</p>
              <p className="author">{testimonial.author}</p>
            </div>
          ))}
        </div>
        <div className="progress-bar" style={{ width: `${((currentIndex + 1) / testimonials.length) * 100}%` }}></div>
      </div>
    </div>
  );
};

export default Testimonials;

