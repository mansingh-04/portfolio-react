import React from 'react';
import './styles/education.css';

export default function Education() {
  const education = [
    {
      degree: 'Bachelor of Technology (Artificial Intelligence)',
      institution: 'Newton School Of Technology, Rishihood University',
      year: '2024 - 2028',
      description: 'Currently pursuing my degree with a focus on Artificial Intelligence.'
    },
    {
      degree: 'Intermediate (Class XII)',
      institution: 'Kendriya Vidyalaya Tagore Garden',
      year: '2022 - 2023',
      description: 'Completed with a focus on Science, Mathematics and Computer Science.'
    },
    {
        degree: 'Matriculation (Class X)',
        institution: 'Kendriya Vidyalaya Tagore Garden',
        year: '2020 - 2021',
        description: 'Completed with a focus on Science, Mathematics and Social Studies.'
      }
  ];

  return (
    <section className="education" id="education">
      <div className="education-container">
        <h2 className="education-title">Education</h2>
        <div className="education-timeline">
          {education.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="education-content">
                <h3 className="education-degree">{edu.degree}</h3>
                <p className="education-institution">{edu.institution}</p>
                <p className="education-year">{edu.year}</p>
                <p className="education-description">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 