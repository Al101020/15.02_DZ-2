export default function ShopItem({ item }) {
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
  