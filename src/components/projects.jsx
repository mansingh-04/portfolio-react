import React from 'react';
import './styles/projects.css';

export default function Projects() {
  const projects = [
    {
      title: 'File Manager',
      description: 'This Flask web app automates file organization by categorizing files into subfolders based on type. Users can enter a folder path via a web interface and organize files with one click. The project features automatic file sorting into subfolders by extension, duplicate handling with incremental naming, and real-time success/failure messages.',
      technologies: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript'],
      hostedUrl: 'https://mansingh-04.github.io/Final_2.0/'
    },
    {
      title: 'ClearChat AI',
      description: 'This Flask web app provides an AI-powered interface for users to submit text-based queries and receive structured responses. The AI processes input in real-time and returns formatted results for improved readability.',
      technologies: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript','Railway(for deployment)'],
      hostedUrl: 'https://api-production-5dca.up.railway.app/'
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p></p>
                <p className="project-description">
                  <strong className="project-label">Overview: </strong>
                  {project.description}
                </p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="project-tech">
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.hostedUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Live Demo <i className="fas fa-external-link-alt"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 