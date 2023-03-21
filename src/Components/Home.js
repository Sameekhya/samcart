import React, { useState ,useEffect} from 'react'
import Card from './Card';


const Home = () => {


  const products = [
    {"id": 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 149, "image": "../Assets/headphone.jpg"},
    {"id": 2, "name": "boAt Rockerz 450", "price": 49, "image": "/assets/headphone.jpg"},
    {"id": 3, "name": "JBL Tune 760NC", "price": 179, "image": "/assets/headphone.jpg"},
    {"id": 4, "name": "Logitech H111 Wired", "price": 39, "image": "/assets/headphone.jpg"},
    {"id": 5, "name": "APPLE Airpods Max Bluetooth Headset", "price": 199, "image": "/assets/headphone.jpg"},
    {"id": 6, "name": "ZEBRONICS Zeb-Thunder Wired", "price": 29, "image": "/assets/headphone.jpg"}
  ]

  
  return (
    <main>
    <div className='product' >
   
     {products.map((product) =>
    <Card key={product.id} product={product} />)}
   
    </div>
    </main>
  )
}

export default Home
