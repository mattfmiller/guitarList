import React from 'react';
import PropTypes from "prop-types";
import './styles/Instrument.css';

function Guitar(props) {
  return(
    <div className='instrument'>
      <img src={props.imageUrl}/>
      <h2>{props.manufacturer} - {props.model}</h2>
    </div>
  );
}

Guitar.propTypes = {
  imageUrl:PropTypes.string,
  manufacturer:PropTypes.string,
  model:PropTypes.string
};

export default Guitar;
