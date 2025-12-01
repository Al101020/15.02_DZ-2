import uniqid from 'uniqid';

function ProjectList({projects}) {
  
  return (
    <div className="filteredList">
      {projects.map((project) => {
        return (
          <img
            key={uniqid()}
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