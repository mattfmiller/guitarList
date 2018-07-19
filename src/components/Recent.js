import React from 'react';
import PropTypes from "prop-types";
import RecentGuitars from './RecentGuitars'

function Recent(props) {
  console.log(props.guitars);
  return(
    <div>
      <p>RECENT GUITARS:</p>
      <div className='container'>
        <RecentGuitars guitars={props.guitars} />
      </div>
    </div>
  );
}

Recent.propTypes = {
  guitars:PropTypes.array,
};

export default Recent;
