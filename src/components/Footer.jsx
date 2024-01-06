// Footer.js

import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa"; // Import social media icons

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
      <div className="contact-us">
          <h2>Contact Us</h2>
          <p>Email: info@example.com</p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Address: 123 Main Street, City, Country</p>
        </div>
        <div className="subscribe">
          <h2>Subscribe To Our Newsletter</h2>
          <div className="subscribe-input">
            <label htmlFor="emailInput"></label>
            <input type="email" id="emailInput" placeholder="Enter your email" />
            <div className="subscribe-arrow" onClick={() => alert("Subscribed!")}>
              &rarr; {/* Unicode character for right arrow */}
            </div>
          </div>
        </div>
        <div className="connect-with-us">
          <h2>Connect With Us!</h2>
          <div className="social-icons">
            <FaInstagram />
            <FaFacebook />
            <FaLinkedin />
          </div>          
        </div>
        <div className="copyright"> {/* Corrected class name */}
          <p>&copy; 2023 Your Company Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
