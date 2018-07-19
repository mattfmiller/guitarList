import React from 'react';
import PropTypes from "prop-types";

function Guitar(props) {
  console.log(props);
  return(
    <div>
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
