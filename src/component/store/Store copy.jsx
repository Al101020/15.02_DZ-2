import React, {useState} from 'react';
import './Store.css';
import products from './products.js';

import IconSwitch from './IconSwitch.jsx';
import ViewList from './ViewList.jsx';
import ViewModules from './ViewModules.jsx';

function Store() {
  const [icon, setListView] = useState('view_list');

  const switchingViews = () => {
    if (icon === 'view_list') {
      return setListView('view_module');
    } else if (icon === 'view_module') {
      return setListView('view_list');
    };
  };
  
  return (
    <>
      <div className='Task-2'>
        <h3 className='title-2'>Task-2</h3>
        <IconSwitch isIcon={'view_list'} onSwitch={switchingViews}/>
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
