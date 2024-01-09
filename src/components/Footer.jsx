// Footer.js

import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa"; // Import social media icons

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-content">
        <div className="contact-us">
          <h2>Contact Us</h2>
          <p>Email: swiftsitesolution@gmail.com</p>
          <p>Phone: +1 (123) 456-7890</p>
          <p>Address: 123 Main Street, Gelugor, Malaysia</p>
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
            <a href="#">
              <FaInstagram size={30} />
            </a>
            <a href="#">
              <FaFacebook size={30} />
            </a>
            <a href="#">
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
      </div>
      <div>
        {/* Corrected class name */}
        <p>&copy; 2024 SwiftSite Solution. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
