import products from './products.js';
import ShopCard from './ShopCard.jsx';
import uniqid from 'uniqid';

export default function ViewModules() {

  return (
    <div className="view-modules">
      {products.map((card) => (
        <ShopCard card={ card } key={uniqid()} />
      ))}
    </div>
  );
};
