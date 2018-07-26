import React from 'react';
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import './styles/Instrument.css';

function Pedal(props) {
  let linkPath = '/pedals/' + props.id;
  return(
    <Link style={{textDecoration: 'none', color: 'black'}} to={linkPath}><div className='instrument'>
      <div className='instrumentImage'>
        <img src={props.imageUrl} alt={props.model}/>
      </div>
      <h2>{props.manufacturer} - {props.model}</h2>
    </div></Link>
  );
}

Pedal.propTypes = {
  imageUrl:PropTypes.string,
  manufacturer:PropTypes.string,
  model:PropTypes.string,
  id:PropTypes.number,
};

export default Pedal;
