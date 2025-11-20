function ShopCard({card}) {
  console.log('ShopCard');

  return (
    <div className='shopCard'>
      <h3 className='nameCard'>{ card.name }</h3>
      <p>{ card.color }</p>
      <img className='imgCard' src={ card.img } alt='' />
      <div className='card'>
        <span className='card-price'>${card.price}</span>
        <button className='card-button'>Add to Cart</button>
      </div>
    </div>
  );
}

export default ShopCard;




// import React from 'react';

// export default function ShopCard({ card }) {
//   return (
//     <div className='shopCard'>
//       <h2 className='head'>{card.name}</h2>
//       <p>{card.color}</p>
//       <img src={card.img} alt='' />
//       <div className='card'>
//         <span className='card-price'>${card.price}</span>
//         <button className='card-button'>Add to Cart</button>
//       </div>
//     </div>
//   );
// }
