import React from 'react';
import { connect } from 'react-redux'
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";

function GuitarSpecs(props) {
  let optionalContent;
  let selectedGuitar;
  if (props.guitarsInCollection.length === 0) return (<h1>loading...</h1>);

  {props.guitarsInCollection.forEach(function(guitar) {
    if (guitar.id === parseInt(props.selectedGuitarId)) {
      selectedGuitar = guitar;
    }
  });}

  {props.guitarsInWishlist.forEach(function(guitar) {
    if (guitar.id === parseInt(props.selectedGuitarId)) {
      selectedGuitar = guitar;
    }
  });}

  let editPath = '/guitars/' + props.selectedGuitarId + '/edit';

  if (selectedGuitar.wishlist) {
    optionalContent = <div>
      <h2>{selectedGuitar.manufacturer} - {selectedGuitar.model}</h2>
      <img src={selectedGuitar.imageUrl}/>
    </div>
  } else {
    optionalContent = <div>
      <h2>{selectedGuitar.manufacturer} - {selectedGuitar.model}</h2>
      <img src={selectedGuitar.imageUrl}/>
      <p>${selectedGuitar.paid}</p>
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
    guitarsInCollection: state.guitarsInCollection,
    guitarsInWishlist: state.guitarsInWishlist
  }
}

export default connect(mapStateToProps)(GuitarSpecs);
