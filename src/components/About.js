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
              I am a Full-Stack Java Developer with over six years of experience, I specialize in building robust, enterprise-grade applications from end to end. My expertise is rooted in Java 17 and the Spring ecosystem (including Spring Boot, MVC, and Security), where I design and implement scalable microservices and RESTful APIs documented with Swagger.
            </p>
            <p>
              On the front end, I create responsive and modern user interfaces using React.js and Redux. A key focus of my work involves integrating AI/ML models to drive business outcomes, leveraging AWS services like SageMaker, Lambda, EC2, and S3. I am proficient with a variety of data solutions, from SQL databases like Oracle and MySQL to NoSQL alternatives such as MongoDB and DynamoDB, and I utilize Apache Kafka and Redis for real-time data processing.
            </p>
            <p>
              My entire workflow is grounded in modern DevOps practices, including Docker containerization and building CI/CD pipelines for efficient, automated deployments.
            </p>
            
            <div className="about-stats">
              <div className="stat">
                <h3>6+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>2+</h3>
                <p>Years of AI/ML</p>
              </div>
              <div className="stat">
                <h3>10+</h3>
                <p>Technologies Mastered</p>
              </div>
            </div>
          </div>
          
          <div className="about-image">
            <img src="/SathJasti_Image.jpg" alt="Sath Jasti" className="profile-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;