import React from 'react';

const Introduction = () => {
  return (
    <section className="intro" id="intro">
      <div className="container">
        <div className="intro-content">
          <p>
            I'm passionate about creating robust, scalable applications that solve real-world problems. 
            With expertise spanning full-stack development, cloud architecture, and machine learning, 
            I bring ideas to life through clean, efficient code and innovative solutions.
          </p>
          <p>
            From designing intuitive user interfaces to architecting complex backend systems, 
            I thrive on the challenge of turning complex requirements into elegant, user-friendly applications.
          </p>
          
          <div className="intro-stats">
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Technologies Mastered</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;