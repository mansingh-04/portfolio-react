import React, { useState, useEffect } from 'react';
import './styles/navbar.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto';
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="navbar-name">Manpreet Singh</span>
        </div>

        <button 
          className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="navbar-toggle-icon"></span>
        </button>

        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <button 
            className="navbar-link" 
            onClick={() => scrollToSection('about')}
          >
            About
          </button>
          <button 
            className="navbar-link" 
            onClick={() => scrollToSection('skills')}
          >
            Skills
          </button>
          <button 
            className="navbar-link" 
            onClick={() => scrollToSection('projects')}
          >
            Projects
          </button>
          <button 
            className="navbar-link" 
            onClick={() => scrollToSection('education')}
          >
            Education
          </button>
        </div>
      </div>
    </nav>
  );
} 