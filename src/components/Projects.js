import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Full-Stack File Storage Application',
      description: 'A comprehensive file storage and management system with secure user authentication, file upload/download capabilities, and real-time file sharing. Built with modern full-stack technologies.',
      image: '/FileDrop.png',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
      icons: ['⚛️', '💻', '🗄️', '🔒'],
      github: 'https://github.com/SATHV1-K/Full-Stack-File-Storage-Application',
      demo: '#',
      category: 'Full Stack'
    },
    {
      title: 'Movie Database App',
      description: 'A dynamic movie database application featuring movie search, detailed information display, ratings, and user reviews. Integrated with external movie APIs for comprehensive movie data.',
      image: '/MovieDatabase.png',
      technologies: ['React', 'JavaScript', 'API Integration', 'CSS3', 'HTML5'],
      icons: ['⚛️', '🎬', '🔍', '⭐'],
      github: 'https://github.com/SATHV1-K/movie-database-app',
      demo: 'https://movie-database-app-rouge.vercel.app/',
      category: 'Frontend'
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-header">
          <h2>My Projects</h2>
          <p className="section-subtitle">Some of my recent work</p>
        </div>
        
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} className="project-img" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      🔗 Code
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                      🚀 Demo
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <span className="project-category">{project.category}</span>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  <div className="tech-icons">
                    {project.icons.map((icon, i) => (
                      <span key={i} className="tech-icon">{icon}</span>
                    ))}
                  </div>
                  <div className="tech-list">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;