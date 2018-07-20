import React from 'react';
import { connect } from 'react-redux'
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";

function AmpSpecs(props) {
  let selectedAmp;
  {props.ampsInCollection.forEach(function(amp) {
    if (amp.id === parseInt(props.selectedAmpId)) {
      selectedAmp = amp;
    }
  });}

  {props.ampsInWishlist.forEach(function(amp) {
    if (amp.id === parseInt(props.selectedAmpId)) {
      selectedAmp = amp;
    }
  });}

  let editPath = '/amps/' + props.selectedAmpId + '/edit'

  return(
    <div>
      <h1> {selectedAmp.manufacturer} - {selectedAmp.model}</h1>
      <img src={selectedAmp.imageUrl}/>
      <Link to={editPath}><p>Edit</p></Link>
    </div>
  );
}

const mapStateToProps = state => {
  return  {
    ampsInCollection: state.ampsInCollection,
    ampsInWishlist: state.ampsInWishlist
  }
}

export default connect(mapStateToProps)(AmpSpecs);
