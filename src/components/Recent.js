import React from 'react';
import PropTypes from "prop-types";
import RecentGuitars from './RecentGuitars';
import RecentAmps from './RecentAmps';
import RecentPedals from './RecentPedals';
import './styles/MultiList.css';

function Recent(props) {
  return(
    <div className='box'>
      <div>
        <h1>RECENT GUITARS:</h1>
        <div className='container'>
          <RecentGuitars />
        </div>
        <br/>
        <hr/>
        <h1>RECENT AMPS:</h1>
        <div className='container'>
          <RecentAmps />
        </div>
        <br/>
        <hr/>
        <h1>RECENT PEDALS:</h1>
        <div className='container'>
          <RecentPedals />
        </div>
      </div>
    </div>
  );
}

export default Recent;
