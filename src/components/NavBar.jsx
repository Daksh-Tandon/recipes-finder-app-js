import React from 'react'
import "../App.css"
import { NavLink } from 'react-router-dom'
const NavBar = () => {
  return (
    <div className='navcontainer'>
    <div className="nav">
        <ul className="items">
            <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/login">Signin</NavLink></li>
          <li><NavLink to="/contact">Contact Us</NavLink></li>
        </ul>
    </div>
    </div>
  )
}

export default NavBar