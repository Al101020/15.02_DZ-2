import React, { useState } from 'react';
import ReactDOM from 'react';
import './Portfolio.css';
import projects from'./projects.jsx';
import Toolbar from'./Toolbar.jsx';

function Portfolio() {
  const root = useState(document.querySelector('#root'));

  return (
    <>
      <Toolbar
        filters={["All", "Websites", "Flayers", "Business Cards"]}
        selected="All"
        onSelectFilter={(filter) => { 
        console.log(filter);
        
        const filteredList = Array.from(root.children[0].children[0].children[3]);
        const arrayfiltersDivChildren = Array.from(root.children[0].children[0].children[1]);

        if (filter === 'All') {
          arrayfiltersDivChildren.forEach((el) => {
            if (el.classList[0] === filter) {
              el.className += ' black-wheat';
            } else {
              el.classList.remove('black-wheat');
            };
          });

          console.log(filteredList);
          filteredList.innerHTML = '';

          projects.forEach(project => {
            const img = document.createElement('img');
            img.classList = 'image';
            img.src = project.img;
            filteredList.appendChild(img);
          });
        } else if (filter === 'Websites') {
          arrayfiltersDivChildren.forEach((el) => {
            if (el.classList[0] === filter) {
              el.className += ' black-wheat';
            } else {
              el.classList.remove('black-wheat');
            };
          });

          filteredList.innerHTML = '';

          projects.forEach(project => {
            const img = document.createElement('img');
            if (project.category === filter) {
              img.classList = 'image';
              img.src = project.img;
              filteredList.appendChild(img);
            }
          });
        } else if (filter === 'Flayers') {
          arrayfiltersDivChildren.forEach((el) => {
            if (el.classList[0] === filter) {
              el.className += ' black-wheat';
            } else {
              el.classList.remove('black-wheat');
            };
          });

          filteredList.innerHTML = '';

          projects.forEach(project => {
            const img = document.createElement('img');
            if (project.category === filter) {
              img.classList = 'image';
              img.src = project.img;
              filteredList.appendChild(img);
            }
          });
        } else if (filter === 'Business Cards') {
          arrayfiltersDivChildren.forEach((el) => {
            if (el.classList[0] === 'Business-Cards') {
              el.className += ' black-wheat';
            } else {
              el.classList.remove('black-wheat');
            };
          });

          filteredList.innerHTML = '';

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

export default Portfolio;
