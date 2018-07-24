import React from 'react';
import { connect } from 'react-redux'
import PropTypes from "prop-types";
import Guitar from './Guitar';
import './styles/List.css';

function GuitarCollection(props) {
  let optionalContent;
  if (props.guitarsInCollection.message === undefined) {
    return (
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
  } else {
    return (
      <div className="container">
      </div>
    );
  }
}

const mapStateToProps = state => {
  return  {
    guitarsInCollection: state.guitarsInCollection
  }
}

export default connect(mapStateToProps)(GuitarCollection);
