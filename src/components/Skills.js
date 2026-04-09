import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', icon: '🐍' },
        { name: 'Java', icon: '☕' },
        { name: 'JavaScript', icon: '🟨' },
        { name: 'TypeScript', icon: '🔷' },
        { name: 'SQL', icon: '🗄️' }
      ]
    },
    {
      title: 'AI/ML Libraries & Techniques',
      skills: [
        { name: 'Scikit-learn', icon: '🔬' },
        { name: 'XGBoost', icon: '🚀' },
        { name: 'LightGBM', icon: '💡' },
        { name: 'PyTorch', icon: '🔥' },
        { name: 'TensorFlow', icon: '🧠' },
        { name: 'CatBoost', icon: '🐱' },
        { name: 'Predictive Modeling', icon: '📈' },
        { name: 'Segmentation Modeling', icon: '🧩' },
        { name: 'Classification & Clustering', icon: '📊' },
        { name: 'Feature Engineering', icon: '⚙️' }
      ]
    },
    {
      title: 'NLP / LLMs',
      skills: [
        { name: 'OpenAI APIs (GPT)', icon: '🤖' },
        { name: 'Hugging Face Transformers', icon: '🤗' },
        { name: 'LangChain', icon: '🔗' },
        { name: 'RAG', icon: '📚' },
        { name: 'BERT', icon: '🧠' },
        { name: 'Pinecone', icon: '🌲' },
        { name: 'Milvus', icon: '🔢' },
        { name: 'Faiss', icon: '🔢' },
        { name: 'Chroma', icon: '🎨' },
        { name: 'Chain-of-Thought Prompting', icon: '💭' },
        { name: 'Few-shot Prompting', icon: '🎯' },
        { name: 'Prompt Guardrails', icon: '🛡️' }
      ]
    },
    {
      title: 'MLOps & Automation',
      skills: [
        { name: 'MLflow', icon: '📦' },
        { name: 'Docker', icon: '🐳' },
        { name: 'FastAPI', icon: '⚡' },
        { name: 'Apache Airflow', icon: '🌬️' },
        { name: 'CI/CD (GitHub Actions)', icon: '🔄' },
        { name: 'SHAP', icon: '📊' },
        { name: 'LIME', icon: '🍋' },
        { name: 'RAGAS Metrics', icon: '📏' },
        { name: 'Prophet', icon: '🔮' },
        { name: 'SARIMA / ARIMA', icon: '📉' }
      ]
    },
    {
      title: 'Cloud Platforms',
      skills: [
        { name: 'AWS EC2', icon: '☁️' },
        { name: 'AWS S3', icon: '☁️' },
        { name: 'AWS Lambda', icon: '⚡' },
        { name: 'AWS SageMaker', icon: '🧪' },
        { name: 'AWS Glue', icon: '🔧' },
        { name: 'Azure App Service', icon: '☁️' },
        { name: 'Azure SQL DB', icon: '🗄️' },
        { name: 'Azure Functions', icon: '⚡' },
        { name: 'GCP BigQuery', icon: '📊' },
        { name: 'GCP Dataflow', icon: '🌊' },
        { name: 'GCP Cloud Storage', icon: '☁️' }
      ]
    },
    {
      title: 'Databases & Data Stores',
      skills: [
        { name: 'PostgreSQL', icon: '🐘' },
        { name: 'MySQL', icon: '🐬' },
        { name: 'MongoDB', icon: '🍃' },
        { name: 'Redis', icon: '🔴' },
        { name: 'Snowflake', icon: '❄️' },
        { name: 'Azure SQL Database', icon: '🗄️' }
      ]
    },
    {
      title: 'Web Development',
      skills: [
        { name: 'React.js', icon: '⚛️' },
        { name: 'Node.js', icon: '💚' },
        { name: 'Spring Boot', icon: '🍃' },
        { name: 'FastAPI', icon: '⚡' },
        { name: 'Flask', icon: '🧪' },
        { name: 'RESTful APIs', icon: '🌐' },
        { name: 'Microservices', icon: '🔧' }
      ]
    },
    {
      title: 'Visualization & BI',
      skills: [
        { name: 'Matplotlib', icon: '📊' },
        { name: 'Seaborn', icon: '🌊' },
        { name: 'Plotly', icon: '📈' },
        { name: 'Power BI', icon: '📊' },
        { name: 'Tableau', icon: '📉' }
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