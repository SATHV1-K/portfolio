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
              Innovative AI/ML Professional with progressive experience spanning machine learning, full-stack development, and cloud-native AI systems. Skilled in architecting end-to-end ML pipelines across model integration, backend infrastructure, and cloud deployment in AWS, Azure, and GCP ecosystems. Proven expertise in LLM integration, Retrieval Augmented Generation (RAG), intelligent automation, and scalable API design using Python, Java (Spring Boot), and Node.js. Experienced in applying predictive analytics, customer segmentation, NLP, and data-driven automation to solve business problems in insurance, FinTech, and enterprise domains.
            </p>
            <p>
              What drives me as an engineer is the challenge of turning complex data into systems that deliver real, measurable impact. Whether I'm building a RAG-powered document intelligence platform, designing ML serving backend infrastructure, or deploying an AI chatbot that saves hours of manual work, my focus is always the same: build reliable, scalable systems that organizations can grow with and that continue to advance long after deployment.
            </p>

            <div className="about-stats">
              <div className="stat">
                <h3>3+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>3+</h3>
                <p>Years of AI/ML</p>
              </div>
              <div className="stat">
                <h3>30+</h3>
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
