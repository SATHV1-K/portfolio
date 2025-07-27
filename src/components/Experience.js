import React from 'react';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Developer',
      company: 'MICOR Industries',
      location: 'Remote',
      duration: 'Jul 2024 - Present',
      description: [
        'Engineered a full-stack manufacturing execution system using Java 17, Spring Boot, and React.js, optimizing business logic with multithreading and enhancing UI with Redux and ES6+ features.',
        'Developed an intelligent production scheduling module using XGBoost and Random Forest algorithms, managing and deploying models on AWS SageMaker with A/B testing to improve manufacturing efficiency.',
        'Architected a scalable, event-driven microservices system using Apache Kafka and Redis caching, applying design patterns (MVC, Singleton, DTO) and securing RESTful/GraphQL APIs with OAuth 2.0.',
        'Managed robust data persistence and retrieval across Oracle Database and MongoDB using Hibernate/JPA, optimizing complex SQL queries and NoSQL aggregation pipelines for real-time analytics.',
        'Automated deployment and ensured system consistency by building CI/CD pipelines with Jenkins and AWS CodePipeline, containerizing applications with Docker, and leveraging AWS services (EC2, ECS, RDS, S3).'
      ],
      technologies: ['Java', 'Spring Boot', 'React.js', 'Machine Learning', 'Amazon Web Services (AWS)', 'Oracle Database', 'MongoDB', 'Apache Kafka', 'Redis', 'Docker']
    },
    {
      title: 'Software Developer',
      company: 'Insurance Group of Florida, Inc',
      location: 'Remote',
      duration: 'Aug 2023 - Jul 2024',
      description: [
        'Developed a comprehensive insurance agency management platform using Java 8+, Spring Boot, and React.js with Material-UI, participating actively in the full Agile/Scrum lifecycle.',
        'Built an AI-powered customer retention system using Python (scikit-learn) deployed on AWS SageMaker and created a real-time analytics dashboard with React/D3.js for intelligent risk assessment.',
        'Contributed to a microservices architecture using Spring Boot, designing RESTful APIs with Swagger documentation and implementing Redis caching to enhance system responsiveness and service orchestration.',
        'Engineered the persistence layer using Hibernate/JPA with MySQL and integrated MongoDB and DynamoDB to manage unstructured customer data and track real-time interactions.',
        'Deployed and monitored scalable applications on AWS (EC2, RDS, S3, Lambda), utilizing GIT for version control and maintaining high code quality through rigorous peer reviews.'
      ],
      technologies: ['Java', 'Spring Boot', 'React.js', 'Python', 'Machine Learning', 'AWS', 'MySQL', 'MongoDB', 'Redis']
    },
    {
      title: 'Software Developer',
      company: 'Apollo Hospitals',
      location: 'India',
      duration: 'Aug 2021 - Jul 2023',
      description: [
        'Developed and maintained a secure, full-stack hospital management system using Java 8+, Spring Framework, and React.js with Redux for state management in an Agile/Scrum environment.',
        'Implemented an AI-driven diagnostic support system using Python (TensorFlow) and deployed models on AWS SageMaker for real-time patient risk assessment, with automated alerts via SNS.',
        'Architected the healthcare application using J2EE design patterns, developed RESTful API clients for third-party system integration, and implemented Redis caching to reduce data access latency.',
        'Managed data persistence using Hibernate/JPA with Oracle Database for patient records and MongoDB for medical documents, ensuring HIPAA compliance through comprehensive Log4j auditing.',
        'Deployed the application suite across AWS services including EC2, RDS, S3 for storage, and Lambda for automated report generation, ensuring high availability and scalability.'
      ],
      technologies: ['Java', 'Spring Framework', 'React.js', 'Python', 'TensorFlow', 'AWS', 'Oracle Database', 'MongoDB', 'Redis']
    },
    {
      title: 'Software Developer',
      company: 'The New India Assurance Company Limited',
      location: 'India',
      duration: 'Jun 2019 - Aug 2021',
      description: [
        'Developed a responsive online insurance platform using Java 8, Spring MVC/Security, and React.js, implementing core Java concepts like multithreading to optimize performance.',
        'Engineered an intelligent underwriting automation system using machine learning and a real-time fraud detection model, deploying them on AWS and storing results in DynamoDB.',
        'Designed and developed RESTful web services for seamless data exchange between front-end and back-end systems, implementing Redis caching to improve performance for frequently accessed policy data.',
        'Managed database architecture using Hibernate/JPA with an Oracle Database, integrated MongoDB for policy document storage, and created automated PL/SQL reports using AWS Lambda.',
        'Leveraged AWS services (S3, CloudWatch, SNS) for storage, monitoring, and notifications within an Agile framework that utilized CI/CD for continuous, reliable deployments.'
      ],
      technologies: ['Java', 'Spring MVC', 'React.js', 'Machine Learning', 'Amazon Web Services (AWS)', 'Oracle Database', 'MongoDB', 'Redis']
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