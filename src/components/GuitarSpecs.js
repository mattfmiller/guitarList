import React from 'react';
import { connect } from 'react-redux'
import PropTypes from "prop-types";

function GuitarSpecs(props) {
  let selectedGuitar;
  {props.guitarsInCollection.forEach(function(guitar) {
    if (guitar.id === parseInt(props.selectedGuitarId)) {
      selectedGuitar = guitar;
    }
  });}

  return(
    <div>
      <img src={selectedGuitar.imageUrl}/>
    </div>
  );
}

const mapStateToProps = state => {
  return  {
    guitarsInCollection: state.guitarsInCollection
  }
}

export default connect(mapStateToProps)(GuitarSpecs);
