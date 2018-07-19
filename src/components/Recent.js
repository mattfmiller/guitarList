import React from 'react';
import PropTypes from "prop-types";
import RecentGuitars from './RecentGuitars'

function Recent(props) {
  console.log(props.recentGuitars);
  return(
    <div className='container'>
      <RecentGuitars recentGuitars={props.recentGuitars} />
    </div>
  );
}

Recent.propTypes = {
  recentGuitars:PropTypes.array,
};

export default Recent;
