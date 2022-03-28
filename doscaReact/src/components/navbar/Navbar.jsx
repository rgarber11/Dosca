import React from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/doscaD.png';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="Dosca__navbar">
        <div className="Dosca__navbar-links">
          <div className="Dosca__navbar-links-logo">
            <img src={logo} alt="logo"/>
          </div>
          <div className="Dosca__navbar-links-container">
            <p><a href="#home">Home</a></p>
            <p><a href="#quickguide">Quick Guide</a></p>
            <p><a href="#doscateam">Dosca Team</a></p>
          </div>
        </div>
        <div className="Dosca__navbar-sign">
          <p>Create Lobby</p>
        </div>
    </div>
  )
}

export default Navbar