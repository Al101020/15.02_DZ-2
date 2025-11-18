import React from 'react';
// import React, { useState, useRef } from 'react';
import ReactDOM from 'react';
import './Portfolio.css';
import projects from'./projects.jsx';

// function Toolbar({ filters, selected, onSelectFilter }) {
function Toolbar({ filters, onSelectFilter }) {
  return (
    <div className="Task-1">
      <h3 className="title-1">Task-1</h3>
      <div className="filters">
        {filters.map((item) => {
          // const classname = item === selected ? "active" : "button"; // ?
          return (
            <div
              key={item}
              className={item.replace(/\s/g, '-')}
              onClick={() => {
                onSelectFilter(item);
              }}
            >{item}</div>
          );
        })}
      </div>
      <div className="titleFilter"></div>
      <div className="filteredList"></div>
    </div>
  );
};

// function applyingFilter(filter) {   // console.log('--- applyingFilter - ' + filter);
//   const filteredList = document.querySelector('.filteredList');
//   console.log(filteredList);
// }

function Portfolio() {
  return (
    <>
      <Toolbar
      filters={["All", "Websites", "Flayers", "Business Cards"]}
      selected="All"
      onSelectFilter={(filter) => { // console.log(filter); // applyingFilter(filter);
        const titleFilter = document.querySelector('.titleFilter');
        const filteredList = document.querySelector('.filteredList');
        
        if (filter === 'All') {
          filteredList.innerHTML = '';
          titleFilter.innerHTML = '';
          const title = document.createElement('h1');
          title.classList = 'titleFilter';
          title.textContent = filter;
          titleFilter.appendChild(title);

          projects.forEach(project => {
            const img = document.createElement('img');
            img.classList = 'image';
            img.src = project.img;
            filteredList.appendChild(img);
          });
        } else {
          filteredList.innerHTML = '';
          titleFilter.innerHTML = '';
          const title = document.createElement('h1');
          title.classList = 'titleFilter';
          title.textContent = filter;
          titleFilter.appendChild(title);

          projects.forEach(project => {
            const img = document.createElement('img');
            if (project.category === filter) {
              img.classList = 'image';
              img.src = project.img;
              filteredList.appendChild(img);
            }
          });
        };
      }}/>
    </>
  )
}

export default Portfolio
