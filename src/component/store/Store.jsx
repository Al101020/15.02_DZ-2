import React, {useState} from 'react';
import './Store.css';
import products from './products.js';
import IconSwitch from './IconSwitch.jsx';
import ViewList from './ViewList.jsx';
import ViewModules from './ViewModules.jsx';

function Store() {
  const [icon, setListView] = useState(true);
  
  const switchingViews = () => {
    if (icon === true) {
      return setListView(false);
    } else if (icon === false) {
      return setListView(true);
    };
  };
  
  return (
    <>
      <div className='Task-2'>
        <h3 className='title-2'>Task-2</h3>
        <IconSwitch isIcon={icon} onSwitch={switchingViews}/>
        <div className='list-products'>
          {icon ? (
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
