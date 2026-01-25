import React from 'react';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Developer',
      company: 'Orbit Analytics',
      location: 'New York, NY',
      duration: 'May 2024 - Present',
      description: [
        'Engineered REST APIs using Java Spring Boot that integrated Hugging Face LLMs to enable AI driven data summarization and natural language query processing, reducing average API response time by 30% and improving user query accuracy.',
        'Developed data processing scripts in python to automate data extraction and transformation, reducing manual effort by 30% and improving data accuracy for stakeholder reporting.',
        'Collaborated with UI/UX designers to refine React components, ensuring adherence to accessibility standards and improving usability scores.',
        'Deployed machine learning models on AWS Sagemaker using PyTorch, streamlining the model training process and reducing deployment time by 50%.',
        'Implemented Docker containers for model deployment, ensuring consistent environments across development and production, which improved deployment reliability and reduced rollback incidents by 70%.'
      ],
      technologies: ['Java', 'Spring Boot', 'Hugging Face LLMs', 'React.js', 'Python', 'AWS Sagemaker', 'PyTorch', 'Docker']
    },
    {
      title: 'Research Assistant',
      company: 'Florida Institute of Technology',
      location: 'Melbourne, FL',
      duration: 'Aug 2023 - May 2024',
      description: [
        'Developed innovative full stack applications with React.js and Node.js, incorporating AI features via RAG + LLMs to make NASA standards interactive and queryable, boosting research productivity by 25%.',
        'Maintained software through unit testing, debugging, and documentation, troubleshooting access issues to ensure seamless integration with Google Cloud SQL.',
        'Participated in SDLC phases from analysis to support, collaborating with teams using Agile methodologies and Git for source control.',
        'Streamlined deployment pipelines by containerizing services with Docker and automating on Google Cloud Run, while documenting architectural decisions for knowledge sharing.'
      ],
      technologies: ['React.js', 'Node.js', 'RAG', 'LLMs', 'Google Cloud Platform', 'Google Cloud SQL', 'Docker', 'Git']
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