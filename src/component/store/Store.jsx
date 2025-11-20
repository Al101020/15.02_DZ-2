import React, {useState} from 'react';
import './Store.css';
// import products from './products.jsx';

// function ViewList({ items }) {
function ViewList() {
  let index = 0;
  console.log(index + ' - ViewList');

  // return (
  //   <div className='ViewList'>
  //     {items.map((item) => (
  //       <ShopItem item={ item } key={ index + 1 } />
  //     ))}
  //   </div>
  // );
};

// function ViewModules({ cards }) {
function ViewModules() {
  let index = 0;
  console.log(index + ' - ViewModules');

  // return (
  //   <div className="ViewModules">
  //     {cards.map((card) => (
  //       <ShopCard card={ card } key={ index + 1 } />
  //     ))}
  //   </div>
  // );
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
    const iccon = document.querySelector('.iCon');
    // const listProducts = document.querySelector('.list-products');

    if (icon === 'view_list') {
      iccon.className='iCon iconModule';
      return setListView('view_module');
    } else if (icon === 'view_module') {
      iccon.className='iCon material-icons';
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
            // <ViewModules cards={products} />
            <ViewModules />
          ) : (
            // <ViewList items={products} />
            <ViewList />
          )}
        </div>
      </div>
    </>
  );
}

export default Store;
