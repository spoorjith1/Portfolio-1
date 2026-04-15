import projects from "../data/projects";
import ProjectCard from "../components/ui/ProjectCard";

function Projects() {
  return (
    <section className="projects-section">

      <div className="container">

        <h2 className="section-title text-center mb-5">Projects</h2>

        <div className="row g-4">
          {projects.map((project) => (
            <div className="col-md-6 col-lg-4" key={project.id}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;