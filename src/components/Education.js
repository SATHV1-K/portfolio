import React from 'react';
import { FaGraduationCap, FaMapMarkerAlt } from 'react-icons/fa';

const Education = () => {
  const education = [
    {
      degree: 'Master of Computer Information Systems',
      school: 'Florida Institute of Technology',
      location: 'Melbourne, FL',
      gpa: '3.9/4.0',
      description: 'Advanced studies in computer information systems with focus on enterprise solutions and modern technologies.',
      courses: ['Java', 'Data Structures', 'Database Systems', 'Computer Networks', 'Capstone Project']
    },
    {
      degree: 'Bachelor of Technology in Artificial Intelligence',
      school: 'Vidya Jyothi Institute of Technology',
      location: 'Hyderabad, India',
      gpa: '3.7/4.0',
      description: 'Comprehensive foundation in artificial intelligence and machine learning technologies.',
      courses: ['Artificial Intelligence', 'Machine Learning', 'IOT', 'Data Science', 'NLP', 'Robotics', 'Computer Vision']
    }
  ];



  return (
    <section className="education" id="education">
      <div className="container">
        <div className="section-header">
          <h2>Education</h2>
          <p className="section-subtitle">My academic background</p>
        </div>
        
        <div className="education-content">
          <div className="education-grid">
            {education.map((edu, index) => (
              <div key={index} className="education-card">
                <div className="education-icon">
                  <FaGraduationCap />
                </div>
                
                <div className="education-details">
                  <div className="education-header">
                    <h4>{edu.degree}</h4>
                    <h5>{edu.school}</h5>
                    <div className="education-meta">
                      <span className="location">
                        <FaMapMarkerAlt /> {edu.location}
                      </span>
                      <span className="gpa">
                        GPA: {edu.gpa}
                      </span>
                    </div>
                  </div>
                  
                  <p className="education-description">{edu.description}</p>
                  
                  {edu.courses.length > 0 && (
                    <div className="relevant-courses">
                      <h6>Relevant Coursework:</h6>
                      <div className="courses-list">
                        {edu.courses.map((course, i) => (
                          <span key={i} className="course-tag">{course}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;