
import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

function App() {
  return (
    <div className="container">
      <header className="hero">
        <div className="hero-content">
          <div className="avatar-container">
            <img src="/profile.jpg" alt="Your Name" className="avatar" />
            <div className="avatar-decoration"></div>
          </div>
          <h1 className="hero-title">
            <span className="gradient-text">DevSphere</span> 🌐
          </h1>
          <p className="subtitle">Crafting Digital Experiences with Modern Full-Stack Solutions</p>
          
          <div className="social-links">
            <a href="https://github.com/afom12" target="_blank" rel="noopener noreferrer"><FiGithub /></a>
            <a href="https://www.linkedin.com/in/afom12/" target="_blank" rel="noopener noreferrer"><FiLinkedin /></a>
            <a href="https://x.com/Afomi_K" target="_blank" rel="noopener noreferrer"><FiTwitter /></a>
            <a href="mailto:afomiyaketsella12@gmail.com"><FiMail /></a>
          </div>

          <nav className="main-nav">
            <Link to="/projects" className="nav-link">
              <span className="link-text">Projects</span>
              <span className="link-hover"></span>
            </Link>
            <Link to="/blog" className="nav-link">
              <span className="link-text">Blog</span>
              <span className="link-hover"></span>
            </Link>
            <Link to="/contact" className="nav-link">
              <span className="link-text">Contact</span>
              <span className="link-hover"></span>
            </Link>
          </nav>
        </div>
        <div className="scroll-indicator">
          <span></span>
        </div>
      </header>
    </div>
  );
}

export default App;
