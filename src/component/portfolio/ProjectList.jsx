function ProjectList({projects}) {
//   let projectsCategory;
  
  let projectKey = 0;
  return (
    <div className="filteredList">
      {projects.map((project) => {
        // if (projectsCategory !== project.category) {
        //     projectsCategory = project.category;
        // }
        // if (projectsCategory === 'All') {
        //     arrayfiltersDivChildren.forEach((el) => {
        //       if (el.classList[0] === filter) {
        //         el.className += ' black-wheat';
        //       } else {
        //         el.classList.remove('black-wheat');
        //       };
        //     });
        // }
        return (
          <img
            // key={project.id}
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