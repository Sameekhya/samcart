import React from 'react';
// import Product_img from "../Assets/headphone.jpg";
import { useCart } from "../context/CartContext";



const Cartcard = ({product}) => {

  const {name, price, Prd_image} = product;

  const {removeFromCart,cartList} = useCart();

  const handleClick =()=>
  {
    removeFromCart(product);
    console.log(cartList)
  }


  return (
    <div className='cartcard'>
      <img src={Prd_image} alt={name} />
      <div className='Prod_name'><h3>{name}</h3></div>
      
      <p>${price}</p>
      <button onClick={handleClick}> Remove</button>
    </div>
  )
}

export default Cartcard
