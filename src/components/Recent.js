import React from 'react';
import PropTypes from "prop-types";
import RecentGuitars from './RecentGuitars';
import RecentAmps from './RecentAmps';
import RecentPedals from './RecentPedals';

function Recent(props) {
  console.log(props.guitarsInCollection);
  return(
    <div>
      <p>RECENT GUITARS:</p>
      <div className='container'>
        <RecentGuitars />
      </div>
    <hr/>
      <p>RECENT AMPS:</p>
      <div className='container'>
        <RecentAmps />
      </div>
      <hr/>
        <p>RECENT PEDALS:</p>
        <div className='container'>
          <RecentPedals />
        </div>
    </div>
  );
}

export default Recent;
