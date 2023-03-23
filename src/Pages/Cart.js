import React from "react";
import Cartcard from "../Components/Cartcard.js";
import "./cart.css";
import { useCart } from '../context/CartContext';
import { useEffect } from "react";


  const Cart = () => {

  const {total,cartList} = useCart();

  console.log("In cart :",cartList)
 
  useEffect(() => {
    document.title = `Cart/SamCart`;
  });

  
  
  return (
    <main>
      <div className="cartpage">
        <h1>Cart Items: {cartList.length}/ ${total}</h1>
        {cartList.map((product) => (
          <Cartcard key={product.id} product={product} />
        ))}
      </div>
      <div className="total"><h1>Total Amount : ${total}</h1></div>
    </main>
  );
};

export default Cart;
