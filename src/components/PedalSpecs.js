import React from 'react';
import { connect } from 'react-redux'
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";

function PedalSpecs(props) {
  let optionalContent;
  let selectedPedal;
  {props.pedalsInCollection.forEach(function(pedal) {
    if (pedal.id === parseInt(props.selectedPedalId)) {
      selectedPedal = pedal;
    }
  });}

  {props.pedalsInWishlist.forEach(function(pedal) {
    if (pedal.id === parseInt(props.selectedPedalId)) {
      selectedPedal = pedal;
    }
  });}

  let editPath = '/pedals/' + props.selectedPedalId + '/edit';

  if (selectedPedal.wishlist) {
    optionalContent = <div>
      <h2>{selectedPedal.manufacturer} - {selectedPedal.model}</h2>
      <img src={selectedPedal.imageUrl}/>
    </div>
  } else {
    optionalContent = <div>
      <h2>{selectedPedal.manufacturer} - {selectedPedal.model}</h2>
      <img src={selectedPedal.imageUrl}/>
      <p>${selectedPedal.paid}</p>
    </div>
  }

  return(
    <div>
      {optionalContent}
      <Link to={editPath}><p>Edit</p></Link>
    </div>
  );
}

const mapStateToProps = state => {
  return  {
    pedalsInCollection: state.pedalsInCollection,
    pedalsInWishlist: state.pedalsInWishlist
  }
}

export default connect(mapStateToProps)(PedalSpecs);
