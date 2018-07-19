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
        <RecentGuitars guitarsInCollection={props.guitarsInCollection} />
      </div>
    <hr/>
      <p>RECENT AMPS:</p>
      <div className='container'>
        <RecentAmps ampsInCollection={props.ampsInCollection} />
      </div>
      <hr/>
        <p>RECENT PEDALS:</p>
        <div className='container'>
          <RecentPedals pedlasInCollection={props.pedlasInCollection} />
        </div>
    </div>
  );
}

Recent.propTypes = {
  guitarsInCollection:PropTypes.array,
  ampsInCollection:PropTypes.array,
  pedalsInCollection:PropTypes.array,
};

export default Recent;
