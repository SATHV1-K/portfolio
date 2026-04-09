import React from 'react';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      title: 'AI/ML Platform Engineer',
      company: 'Reliance Surfaces',
      location: 'USA',
      duration: 'Feb 2026 – Present',
      description: [
        'Architected AI-integrated platform features by incorporating LLM API endpoints and intelligent content generation pipelines using OpenAI APIs, enabling automated surface material recommendations that reduced manual product consultation time.',
        'Designed ML-informed backend services using Python and Node.js, processing structured and unstructured product catalog data to power predictive analytics dashboards delivering real-time business insights.',
        'Built automated data ingestion workflows leveraging AWS Lambda and S3, enabling real-time feature extraction from product catalogs for downstream ML model consumption.',
        'Implemented intelligent product search modules using vector similarity matching with Pinecone, improving customer product discovery accuracy by ~25%.'
      ],
      technologies: ['Python', 'Node.js', 'OpenAI APIs', 'LangChain', 'Pinecone', 'AWS Lambda', 'AWS S3', 'AWS EC2', 'React.js', 'PostgreSQL', 'Docker', 'Git']
    },
    {
      title: 'AI Backend Engineer',
      company: 'Antra, Inc.',
      location: 'Sterling, VA, USA',
      duration: 'Jul 2025 – Feb 2026',
      description: [
        'Engineered scalable backend infrastructure using Java (Spring Boot) and Python to support real-time model inference endpoints, serving enterprise AI features across multiple microservices.',
        'Designed and optimized PostgreSQL/MySQL schemas structured as ML feature stores, enabling efficient data retrieval for model training pipelines and reducing query latency by 30%.',
        'Implemented Redis-based caching for model prediction results and high-frequency reads, improving response times by 30% and supporting 99.9% uptime SLA.',
        'Architected secure RESTful APIs for data exchange between ML microservices and external vendor platforms, ensuring reliable integration with production AI workflows.',
        'Managed AWS (EC2, S3) deployment and monitoring with automated health checks and scaling policies for AI serving workloads.'
      ],
      technologies: ['Java', 'Spring Boot', 'Python', 'PostgreSQL', 'MySQL', 'Redis', 'AWS EC2', 'AWS S3', 'React.js', 'Docker', 'Git', 'CI/CD']
    },
    {
      title: 'ML Research Assistant',
      company: 'Florida Institute of Technology',
      location: 'Melbourne, FL, USA',
      duration: 'Aug 2023 – May 2025',
      description: [
        'Developed and deployed a custom AI chatbot using Node.js and OpenAI LLM APIs, integrating NLU with automated calendar scheduling based on real-time availability, saving the lead professor 5+ hours/week of manual coordination.',
        'Served as lead developer building a centralized platform managing high-impact publications, faculty projects, and digital asset libraries with optimized content retrieval.',
        'Built a custom CMS module with advanced image compression and lazy loading, reducing page load times by 40% for large-scale research image portfolios.',
        'Acted as sole technical point of contact, translating academic requirements into production features and delivering comprehensive system documentation for future scalability.'
      ],
      technologies: ['Node.js', 'OpenAI APIs', 'React.js', 'JavaScript', 'Python', 'AWS S3', 'MongoDB', 'Git']
    },
    {
      title: 'ML Engineer',
      company: 'Orbit Analytics',
      location: 'India',
      duration: 'Apr 2022 – Jun 2023',
      description: [
        'Developed fraud detection and claims risk assessment models using Scikit-learn, CatBoost, and LightGBM, improving claims adjudication accuracy and supporting data-driven underwriting decisions.',
        'Performed behavioral clustering and customer profiling using K-Means and hierarchical clustering, enabling personalized insurance offerings and contributing to improved customer retention.',
        'Built claims volume and premium forecasting models using Prophet and SARIMA, enabling actuarial teams to enhance reserve planning and improve loss ratio projections.',
        'Designed ETL pipelines using GCP Dataflow, BigQuery, and Cloud Storage, ensuring reliable ingestion and transformation of structured and semi-structured insurance datasets.',
        'Created executive dashboards in Tableau, Power BI, and Plotly, delivering real-time insights on claims trends, risk metrics, and customer segments for actuaries and underwriters.'
      ],
      technologies: ['Python', 'Scikit-learn', 'CatBoost', 'LightGBM', 'Prophet', 'SARIMA', 'SQL', 'MongoDB', 'Snowflake', 'Tableau', 'Power BI', 'GCP BigQuery', 'GCP Dataflow']
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