import React from 'react';
import Logo from '../Assets/Logo.jpg'
import cart from '../Assets/cart.jpg'
import { NavLink, Link } from "react-router-dom";
import "../App.css";
import { useCart } from '../context/CartContext';
const Header = () => {

  const {cartList} = useCart();
  return (
    <header>
   <div className='logo'>
   <Link to="/" className="logo">
      <img  src={Logo} alt="logo" />
      <span>Sam-cart</span>
      </Link>
    </div>
   
    <nav className='navigation mb-10'>
    <NavLink to="/" className="link" end>Home</NavLink>
    <NavLink to="/cart" className="link">
      Cart
    </NavLink> 
     </nav>

     <Link to="/cart" className="items">
     <span>{cartList.length}</span>
     <img   src={cart} alt="" />
     </Link>
   
    </header>
    
  )
}

export default Header
