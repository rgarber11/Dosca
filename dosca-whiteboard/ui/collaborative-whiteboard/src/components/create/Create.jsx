import React from 'react';
import { useState, useEffect } from "react";
import Axios from "axios";
import { render } from 'react-dom';
import Container from '../container/Container';

function Create(){
  var[code, setCode] = useState("");
  var[url, setUrl] = useState("");
  var[host, setHost] = useState("");
  var[username, setUsername] = useState("");
  var[color, setColor] = useState("");
  var[can_draw, setCan_draw] = useState(true);
  var[is_banned, setIs_banned] = useState(false);

  const createWhiteboard = () => {
    Axios.post("http://localhost:3001/createWhiteboard", {
      code,
      url,
      host,
      username,
      color,
      can_draw,
      is_banned,
    }).then((response) => {
    });
  };

  const addUser = () => {
    Axios.post("http://localhost:3001/addUser", {
      code,
      url,
      username,
      color,
      can_draw,
      is_banned,
    }).then((response) => {
    })
  }
    return (
      <div className="App">
  
        <div>
          <input
            type="text"
            placeholder="Username..."
            onChange={(event) => {
              setCode("t");
              setUrl(window.location.href);
              setHost("t");
              setUsername(event.target.value);
              setColor("t");
              setCan_draw(true);
              setIs_banned(false);
  
            }}
          />
          <button
            onClick={() => {
              createWhiteboard();
            }}>
            Create Whiteboard
          </button>

        </div>
        <div>
          <input
            type="text"
            placeholder="Username..."
            onChange={(event) => {
              setCode("t");
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
          <button onClick={addUser}>
              Add User
          </button>
        </div>
      </div>
    );
}

export default Create;
