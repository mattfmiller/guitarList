import React from 'react';
import PropTypes from "prop-types";
import Guitar from './Guitar';
import './styles/List.css';

function GuitarCollection(props) {
  return(
    <div className="container">
      {props.guitars.map((guitar) =>
         <Guitar imageUrl = {guitar.imageUrl}
          manufacturer = {guitar.manufacturer}
          model = {guitar.model}
          key = {guitar.id} />
      )}
    </div>
  );
}

GuitarCollection.propTypes = {
  guitars:PropTypes.array,
};

export default GuitarCollection;
