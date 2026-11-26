const Projects = (props) => {
  

  return (
    <div className="projects-section">
      <h3>My Projects</h3>

      <div className="projects-grid">
        {props.projects.map((project) => (
          <div key={project.projectName} className="project-card">
            <h4>Project Name: {project.projectName}</h4>
            <p>{project.description}</p>
            <img src={project.image} alt={project.projectName} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
