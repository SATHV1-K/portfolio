import React from 'react';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      title: 'Full-Stack Developer',
      company: 'Orbit Analytics',
      location: 'Atlanta, GA',
      duration: 'May 2024 - Present',
      description: [
        'Developed backend services for analytics platform using Java 8-17, Spring Boot, and Hibernate, implementing Kafka messaging for event-driven architecture while optimizing Oracle database queries and Redis caching to improve API response times and reduce system latency.',
        'Built RESTful APIs and responsive web components using Spring MVC and React.js, working with stakeholders to translate functional requirements into technical implementations for financial reporting features.',
        'Assisted in integrating Hugging Face LLM models via API endpoints in Spring Boot to enable natural language summarization of financial reports, collaborating with the team to fine-tune prompts for accurate insights from structured data.',
        'Supported production environment by troubleshooting database issues, refactoring Oracle PL/SQL stored procedures, and implementing performance improvements to reduce recurring errors and system bottlenecks.',
        'Collaborated with senior developers to integrate third-party APIs into existing J2EE application, implementing error handling and retry logic while containerizing services with Docker for AWS EC2 deployment.',
        'Contributed to establishing automated testing framework using JUnit and Mockito, writing unit and integration tests to improve code quality and streamline CI/CD pipeline with Jenkins.'
      ],
      technologies: ['Java', 'Spring Boot', 'Hibernate', 'React.js', 'Oracle Database', 'Apache Kafka', 'Redis', 'Docker', 'AWS', 'Jenkins']
    },
    {
      title: 'Web Developer',
      company: 'Florida Institute of Technology',
      location: 'Melbourne, FL',
      duration: 'Aug 2023 - May 2024',
      description: [
        'Designed and built full-stack web application using React.js, Spring Boot, and Hibernate with Google Cloud SQL backend, implementing Spring MVC architecture and RESTful APIs to serve research content to faculty and students.',
        'Developed meeting scheduler module using Spring Data JPA and MySQL, integrating real-time notifications through Google Pub/Sub and Firebase Cloud Messaging to automate room booking workflow.',
        'Containerized Spring Boot backend services with Docker and deployed on Google Cloud Run, setting up CI/CD pipeline with Cloud Build to enable faster and more reliable deployments.',
        'Integrated Dialogflow CX chatbot with a RAG pipeline to allow authorized users to query confidential research documents, using vector embeddings in Google Cloud SQL for secure retrieval and role-based access control to restrict sensitive data exposure.',
        'Implemented authentication system using Spring Security with JWT tokens and role-based access control, ensuring secure access to research data and meeting university security standards.'
      ],
      technologies: ['React.js', 'Spring Boot', 'Hibernate', 'Google Cloud Platform', 'MySQL', 'Docker', 'Dialogflow CX', 'Spring Security']
    },
    {
      title: 'ML Intern',
      company: 'AirQuery',
      location: 'Hyderabad, India',
      duration: 'Aug 2022 - May 2023',
      description: [
        'Contributed to AI-powered document Q&A system by developing REST APIs using Python and Java Spring Boot, collaborating with team members to expose ML features for document summarization and keyword extraction.',
        'Implemented various ML algorithms including TF-IDF and BERT-based transformers for keyword extraction and abstractive summarization, training on small domain-specific datasets to improve accuracy in legal document processing.',
        'Worked on PostgreSQL and MongoDB database design to store document metadata and embeddings, writing SQL queries and optimizing data retrieval for document search functionality.',
        'Supported Agile development cycle through sprint planning and requirements analysis, handled production deployments and resolved bugs reported during testing phases to maintain system stability.'
      ],
      technologies: ['Python', 'Java', 'Spring Boot', 'TF-IDF', 'BERT', 'PostgreSQL', 'MongoDB', 'Machine Learning']
    },
    {
      title: 'Contract: Solar Data Automation Project',
      company: 'Infinite Photon Energy',
      location: 'Texas, USA',
      duration: 'Contract Role',
      description: [
        'Built an automated data pipeline to fetch, parse, and consolidate 15-minute solar energy and price data from ERCOT CSV/ZIP files and Photon facility APIs into Google Sheets.',
        'Designed dual ETL workflows (historical full-load + incremental 15-minute updates) with deduplication logic, ensuring consistent and accurate reporting.',
        'Integrated with ERCOT JSON APIs to download new market files and with Photon APIs to validate power and accumulated energy data across sources.',
        'Implemented automated revenue calculations, converting technical energy readings into business-critical financial metrics for reporting and analysis.',
        'Created daily completeness trackers (96 intervals/day & file-level monitoring) and optimized batch inserts to keep scripts within Google Apps Script execution limits.'
      ],
      technologies: ['Google Apps Script', 'Google Sheets API', 'ERCOT APIs', 'ETL', 'Data Pipeline', 'JavaScript', 'JSON', 'CSV Processing']
    }
  ];

  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className="section-header">
          <h2>Work Experience</h2>
          <p className="section-subtitle">My professional journey</p>
        </div>
        
        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="experience-icon">
                <FaBriefcase />
              </div>
              
              <div className="experience-content">
                <div className="experience-header">
                  <h3>{exp.title}</h3>
                  <h4>{exp.company}</h4>
                  <div className="experience-meta">
                    <span className="duration">
                      <FaCalendarAlt /> {exp.duration}
                    </span>
                    <span className="location">
                      <FaMapMarkerAlt /> {exp.location}
                    </span>
                  </div>
                </div>
                
                <div className="experience-description">
                  <ul>
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="experience-technologies">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;