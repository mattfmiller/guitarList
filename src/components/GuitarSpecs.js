import React from 'react';
import { connect } from 'react-redux'
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";

function GuitarSpecs(props) {
  let selectedGuitar;
  {props.guitarsInCollection.forEach(function(guitar) {
    if (guitar.id === parseInt(props.selectedGuitarId)) {
      selectedGuitar = guitar;
    }
  });}

  let editPath = '/guitars/' + props.selectedGuitarId + '/edit'

  return(
    <div>
      <h1> {selectedGuitar.manufacturer} - {selectedGuitar.model}</h1>
      <img src={selectedGuitar.imageUrl}/>
      <Link to={editPath}><p>Edit</p></Link>
    </div>
  );
}

const mapStateToProps = state => {
  return  {
    guitarsInCollection: state.guitarsInCollection
  }
}

export default connect(mapStateToProps)(GuitarSpecs);
