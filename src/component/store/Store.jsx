import React, {useState} from 'react';
import './Store.css';
import products from './products.jsx';
import ShopCard from './ShopCard.jsx';
import ShopItem from './ShopItem.jsx';

function ViewList() {
  let index = 0;
  console.log(index + ' - ViewList');

  return (
    <div className='view-list'>
      {products.map((item) => (
        <ShopItem item={ item } key={ index++ } />
      ))}
    </div>
  );
};

function ViewModules() {
  let index = 0;
  console.log(index + ' - ViewModules');

  return (
    <div className="view-modules">
      {products.map((card) => (
        <ShopCard card={ card } key={ index++ } />
      ))}
    </div>
  );
};

const IconSwitch = ({ icon, onSwitch }) => {
  return (
    <div className='iCon material-icons' onClick={onSwitch}>
      {icon}
    </div>
  );
}

function Store() {
  const [icon, setListView] = useState('view_list');

  const switchingViews = () => {
    const iCon = document.querySelector('.iCon');

    if (icon === 'view_list') {
      iCon.className='iCon icon-module';
      return setListView('view_module');
    } else if (icon === 'view_module') {
      iCon.className='iCon material-icons';
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
