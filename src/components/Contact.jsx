// Contact.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import Navbar from './Navbar';

function Contact() {
  return (
    <div>
     
      {/* Contact Section */}
      <div className="contact-container">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-text">
          We'd love to hear from you! Feel free to reach out through any of the following:
        </p>

        <div className="contact-info">
          <p><strong>Email:</strong> abcd@example.com</p>
          <p><strong>Phone:</strong> 12345678</p>
          <p><strong>Address:</strong> 123 Book Lane, React City, JS 12345</p>
        </div>

        {/* Optional Contact Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea rows="4" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
      <p className="about-footer">
          Built by <strong>Gaurav Suryavanshi</strong> using React.
        </p>
    </div>
  );
}

export default Contact;
