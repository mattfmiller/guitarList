import React from 'react';
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import './styles/Instrument.css';

function Amp(props) {
  let linkPath = '/amps/' + props.id;
  console.log(linkPath);
  return(
    <Link style={{textDecoration: 'none', color: 'black'}} to={linkPath}><div className='instrument'>
      <img src={props.imageUrl}/>
      <h2>{props.manufacturer} - {props.model}</h2>
    </div></Link>
  );
}

Amp.propTypes = {
  imageUrl:PropTypes.string,
  manufacturer:PropTypes.string,
  model:PropTypes.string,
  id:PropTypes.number,
};

export default Amp;
