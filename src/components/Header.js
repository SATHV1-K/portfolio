import React, { useState, useEffect, useRef } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && 
          navRef.current && 
          !navRef.current.contains(event.target) &&
          toggleRef.current &&
          !toggleRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleTouchEnd = (event) => {
      if (isMobileMenuOpen && 
          navRef.current && 
          !navRef.current.contains(event.target) &&
          toggleRef.current &&
          !toggleRef.current.contains(event.target)) {
        event.preventDefault();
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
      document.addEventListener('touchend', handleTouchEnd);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('touchend', handleTouchEnd);
      // Restore body scroll
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {isMobileMenuOpen && (
        <div 
          className="mobile-menu-overlay" 
          onClick={(e) => {
            // Don't close if clicking on toggle button area
            if (toggleRef.current && toggleRef.current.contains(e.target)) {
              return;
            }
            console.log('Overlay clicked, closing menu');
            setIsMobileMenuOpen(false);
          }}
        />
      )}
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="logo">
            <h2 onClick={() => scrollToSection('hero')} style={{cursor: 'pointer'}}>SJ</h2>
          </div>
        
        <nav ref={navRef} className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
          <ul>
            <li><button onClick={() => scrollToSection('about')}>About</button></li>
            <li><button onClick={() => scrollToSection('skills')}>Skills</button></li>
            <li><button onClick={() => scrollToSection('experience')}>Experience</button></li>
            <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
            <li><button onClick={() => scrollToSection('education')}>Education</button></li>
            <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
          </ul>
        </nav>
        
        <button 
          ref={toggleRef}
          className="mobile-menu-toggle"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('Toggle clicked, current state:', isMobileMenuOpen);
            setIsMobileMenuOpen(!isMobileMenuOpen);
          }}
          style={{
            pointerEvents: 'auto',
            zIndex: 9999
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        </div>
      </header>
    </>
  );
};

export default Header;