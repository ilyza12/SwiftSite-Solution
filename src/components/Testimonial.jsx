import React, { useState, useEffect } from "react";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([
    {
      content:
        "I can't thank enough for their outstanding IT consulting services. Their team's insights and strategic guidance have been invaluable in streamlining our technology infrastructure. They took the time to understand our unique needs and delivered solutions that exceeded our expectations. Highly recommended for any business looking to leverage technology for growth.",
      author: "Hannah Amira",
      position: "Small Business Owner",
      photo: "/img/testimoni_girl.jpg",
    },
    {
      content:
        "Working with this company has been a game-changer for our business. Their expertise in web development not only transformed our online presence but also significantly improved user engagement. The team's dedication to quality and innovation sets them apart. We're thrilled with the results and look forward to future collaborations.",
      author: "Marlianti",
      position: "Art Gallery Owner",
      photo: "/img/testimoni_girl.jpg",
    },
    {
      content:
        "I'm incredibly pleased with the web design services provided by this company. The team's attention to detail and creativity truly brought my vision to life. The website is not only visually appealing but also user-friendly. Working with them was a breeze, and the final result exceeded my expectations. Highly recommended",
      author: "Daniel Ricciardo",
      position: "Food Review Blogger",
      photo: "/img/testimoni_boy.jpg",
    },
    {
      content:
        "Huge shoutout to this company for their exceptional web design work! They took our ideas and turned them into a sleek, modern website that perfectly represents our brand. The team was responsive, professional, and delivered on time. Our online presence has received a significant boost, and we're thrilled with the results. If you need top-notch web design, look no further!",
      author: "Song Kang",
      position: "Online Business Owner",
      photo: "/img/testimoni_boy.jpg",
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const calculateTransformValue = () => {
    if (testimonials.length <= 1) return "translateX(0%)";
    if (currentIndex === 0) return "translateX(0%)";
    return `translateX(-${currentIndex * 100}%)`;
  };

  return (
    <div className="testimonial_div" id="testimonials">
      <h2 className="testimonial-header">Testimonials</h2>
      <div className="testimonials-container">
        <div className="testimonials" style={{ transform: calculateTransformValue() }}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`testimonial ${index === currentIndex ? "active" : ""}`}>
              <img
                src={testimonial.photo}
                alt={`Testifier ${index + 1}`}
                className="testifier-photo"
              />
              <div className="testimonial-text">
                <p className="author">
                  {testimonial.author} - {testimonial.position}
                </p>
                <p style={{ wordWrap: "break-word", whiteSpace: "pre-line" }}>
                  {testimonial.content}
                </p>
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
