import React from 'react'
import './buttons.css';
import {useNavigate} from "react-router-dom";

const Header = () => {
  
  let navigate = useNavigate();

  return (
    <div className="Dosca__Buttons">
        <div className="Dosca__Buttons-lobby">
        <button onClick={()=>{    
            navigate("/login");
          }}>Join Whiteboard</button>
        </div>
    </div>
  )
}

export default Header