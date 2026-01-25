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
              I'm a Software Developer with experience building production ready systems that blend AI, data, and full stack engineering to solve real business problems. At Orbit Analytics, I engineer Java Spring Boot REST APIs, integrate Hugging Face LLMs for data summarization and natural language querying, and deploy models on AWS SageMaker and Docker to improve performance, reliability, and delivery speed. Previously, as a Research Assistant at Florida Institute of Technology, I built full stack applications with React and Node.js, incorporating RAG based LLM features to make complex NASA standards interactive and searchable, while automating deployments on Google Cloud Run. I've also shipped freelance solutions, including a full stack dance studio management platform with React, TypeScript, Node.js, PostgreSQL, and third party integrations (Square, Twilio, Resend), as well as data automation pipelines that eliminate hours of manual work and improve data quality for solar energy forecasting. My core toolkit includes Java, Python, JavaScript/TypeScript, React, Node.js, PostgreSQL, AWS, GCP, and Docker, and I enjoy collaborating in Agile teams to design scalable architectures, optimize data workflows, and deliver clear, measurable impact.
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