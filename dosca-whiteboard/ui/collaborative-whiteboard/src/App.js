import React from 'react';
import './App.css';
import Container from './components/container/Container';
import Login from './components/login/Login';
import Home from './components/home/Home';

import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";

function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/canvas" element={<Container />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
   </Router>
    
  )
}
export default App;