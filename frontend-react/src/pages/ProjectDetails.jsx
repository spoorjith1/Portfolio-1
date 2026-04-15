import { useParams } from "react-router-dom";
import projects from "../data/projects";

function ProjectDetails() {
  const { id } = useParams();

  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="container text-center mt-5">
        <h2>Project not found</h2>
      </div>
    );
  }

  return (
    <section className="project-details-section">
      
      <div className="container">

        {/* Title */}
        <h2 className="details-title">{project.title}</h2>

        {/* Main Image */}
        <img
          src={project.image}
          alt={project.title}
          className="details-main-img"
        />

        {/* Description */}
        <p className="details-text">{project.details}</p>

        <div className="detail-live-demo-div">
          <a href={project.live} target='_blank' class='detail-live-demo'>Live Demo</a>
        </div>

        {/* Features */}
        <h4 className="details-subtitle">Features</h4>
        <ul className="details-list">
          {project.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        {/* Tech Stack */}
        <h4 className="details-subtitle">Tech Stack</h4>
        <div className="tech-list">
          {project.tech.map((tech, index) => (
            <span key={index}>{tech}</span>
          ))}
        </div>

        {/* Image Gallery */}
        <h4 className="details-subtitle mt-4">Preview</h4>
        <div className="details-gallery">
          {project.images.map((img, index) => (
            <img key={index} src={img} alt="project preview" />
          ))}
        </div>

        {/* GitHub Button */}
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-orange mt-4"
        >
          View Code
        </a>

      </div>
    </section>
  );
}

export default ProjectDetails;