import React, { Component } from 'react';
import logo from './../assets/images/guitar-icon.png';
import guitarIcon from './../assets/images/guitar-icon5.png';
import ampIcon from './../assets/images/amp-icon2.png';
import pedalIcon from './../assets/images/pedal-icon2.png';
import './styles/App.css';

function Header() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">guitarList</h1>
        </div>
        <div>
          <img src={guitarIcon} className="instrument-logo" />
          <ul>
            <li>GUITAR COLLECTION</li>
            <li>GUITAR WISHLIST</li>
            <li> + ADD A GUITAR</li>
          </ul>
        </div>
        <div>
          <img src={ampIcon} className="instrument-logo" />
          <ul>
            <li>AMP COLLECTION</li>
            <li>AMP WISHLIST</li>
            <li> + ADD AN AMP</li>
          </ul>
        </div>
        <div>
          <img src={pedalIcon} className="instrument-logo" />
          <ul>
            <li>PEDAL COLLECTION</li>
            <li>PEDAL WISHLIST</li>
            <li> + ADD A PEDAL</li>
          </ul>
        </div>
        <div>
          <input placeholder="Search"></input>
        </div>
      </header>
    </div>
  );
}

export default Header;
