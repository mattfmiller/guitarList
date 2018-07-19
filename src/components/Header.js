import React, { Component } from 'react';
import logo from './../assets/images/les-paul.png';
import './styles/App.css';

function Header() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to guitarList</h1>
      </header>
    </div>
  );
}

export default Header;
