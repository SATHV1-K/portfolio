import React from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'sath.jasti@gmail.com',
      link: 'mailto:sath.jasti@gmail.com'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: '+1 (470) 290-3665',
      link: 'tel:+14702903665'
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sathvikjasti'
    },
    {
      icon: <FaGithub />,
      name: 'GitHub',
      url: 'https://github.com/SATHV1-K'
    }
  ];

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <p className="section-subtitle">Let's work together on your next project</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-intro">
              <h3>Let's Connect</h3>
              <p>
                I'm always interested in hearing about new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>
            
            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <div key={index} className="contact-item">
                  <a href={info.link} className="contact-icon-link">
                    <div className="contact-icon">{info.icon}</div>
                  </a>
                  <div className="contact-text">
                    <h4>{info.title}</h4>
                    {info.link ? (
                      <a href={info.link}>{info.value}</a>
                    ) : (
                      <span>{info.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="social-links">
              <h4>Follow Me</h4>
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index} 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="map-container">
            <div className="map-header">
              <h3>Find Me Here</h3>
            </div>
            <div className="map-embed">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.48129308136!2d-80.8081!3d28.0836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88de0d394e5b1c5b%3A0x7b2b0b0b0b0b0b0b!2sMelbourne%2C%20FL!5e0!3m2!1sen!2sus!4v1635000000000!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{border: 0}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Melbourne, Florida Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;