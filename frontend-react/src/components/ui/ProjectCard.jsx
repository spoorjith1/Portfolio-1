import React from 'react';
import { Link } from 'react-router-dom'

function ProjectCard({ project }) {
  return (
    <div className="project-card h-100">
      <img src={project.image} alt={project.title} className='project-img' />

      <h5 className=' mt-1'>{project.title}</h5>
      <p>{project.description}</p>

      <div className='tech-row'>
        <div className="tech-list">
          {project.tech.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>
        {project.live == "" ? (
          <div>
          </div>) : (
          <div>
            <a href={project.live} target='_blank' className='live-demo'>Live Demo ↗</a>
          </div>)}
      </div>

      <div className='project-buttons'>
        <Link to={`/projects/${project.id}`} className='btn btn-orange details-btn'>View Details</Link>
        <a href={project.github} target='_blank' className='btn btn-light code-btn'>View Code <i className='fab fa-github'></i></a>
      </div>
    </div>
  );
}

export default ProjectCard;