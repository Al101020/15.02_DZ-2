import products from './products.jsx';
import ShopCard from './ShopCard.jsx';

export default function ViewModules() {
  let index = 0;

  return (
    <div className="view-modules">
      {products.map((card) => (
        <ShopCard card={ card } key={ index++ } />
      ))}
    </div>
  );
};
