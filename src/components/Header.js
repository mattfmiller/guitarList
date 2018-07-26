import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from './../assets/images/guitar-icon.png';
import guitarIcon from './../assets/images/guitar-icon5.png';
import ampIcon from './../assets/images/amp-icon2.png';
import pedalIcon from './../assets/images/pedal-icon2.png';
import {fetchGuitarsBySearch} from './../actions';
import './styles/App.css';

function Header() {
  let _queryTerm = null;

  function handleClick(event) {
    event.preventDefault();
    let queryTerm = _queryTerm.value;
    window.location.replace('http://localhost:3000/instruments?query=' + queryTerm);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Link style={{textDecoration: 'none', color: 'white'}} to='/'><div>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">guitarList</h1>
        </div></Link>
      <div className='guitar-dropdown'>
          <div className='guitar-dropbtn'>
            <img src={guitarIcon} alt="icon" className="instrument-logo"/>
            <h3>GUITARS</h3>
          </div>
          <ul className='guitar-dropdown-content'>
            <Link style={{textDecoration: 'none', color: 'white'}} to='/guitars'><li>GUITAR COLLECTION</li></Link>
            <Link style={{textDecoration: 'none', color: 'white'}} to='/guitars/wishlist'><li>GUITAR WISHLIST</li></Link>
            <Link style={{textDecoration: 'none', color: 'white'}} to='/guitars/new'><li>ADD A GUITAR</li></Link>
          </ul>
        </div>
        <div>
          <img src={ampIcon} alt="icon" className="instrument-logo" />
          <ul>
            <Link style={{textDecoration: 'none', color: 'white'}} to='/amps'><li>AMP COLLECTION</li></Link>
            <Link style={{textDecoration: 'none', color: 'white'}} to='/amps/wishlist'><li>AMP WISHLIST</li></Link>
            <Link style={{textDecoration: 'none', color: 'white'}} to='/amps/new'><li> + ADD AN AMP</li></Link>
          </ul>
        </div>
        <div>
          <img src={pedalIcon} alt="icon" className="instrument-logo" />
          <ul>
            <Link style={{textDecoration: 'none', color: 'white'}} to='/pedals'><li>PEDAL COLLECTION</li></Link>
            <Link style={{textDecoration: 'none', color: 'white'}} to='/pedals/wishlist'><li>PEDAL WISHLIST</li></Link>
            <Link style={{textDecoration: 'none', color: 'white'}} to='/pedals/new'><li> + ADD A PEDAL</li></Link>
          </ul>
        </div>
        <div>
          <form onSubmit={handleClick}>
            <input placeholder="Search"
            type='text'
            id='queryTerm'
            ref={(input) => {_queryTerm = input;}}/>
            <button type='submit'>Search</button>
          </form>
        </div>
      </header>
    </div>
  );
}

export default Header;
