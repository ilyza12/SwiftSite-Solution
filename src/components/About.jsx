import React from "react";

function About() {
  return (
    <section className="about-white" id="about">
      <div className="about">
        <h2 className="about-title">About Us</h2>
        <p className="about-subtitle">
          We are a team of passionate individuals dedicated to creating the best possible product
          for our customers. With years of experience in our respective fields, we bring a wealth of
          knowledge and expertise to every project we undertake.
        </p>
        <div className="about-mission">
          <img src="/img/mission.png" alt="Mission" className="about-icon mission-icon" />
          <div>
            <h3 className="about-title-mission">Mission</h3>
            <p className="about-subtitle-mission">
              Our mission is to provide high-quality services that exceed our customers' expectations,
              and we strive to continually improve our processes and offerings to meet and exceed those
              needs.
            </p>
          </div>
        </div>
        <div className="about-vision">
          <img src="/img/vision.png" alt="Vision" className="about-icon vision-icon" />
          <div>
            <h3 className="about-title-vision">Vision</h3>
            <p className="about-subtitle-vision">
              Our vision is to be a global leader in IT services, known for for our outstanding service,
              innovative solutions, and a strong commitment to sustainability and positive impact.
            </p>
          </div>
        </div>
        <div className="about-values">
          <img src="/img/values.png" alt="Values" className="about-icon values-icon" />
          <div>
            <h3 className="about-title-values">Values</h3>
            <ul className="about-subtitle-values">
              <li>Integrity and trust guide every interaction.</li>
              <li>Dedication to continuous improvement and growth.</li>
              <li>Innovation drives us to deliver cutting-edge solutions.</li>
              <li>Collaboration is our strength for achieving excellence.</li>
            </ul>
          </div>
        </div>
        <div className="about-video-wrapper">
          <iframe
            title="Corporate Video"
            src="https://www.youtube.com/embed/QyhwSYhX09s?si=zxwNxJkVwt8P_Rgf"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default About;
