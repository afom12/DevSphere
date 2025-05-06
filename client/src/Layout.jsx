import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Layout = ({ children }) => {
  return (
    <div className="app-container">
      <header className="main-header">
        <div className="header-content">
          <Link to="/" className="logo">
            <span>DevSphere</span>
          </Link>
          <nav className="header-nav">
            <Link to="/projects">Projects</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="main-content">
        {children}
      </main>

      <footer className="main-footer">
        <div className="footer-content">
          <p>© {new Date().getFullYear()} DevSphere. All rights reserved.</p>
          <div className="footer-links">
            <a href="https://github.com/afom12" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/afom12/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://x.com/Afomi_K" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;