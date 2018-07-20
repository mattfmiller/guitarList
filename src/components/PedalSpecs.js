import React from 'react';
import { connect } from 'react-redux'
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";

function PedalSpecs(props) {
  let selectedPedal;
  {props.pedalsInCollection.forEach(function(pedal) {
    if (pedal.id === parseInt(props.selectedPedalId)) {
      selectedPedal = pedal;
    }
  });}

  let editPath = '/pedals/' + props.selectedPedalId + '/edit'

  return(
    <div>
      <h1> {selectedPedal.manufacturer} - {selectedPedal.model}</h1>
      <img src={selectedPedal.imageUrl}/>
      <Link to={editPath}><p>Edit</p></Link>
    </div>
  );
}

const mapStateToProps = state => {
  return  {
    pedalsInCollection: state.pedalsInCollection
  }
}

export default connect(mapStateToProps)(PedalSpecs);
