import React from 'react';
import PropTypes from "prop-types";
import Guitar from './Guitar';
import './styles/List.css';

function GuitarCollection(props) {
  return(
    <div className="container">
      {props.guitarsInCollection.map((guitar) =>
         <Guitar imageUrl = {guitar.imageUrl}
          manufacturer = {guitar.manufacturer}
          model = {guitar.model}
          id = {guitar.id}
          key = {guitar.id} />
      )}
    </div>
  );
}

GuitarCollection.propTypes = {
  guitarsInCollection:PropTypes.array,
};

export default GuitarCollection;
