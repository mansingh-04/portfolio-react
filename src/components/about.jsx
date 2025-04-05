import React, { useEffect, useRef } from 'react';
import './styles/about.css';

export default function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const currentRef = aboutRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section id="about" className="about" ref={aboutRef}>
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">
              <span className="section-number">01.</span>
              About Me
            </h2>
            <div className="about-description">
              <p>
              I'm a first-year BTech student specializing in Computer Science and Artificial Intelligence, with a strong passion for technology and innovation. As a tech enthusiast, I enjoy building responsive, user-centric web applications and exploring the intersection of software engineering and AI.
              </p>
              <p>
              I have hands-on experience with frontend development using HTML, CSS, JavaScript, and React, and I'm continuously expanding my skills in Python and Flask to grow as a full-stack developer. I love turning ideas into real-world solutions and am always looking to learn, collaborate, and build impactful tech.
              </p>
              <p>
              I aim to contribute to projects that challenge me, help me grow technically, and allow me to make meaningful contributions in the tech space.
              </p>
            </div>
          </div>
          <div className="about-image">
            <div className="image-container">
              <div className="image-frame">
                <div className="image-overlay">
                  <img src="/images/profile.png" alt="Profile" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 