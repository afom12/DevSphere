import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FiGithub, FiExternalLink, FiCode, FiDatabase, FiServer } from 'react-icons/fi';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      _id: '1',
      title: 'CodeCollab - Real-time Collaborative Editor',
      description: 'A real-time code editor with collaborative features like live cursors, syntax highlighting, and video chat integration. Built with React, Node.js, and WebSockets.',
      tags: ['React', 'Node.js', 'WebSockets', 'MongoDB', 'CodeMirror'],
      github: 'https://github.com/yourusername/codecollab',
      link: 'https://codecollab-demo.com',
      image: '/codecollab-screenshot.jpg'
    },
    {
      _id: '2',
      title: 'EcoTrack - Carbon Footprint Tracker',
      description: 'An AI-powered carbon footprint calculator that suggests personalized sustainability improvements. Features data visualization and integration with smart home devices.',
      tags: ['Python', 'TensorFlow', 'D3.js', 'Firebase', 'IoT'],
      github: 'https://github.com/yourusername/ecotrack',
      link: 'https://ecotrack-app.com',
      image: '/ecotrack-screenshot.jpg'
    },
    {
      _id: '3',
      title: 'MediConnect - Healthcare Management System',
      description: 'A HIPAA-compliant platform connecting patients with healthcare providers. Includes appointment scheduling, telemedicine, and prescription management.',
      tags: ['TypeScript', 'React Native', 'NestJS', 'PostgreSQL', 'AWS'],
      github: 'https://github.com/yourusername/mediconnect',
      link: 'https://mediconnect-health.com',
      image: '/mediconnect-screenshot.jpg'
    },
    {
      _id: '4',
      title: 'ArtisanAI - AI-Powered Design Assistant',
      description: 'Generative AI tool that helps designers create UI mockups from natural language prompts. Integrates with Figma and Adobe Creative Suite.',
      tags: ['Next.js', 'OpenAI API', 'Figma Plugin', 'Tailwind CSS', 'Supabase'],
      github: 'https://github.com/yourusername/artisanai',
      link: 'https://artisanai.design',
      image: '/artisanai-screenshot.jpg'
    }
  ]);
  const [loading, setLoading] = useState(false);

  // In a real app, you would fetch from your API:
  // useEffect(() => {
  //   axios.get('http://localhost:5000/api/projects')
  //     .then(res => {
  //       setProjects(res.data);
  //       setLoading(false);
  //     })
  //     .catch(err => {
  //       console.error('Error fetching projects:', err);
  //       setLoading(false);
  //     });
  // }, []);

  return (
    <div className="projects-container">
      <div className="section-header">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">Handcrafted digital solutions that solve real problems</p>
        <div className="tech-stack-banner">
          <span><FiCode /> Frontend</span>
          <span><FiServer /> Backend</span>
          <span><FiDatabase /> Databases</span>
          <span>DevOps</span>
        </div>
      </div>

      {loading ? (
        <div className="loading-spinner"></div>
      ) : projects.length === 0 ? (
        <div className="empty-state">
          <p>No projects found. Check back soon!</p>
        </div>
      ) : (
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project._id} className="project-card">
              <div className="project-image">
                <img src={project.image || '/project-placeholder.jpg'} alt={project.title} />
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub repository">
                      <FiGithub />
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label="Live demo">
                      <FiExternalLink />
                    </a>
                  )}
                </div>
                <div className="project-badge">
                  {project.tags.includes('React') || project.tags.includes('Next.js') ? 'Frontend' : 
                   project.tags.includes('Node.js') || project.tags.includes('NestJS') ? 'Backend' : 'Full Stack'}
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  <FiCode />
                  {project.tags.map(tag => (
                    <span key={tag} className="tech-tag">{tag}</span>
                  ))}
                </div>
                <div className="project-stats">
                  <span>★ 4.8/5</span>
                  <span>1000+ users</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="github-cta">
        <p>Want to see more? Check out my GitHub for additional projects and contributions.</p>
        <a href="https://github.com/afom12" className="github-button" target="_blank" rel="noopener noreferrer">
          <FiGithub /> View GitHub Profile
        </a>
      </div>
    </div>
  );
};

export default Projects;
