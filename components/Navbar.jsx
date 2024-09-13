"use client";

import React, { useState } from 'react';
import "../styles/Navbar.css"; 
import { BsFillCartPlusFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { HiMiniComputerDesktop } from "react-icons/hi2";




const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Search term:', searchTerm);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">MySite</h1>
        <BsFillCartPlusFill className='adcarticon cart-icon' id="cart-icon"  />
    
        <div className="menu-icon" onClick={toggleMenu}>
          <span className={isMenuOpen ? "menu-icon-line open" : "menu-icon-line"}></span>
          <span className={isMenuOpen ? "menu-icon-line open" : "menu-icon-line"}></span>
          <span className={isMenuOpen ? "menu-icon-line open" : "menu-icon-line"}></span>
        </div>
        <form className="navbar-search" onSubmit={handleSearchSubmit}>
          
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search..."
            className="search-input"
          />
    

        </form>


        <ul className={`navbar-menu ${isMenuOpen ? "navbar-menu-open" : ""}`}>
   
        
          <li className="navbar-item"><a href="#about">Login <FaUserAlt /></a></li>
          
          <li className="navbar-item"><a href="#contact">Sign up  <HiMiniComputerDesktop /></a></li>
         
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
