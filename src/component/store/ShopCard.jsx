export default function ShopCard({ card }) {
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

