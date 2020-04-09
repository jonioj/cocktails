import React from "react";
import {Link} from 'react-router-dom'
import logo from '../logo.svg'

export default function Navbar() {
  return <nav className='navbar'>
  <div className="nav-center">
  <img src ={logo} alt='logoo' className='logo'/>
  <ul className = 'nav-links'>
    <li>
      <Link to='/'>Home</Link>
    </li>
    <li>
      <Link to='/'>About</Link>
    </li>
  </ul>

  </div></nav>;
}
