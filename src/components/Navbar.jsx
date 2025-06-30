// Navbar.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';
import { useSelector } from 'react-redux';

function Navbar() {
  const cartItems = useSelector(store => store.cart.items);
  console.log("cartItems" , cartItems);
  return (
    <nav className="nav-bar">
      <div className="nav-logo">📚 Book Manager</div>
      <ul className="nav-links">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""}>About</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "active-link" : ""}>Contact</NavLink>
        </li>
        <li>
          <NavLink to="/cart" className={({ isActive }) => isActive ? "active-link" : ""}>
           Cart ({cartItems.length}) 🛒
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
