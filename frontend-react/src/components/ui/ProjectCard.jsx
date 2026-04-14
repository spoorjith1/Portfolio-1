import React from 'react';
import { Link } from 'react-router-dom'

function ProjectCard({ project }) {
  return (
    <div className="project-card h-100">
      <img src={project.image} alt={project.title} className='project-img' />

      <h5>{project.title}</h5>
      <p>{project.description}</p>

      <div className="tech-list">
        {project.tech.map((tech, index) => (
          <span key={index}>{tech}</span>
        ))}
      </div>

      <div className='project-buttons'>
        <Link to={`/projects/${project.id}`} className='btn btn-orange details-btn'>View Details</Link>
        <a href={project.github} target='_blank' className='btn btn-light code-btn'>View Code</a>
      </div>
    </div>
  );
}

export default ProjectCard;