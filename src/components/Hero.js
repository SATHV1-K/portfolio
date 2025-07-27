import React from 'react';

const Hero = () => {

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Resume Sath Jasti.pdf';
    link.download = 'Resume Sath Jasti.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="name">Hello, I'm Sath Jasti</h1>
            <h2 className="role">a full-stack developer</h2>
            <p className="description">
              Java • Spring • React • AWS • Database • AI/ML
            </p>
            
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={handleDownloadResume}>
                Download Resume
              </button>
              <a 
                href="https://sathv1-k.github.io/portfolio/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Terminal Portfolio
              </a>
            </div>
          </div>
          
          <div className="hero-video-container">
            <video 
              className="hero-video"
              autoPlay 
              loop 
              muted 
              playsInline
            >
              <source src="/GIF.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      
      <div className="shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
    </section>
  );
};

export default Hero;