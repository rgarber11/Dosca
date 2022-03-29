import React from 'react'

import { Footer, Blog, Possibility, Buttons, whatDosca, Header } from './containers';
import { CTA, Brand, Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <div className="App">
        <div className="gradient__bg">
          <Navbar />
          <Header />
          <Buttons />
          <Footer />
        </div>
    </div>
  )
}

export default App