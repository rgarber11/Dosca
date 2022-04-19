import React from 'react'
import { Footer, Blog, Possibility, Buttons, whatDosca, Header } from './containers';
import { CTA, Brand, Navbar } from './components';
import './style.css';

function Home() {
    return (
        <div className="Home">
            <div className="gradient__bg">
              <Navbar />
              <Header />
              <Buttons />
              <Footer className ="foot" />
            </div>
        </div>
      )
}

export default Home;