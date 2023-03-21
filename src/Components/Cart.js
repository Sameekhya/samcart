import React from 'react'
import Cartcard from "./Cartcard.js"
import "./cart.css"

const Cart = () => {

  const products = [
    {"id": 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 149, "image": "../Assets/headphone.jpg"},
    {"id": 2, "name": "boAt Rockerz 450", "price": 49, "image": "/assets/headphone.jpg"},
  ];
  return (
    <main>
    <div className='cartpage'>
    <h1>Cart Items: {products.length}</h1>
      {products.map((product)=>
        
          <Cartcard key={product.id} product={product}/>
        )}
    </div>
    </main>
  )
}

export default Cart
