function ProjectList({projects}) {
  
  let projectKey = 0;
  return (
    <div className="filteredList">
      {projects.map((project) => {
        return (
          <img
            key={projectKey++}
            className="image"
            src={project.img}
            alt={projects.category}
          />
        );
      })}
    </div>
  );
}

export default ProjectList;