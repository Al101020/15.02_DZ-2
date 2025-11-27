import products from './products.jsx';

export default function IconSwitch ({ icon, onSwitch }) {
  return (
    <div className='divIcon material-icons' onClick={onSwitch}>
      {icon}
    </div>
  );
}

export function ViewList() {
  let index = 0;

  return (
    <div className='view-list'>
      {products.map((item) => (
        <ShopItem item={ item } key={ index++ } />
      ))}
    </div>
  );
};

export function ViewModules() {
  let index = 0;

  return (
    <div className="view-modules">
      {products.map((card) => (
        <ShopCard card={ card } key={ index++ } />
      ))}
    </div>
  );
};

function ShopCard({card}) {
  return (
    <div className='shop-card'>
      <h3 className='name-card'>{ card.name }</h3>
      <p className='color-item'>{ card.color }</p>
      <img className='img-card' src={ card.img } alt='' />
      <div className='card'>
        <span className='card-price'>${card.price}</span>
        <button className='card-button'>Add to Cart</button>
      </div>
    </div>
  );
};

function ShopItem({ item }) {
  return (
    <div className='shop-item'>
      <img className='img-item' src={ item.img } alt='' />
      <h3 className='name-item'>{ item.name }</h3>
      <p className='color-item'>{item.color}</p>
      <span className="item-price">${item.price}</span>
      <div className="item-button">Add to Cart</div>
    </div>
  );
}
