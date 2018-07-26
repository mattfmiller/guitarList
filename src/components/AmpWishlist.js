import React from 'react';
import { connect } from 'react-redux'
import PropTypes from "prop-types";
import Amp from './Amp';
import './styles/List.css';

function AmpWishlist(props) {
  if (props.ampsInWishlist.length === 0) return (<h3>Hmmm, can't seem to find any amps in the wishlist...</h3>);
  return(
    <div className='box'>
      <h1>AMP WISHLIST:</h1>
      <div className="container">
        {props.ampsInWishlist.map((amp) =>
           <Amp imageUrl = {amp.imageUrl}
            manufacturer = {amp.manufacturer}
            model = {amp.model}
            id = {amp.id}
            key = {amp.id} />
        )}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return  {
    ampsInWishlist: state.ampsInWishlist
  }
}

export default connect(mapStateToProps)(AmpWishlist);
