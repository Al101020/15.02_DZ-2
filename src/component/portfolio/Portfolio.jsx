import { useState } from 'react';
import './Portfolio.css';
import projects from './projects.js';
import Toolbar from './Toolbar.jsx';
import ProjectList from './ProjectList.jsx';

function Portfolio() {
  const [state, setState] = useState('All');

  const listFiltered = projects.filter((project) => {
    if (state === 'All') {
      return true;
    } else {
      return project.category === state;
    }
  });
  return (
    <>
      <Toolbar
        filters={['All', 'Websites', 'Flayers', 'Business Cards']}
        selected={state}
        onSelectFilter={setState}
        // onClick={console.log(state)}
      />
      <ProjectList projects={listFiltered} />
    </>
  );
};

export default Portfolio;
