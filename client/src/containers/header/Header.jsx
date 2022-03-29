import React from 'react'
import './header.css';
import fullLogo from '../../assets/Doscafull.png';


const Header = () => {
  return (
    <div className="Dosca__header">
        <div className="Dosca__header-fullLogo">
          <img src={fullLogo} alt="fullLogo"/>
        </div>
    </div>
  )
}

export default Header