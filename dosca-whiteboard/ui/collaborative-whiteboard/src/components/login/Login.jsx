import React from 'react';
import { useState, useEffect } from "react";
import Axios from "axios";
import {useNavigate} from "react-router-dom";

function Login(){
  var[code, setCode] = useState("");
  var[url, setUrl] = useState("");
  var[host, setHost] = useState("");
  var[username, setUsername] = useState("");
  var[color, setColor] = useState("");
  var[can_draw, setCan_draw] = useState(true);
  var[is_banned, setIs_banned] = useState(false);

  let navigate = useNavigate();

  //Function for calling post request to add user
  const addUser = () => {
    Axios.post("http://localhost:3001/addUser", {
      code,
      url,
      username,
      color,
      can_draw,
      is_banned,
    }).then((response) => {
        if(response.data){
            navigate("/canvas");
        } else {
            alert("Invalid code! Please enter a valid code...");
        }
    })
  }

  return (
    //TODO: Format this section
    <div className="Login">
      <div>
        <input
          type="text"
          placeholder="Username..."
          onChange={(event) => {
            setUrl(window.location.href);
            setHost("t");
            setUsername(event.target.value);
            setColor("red");
            setCan_draw(true);
            setIs_banned(false);
          }}
        />
        <input
          type="text"
          placeholder="Code..."
          onChange={(event) => {
            setCode(event.target.value);
          }}
        />
        <button onClick={() =>{
          addUser();
        }}>
            Join
        </button>
      </div>
    </div>
  );
}

export default Login;
