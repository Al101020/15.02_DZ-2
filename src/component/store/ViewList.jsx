import products from './products.js';
import ShopItem from './ShopItem.jsx';

export default function ViewList() {
    let index = 0;
  
    return (
      <div className='view-list'>
        {products.map((item) => (
          <ShopItem item={ item } key={ index++ } />
        ))}
      </div>
    );
  };
  