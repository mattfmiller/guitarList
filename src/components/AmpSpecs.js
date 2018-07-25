import React from 'react';
import { connect } from 'react-redux'
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";

function AmpSpecs(props) {
  let optionalContent;
  let selectedAmp;

  if (props.ampsInCollection.length === 0) return (<h1>loading...</h1>);

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

  let editPath = '/amps/' + props.selectedAmpId + '/edit';

  if (selectedAmp.wishlist) {
    optionalContent = <div>
      <h2>{selectedAmp.manufacturer} - {selectedAmp.model}</h2>
      <img src={selectedAmp.imageUrl}/>
    </div>
  } else {
    optionalContent = <div>
      <h2>{selectedAmp.manufacturer} - {selectedAmp.model}</h2>
      <img src={selectedAmp.imageUrl}/>
      <p>${selectedAmp.paid}</p>
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
    ampsInCollection: state.ampsInCollection,
    ampsInWishlist: state.ampsInWishlist
  }
}

export default connect(mapStateToProps)(AmpSpecs);
