import React from 'react';
import Product_img from "../Assets/headphone.jpg";


const Cartcard = ({product}) => {

  const {name, price, image} = product;

  return (
    <div className='cartcard'>
      <img src={Product_img} alt={name} />
      <h3>{name}</h3>
      <p>${price}</p>
      <button>Remove</button>
    </div>
  )
}

export default Cartcard
