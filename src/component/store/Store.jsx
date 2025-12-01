import React, {useState} from 'react';
import './Store.css';
import products from './products.js';

import IconSwitch from './IconSwitch.jsx';
import ViewList from './ViewList.jsx';
import ViewModules from './ViewModules.jsx';

function Store() {
  const [icon, setListView] = useState('view_list');

  const switchingViews = () => {
    const divIcon = document.querySelector('.divIcon');
    if (icon === 'view_list') {
      divIcon.className = 'divIcon icon-module';
      return setListView('view_module');
    } else if (icon === 'view_module') {
      divIcon.className = 'divIcon material-icons';
      return setListView('view_list');
    };
  };
  
  return (
    <>
      <div className='Task-2'>
        <h3 className='title-2'>Task-2</h3>
        <IconSwitch icon={'view_list'} onSwitch={switchingViews}/>
        <div className='list-products'>
          {icon === "view_list" ? (
            <ViewModules cards={products} />
          ) : (
            <ViewList items={products} />
          )}
        </div>
      </div>
    </>
  );
}

export default Store;
