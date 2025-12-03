import products from './products.js';
import ShopItem from './ShopItem.jsx';
import uniqid from 'uniqid';

export default function ViewList() {
  
    return (
      <div className='view-list'>
        {products.map((item) => (
          <ShopItem item={ item } key={uniqid()} />
        ))}
      </div>
    );
  };
  