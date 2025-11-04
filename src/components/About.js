import React from 'react';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-header">
          <h2>About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              Software Developer with 2+ years of experience in Java full-stack development, specializing in Spring Boot, Hibernate, and React.js. Proficient in building scalable applications with frontend frameworks and backend APIs, while integrating AI components such as LLMs for natural language processing and RAG systems for secure data retrieval. Experienced in managing CI/CD pipelines using Jenkins, Git, and Maven, with hands-on work in messaging systems (Kafka), Oracle/PostgreSQL databases, MongoDB, and Agile practices. Self-motivated team player with strong collaboration skills across global teams, passionate about delivering reliable, AI-enhanced solutions in fast-paced environments.
            </p>
            
            <div className="about-stats">
              <div className="stat">
                <h3>2+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>1+</h3>
                <p>Years of AI/ML</p>
              </div>
              <div className="stat">
                <h3>15+</h3>
                <p>Technologies Mastered</p>
              </div>
            </div>
          </div>
          
          <div className="about-image">
            <img src="./SathJasti_Image.jpg" alt="Sathvik Jasti" className="profile-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;