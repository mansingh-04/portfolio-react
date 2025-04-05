import React from 'react';
import './styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-info">
            <h3 className="footer-name">Manpreet Singh</h3>
            <p className="footer-title">Full Stack Developer</p>
          </div>
          
          <div className="footer-contact">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <a href="mailto:manwork.tr@gmail.com" className="contact-link">manwork.tr@gmail.com</a>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <a href="tel:7217623488" className="contact-link">7217623488</a>
            </div>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <a href="https://maps.app.goo.gl/qB3acu3jVBohQMnA9" className="contact-text">Newton School Of Technology, Rishihood University, Sonipat, Haryana</a>
            </div>
          </div>

          <div className="footer-social">
            <h4>Connect with me</h4>
            <div className="social-links">
              <a href="https://github.com/mansingh-04" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/manpreet-singh-9bb415318/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://leetcode.com/u/mansingh_04/" target="_blank" rel="noopener noreferrer">
                <svg className="leetcode-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.552-1.901-.038l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.981.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright"> Crafted with code, coffee, and curiosity.
          </p>
          <div className="footer-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#education">Education</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 