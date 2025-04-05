import React, { useEffect, useRef } from 'react';
import './styles/skills.css';

export default function Skills() {
  const skillsRef = useRef(null);

  useEffect(() => {
    const currentRef = skillsRef.current;
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

  const skills = [
    {
      name: 'HTML',
      icon: 'fab fa-html5',
      color: '#E34F26'
    },
    {
      name: 'CSS',
      icon: 'fab fa-css3-alt',
      color: '#264DE4'
    },
    {
      name: 'JavaScript',
      icon: 'fab fa-js',
      color: '#F7DF1E'
    },
    {
      name: 'React',
      icon: 'fab fa-react',
      color: '#61DAFB'
    },
    {
      name: 'Python',
      icon: 'fab fa-python',
      color: '#3776AB'
    },
    {
      name: 'Flask',
      icon: 'fas fa-flask',
      color: '#000000'
    },
    {
      name: 'MySQL',
      icon: 'fas fa-database',
      color: '#4479A7'
    },
    {
      name: 'Git',
      icon: 'fab fa-git-alt',
      color: '#F05032'
    }
  ];

  return (
    <section id="skills" className="skills" ref={skillsRef}>
      <div className="skills-container">
        <h2 className="section-title">
          <span className="section-number">02.</span>
          Skills & Expertise
        </h2>
        <div className="skills-content">
          <div className="skills-description">
            <p>
              I've worked with a variety of technologies in the web development world.
              From front-end to back-end, I'm always eager to learn more and improve my skills.
            </p>
          </div>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-icon" style={{ color: skill.color }}>
                  <i className={skill.icon}></i>
                </div>
                <div className="skill-info">
                  <h3 className="skill-name">{skill.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 