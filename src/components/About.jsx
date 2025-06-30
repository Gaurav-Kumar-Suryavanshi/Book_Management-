// About.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';import Navbar from './Navbar';

function About() {
  return (
    <div>
      {/* About Section */}
      <div className="about-container">
        <h1 className="about-title">About Book Management</h1>
        <p className="about-text">
          Welcome to the Book Management App! This project helps users manage and search books efficiently. 
          You can look up books by title or author, and view their details in a clean and responsive UI.
        </p>

        <h2 className="about-subtitle">🔧 Features:</h2>
        <ul className="about-list">
          <li>🔍 Real-time book search</li>
          <li>📖 Easy-to-read layout</li>
          <li>⚡ Fast performance using React + Vite</li>
        </ul>

        <p className="about-footer">
          Built by <strong>Gaurav Suryavanshi</strong> using React.
        </p>
      </div>
    </div>
  );
}

export default About;
