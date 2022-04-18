import React from 'react';
import logo from '../../../../assets/doscaD.png';
import './navbar.css';
import Axios from "axios";
import {useNavigate} from "react-router-dom";

const Navbar = () => {

  let navigate = useNavigate();

  const createWhiteboard = () => {
    Axios.post("http://localhost:3001/createWhiteboard", {
      code: "random",
      url: window.location.href,
      host: "host",
      username: "host",
      color: "red",
      can_draw: true,
      is_banned: false,
    }).then((response) => {
      navigate("/canvas");
    });
  };

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
          <p onClick={()=>{    
            createWhiteboard();
          }}>Create Whiteboard</p>
        </div>
    </div>
  )
}

export default Navbar