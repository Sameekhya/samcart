import React from 'react';
import Logo from '../Assets/Logo.jpg'
import cart from '../Assets/cart.jpg'
import { NavLink, Link } from "react-router-dom";
import "../App.css";
const Header = () => {
  return (
    <header>
   <div className='logo'>
   <Link to="/" className="logo">
      <img  src={Logo} alt="logo" />
      <span>Sam-cart</span>
      </Link>
    </div>
   
    <nav className='navigation mb-10'>
    <NavLink to="/cart" className="Navlink">
      <img  style={{width :"30px"}}src={cart} alt="" />
    </NavLink>
    
     </nav>
   
    </header>
    
  )
}

export default Header
