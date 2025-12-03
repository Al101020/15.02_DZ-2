import btnBlWr from './btnBlWr.jsx';
// import { useState } from 'react';
//<div className={`divIcon ${isIcon ? 'material-icons' : 'icon-module'}`} onClick={onSwitch}>
// ${item === 'Flayers' && 'flayers'}
function Toolbar({ filters, onSelectFilter, selected }) {
  return (
    <>
      <h3 className="title-1">Task-1</h3>
      <div className="filters">
        {filters.map((item) => {
          console.log(selected);
          return (
            <div
              key={item}
              className={`
                ${item === 'All' && 'all'}
                ${item === 'Websites' && 'websites'}
                ${item === 'Flayers' && 'flayers'}
                ${item === 'Business Cards' && 'business-cards'}
              `}
              onClick={(e) => {
                btnBlWr(e);
                onSelectFilter(item);
              }}
            >{item}</div>
          );
        })}
      </div>
    </>
  );
};

export default Toolbar;