import React from 'react'
import './Navbar.css' 
export default function Navbar() {
  return (
       <div className='navbar-container'>
      <nav className='navbar'>
        <div className="logo">
          
        </div>
        <div className="menu">
          <ul className='menu-items'>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#course">Course</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
