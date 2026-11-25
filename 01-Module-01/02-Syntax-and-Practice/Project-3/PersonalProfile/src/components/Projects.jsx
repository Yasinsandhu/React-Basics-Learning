const Projects = () => {
  let projects = [
    {
      projectName: "Student Report Cards",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus harum voluptatibus, fuga quae officia repellendus. Deserunt porro quod beatae. Ipsa.",
      image: "/keyboard.jpg",
    },
    {
      projectName: "Product Catalog",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus harum voluptatibus, fuga quae officia repellendus. Deserunt porro quod beatae. Ipsa.",
      image: "/headphone.jpg",
    },
    {
      projectName: "Expense Calculator",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus harum voluptatibus, fuga quae officia repellendus. Deserunt porro quod beatae. Ipsa.",
      image: "/backpack.jpg",
    },
  ];

  return (
    <div className="projects-section">
      <h3>My Projects</h3>

      <div className="projects-grid">
        {projects.map((project) => (
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
