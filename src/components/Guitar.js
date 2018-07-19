import React from 'react';
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import './styles/Instrument.css';

function Guitar(props) {
  let linkPath = '/guitars/' + props.id;
  console.log(linkPath);
  return(
    <Link style={{textDecoration: 'none', color: 'black'}} to={linkPath}><div className='instrument'>
      <img src={props.imageUrl}/>
      <h2>{props.manufacturer} - {props.model}</h2>
    </div></Link>
  );
}

Guitar.propTypes = {
  imageUrl:PropTypes.string,
  manufacturer:PropTypes.string,
  model:PropTypes.string,
  id:PropTypes.number,
};

export default Guitar;
