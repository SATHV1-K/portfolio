import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Java (8, 11, 17)', icon: '☕' },
        { name: 'Python', icon: '🐍' },
        { name: 'HTML5', icon: '🌐' },
        { name: 'CSS3', icon: '🎨' },
        { name: 'JavaScript ES6+', icon: '🟨' },
        { name: 'SQL', icon: '🗄️' }
      ]
    },
    {
      title: 'Framework & Libraries',
      skills: [
        { name: 'Spring Boot (2.x, 3.x)', icon: '🍃' },
        { name: 'Spring MVC', icon: '🍃' },
        { name: 'Spring Security', icon: '🔒' },
        { name: 'Spring Data JPA', icon: '🍃' },
        { name: 'Hibernate', icon: '🔧' },
        { name: 'React.js', icon: '⚛️' },
        { name: 'Redux', icon: '🔄' },
        { name: 'Node.js', icon: '🟢' },
        { name: 'jQuery', icon: '📜' },
        { name: 'Bootstrap', icon: '🅱️' },
        { name: 'Material-UI', icon: '🎨' }
      ]
    },
    {
      title: 'AI/ML Technologies',
      skills: [
        { name: 'Machine Learning', icon: '🧠' },
        { name: 'Supervised Learning', icon: '📊' },
        { name: 'XGBoost', icon: '🚀' },
        { name: 'Random Forest', icon: '🌲' },
        { name: 'Linear Regression', icon: '📈' },
        { name: 'Decision Trees', icon: '🌳' },
        { name: 'Model Evaluation', icon: '📋' },
        { name: 'Feature Engineering', icon: '⚙️' },
        { name: 'AI Model Integration', icon: '🔗' },
        { name: 'TensorFlow', icon: '🤖' },
        { name: 'Scikit-learn', icon: '🔬' },
        { name: 'Predictive Analytics', icon: '🔮' },
        { name: 'Real-time ML Systems', icon: '⚡' }
      ]
    },
    {
      title: 'Web Technologies',
      skills: [
        { name: 'RESTful APIs', icon: '🌐' },
        { name: 'Microservices', icon: '🔧' },
        { name: 'GraphQL', icon: '📊' },
        { name: 'WebSockets', icon: '🔌' },
        { name: 'Servlets', icon: '☕' },
        { name: 'JDBC', icon: '🔗' },
        { name: 'Swagger/OpenAPI', icon: '📖' },
        { name: 'JSON', icon: '📄' },
        { name: 'XML', icon: '📄' },
        { name: 'OAuth 2.0', icon: '🔐' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      skills: [
        { name: 'AWS (EC2, S3, RDS, Lambda)', icon: '☁️' },
        { name: 'AWS (SageMaker, CloudWatch)', icon: '☁️' },
        { name: 'AWS (SES, SNS, SQS, API Gateway)', icon: '☁️' },
        { name: 'Docker', icon: '🐳' },
        { name: 'Jenkins', icon: '🔧' },
        { name: 'CI/CD', icon: '🔄' },
        { name: 'Kubernetes', icon: '⚙️' }
      ]
    },
    {
      title: 'Tools & Platforms',
      skills: [
        { name: 'IntelliJ IDEA', icon: '💡' },
        { name: 'VS Code', icon: '💻' },
        { name: 'GIT', icon: '📝' },
        { name: 'JIRA', icon: '📋' },
        { name: 'Postman', icon: '📮' },
        { name: 'Apache Kafka', icon: '📡' },
        { name: 'JUnit', icon: '🧪' },
        { name: 'Mockito', icon: '🎭' },
        { name: 'Maven', icon: '📦' }
      ]
    },
    {
      title: 'Databases',
      skills: [
        { name: 'Oracle Database', icon: '🗄️' },
        { name: 'MySQL', icon: '🐬' },
        { name: 'MongoDB', icon: '🍃' },
        { name: 'DynamoDB', icon: '⚡' },
        { name: 'Redis', icon: '🔴' },
        { name: 'Database Design', icon: '🏗️' },
        { name: 'Query Optimization', icon: '⚡' }
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