import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages & Frameworks',
      skills: [
        { name: 'Java (8-17)', icon: '☕' },
        { name: 'J2EE (Servlets, JSP, JDBC)', icon: '☕' },
        { name: 'Spring Framework', icon: '🍃' },
        { name: 'Spring Boot', icon: '🍃' },
        { name: 'Spring MVC', icon: '🍃' },
        { name: 'Spring Data JPA', icon: '🍃' },
        { name: 'Spring Security', icon: '🔒' },
        { name: 'Apache Kafka', icon: '📡' },
        { name: 'Hibernate ORM', icon: '🔧' },
        { name: 'Python', icon: '🐍' },
        { name: 'JavaScript (ES6+)', icon: '🟨' },
        { name: 'React.js', icon: '⚛️' },
        { name: 'Redux', icon: '🔄' }
      ]
    },
    {
      title: 'Database Technologies',
      skills: [
        { name: 'Oracle Database', icon: '🗄️' },
        { name: 'Oracle SQL (Stored Procedures, Packages, Functions)', icon: '🗄️' },
        { name: 'MySQL', icon: '🐬' },
        { name: 'PostgreSQL', icon: '🐘' },
        { name: 'MongoDB', icon: '🍃' },
        { name: 'Redis', icon: '🔴' },
        { name: 'AWS DynamoDB', icon: '⚡' },
        { name: 'Google Cloud SQL', icon: '☁️' },
        { name: 'Vector Database', icon: '🔢' }
      ]
    },
    {
      title: 'Web Technologies',
      skills: [
        { name: 'RESTful APIs', icon: '🌐' },
        { name: 'Microservices Architecture', icon: '🔧' },
        { name: 'Responsive Web Design', icon: '📱' },
        { name: 'HTML5', icon: '🌐' },
        { name: 'CSS3', icon: '🎨' },
        { name: 'JSON', icon: '📄' },
        { name: 'XML', icon: '📄' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        { name: 'AWS (EC2, S3, RDS, Lambda)', icon: '☁️' },
        { name: 'Google Cloud Platform', icon: '☁️' },
        { name: 'Cloud Run', icon: '☁️' },
        { name: 'Cloud Functions', icon: '☁️' },
        { name: 'Pub/Sub', icon: '📡' },
        { name: 'Cloud Build', icon: '🔧' },
        { name: 'Docker', icon: '🐳' },
        { name: 'Jenkins', icon: '🔧' },
        { name: 'CI/CD Pipelines', icon: '🔄' },
        { name: 'Terraform', icon: '🏗️' },
        { name: 'Git/GitHub', icon: '📝' },
        { name: 'Maven', icon: '📦' }
      ]
    },
    {
      title: 'AI/ML',
      skills: [
        { name: 'Hugging Face Transformers', icon: '🤗' },
        { name: 'RAG Pipelines', icon: '🔗' },
        { name: 'TF-IDF', icon: '📊' },
        { name: 'BERT', icon: '🧠' },
        { name: 'Scikit-learn', icon: '🔬' },
        { name: 'Embeddings (Sentence Transformers)', icon: '🔢' },
        { name: 'XG Boost', icon: '🚀' },
        { name: 'Random Forest', icon: '🌲' }
      ]
    },
    {
      title: 'Development Practices',
      skills: [
        { name: 'SDLC (Agile/Scrum)', icon: '🔄' },
        { name: 'Requirements Analysis', icon: '📋' },
        { name: 'Software Design', icon: '🏗️' },
        { name: 'Test-Driven Development', icon: '🧪' },
        { name: 'JUnit', icon: '🧪' },
        { name: 'Mockito', icon: '🎭' },
        { name: 'Production Support', icon: '🔧' },
        { name: 'Performance Optimization', icon: '⚡' },
        { name: 'Stakeholder Management', icon: '👥' },
        { name: 'Client Interfacing', icon: '🤝' }
      ]
    },
    {
      title: 'Tools',
      skills: [
        { name: 'JIRA', icon: '📋' },
        { name: 'Postman', icon: '📮' },
        { name: 'Swagger/OpenAPI', icon: '📖' },
        { name: 'IntelliJ IDEA', icon: '💡' },
        { name: 'Eclipse', icon: '🌙' },
        { name: 'SQL Developer', icon: '🗄️' },
        { name: 'Dialogflow CX', icon: '🤖' },
        { name: 'Firebase', icon: '🔥' },
        { name: 'Hugging Face Hub', icon: '🤗' }
      ]
    }
  ];

  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="section-header">
          <h2>Skills & Technologies</h2>
          <p className="section-subtitle">Technologies I work with</p>
        </div>
        
        <div className="skills-compact">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title} className="skill-category-compact">
              <h3 className="skill-category-title">{category.title}</h3>
              <div className="skills-tags">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="skill-tag">
                    <span className="skill-icon">{skill.icon}</span>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;