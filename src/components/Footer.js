import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
    },
    {
      icon: <FaEnvelope />,
      name: 'Email',
      url: 'mailto:sath.jasti@gmail.com'
    }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Sathvik Jasti</h3>
            <p>Full Stack Developer & AI Enthusiast</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>
            © {currentYear} Sathvik Jasti. Made with <FaHeart className="heart-icon" /> using React.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;