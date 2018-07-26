import React from 'react';
import { connect } from 'react-redux'
import PropTypes from "prop-types";
import Guitar from './Guitar';
import './styles/List.css';

function GuitarWishlist(props) {
  if (props.guitarsInWishlist.length === 0) return (<h3>Hmmm, can't seem to find any guitars in the wishlist...</h3>);
  return (
    <div className='box'>
      <h1>GUITAR WISHLIST:</h1>
      <div className="container">
        {props.guitarsInWishlist.map((guitar) =>
           <Guitar imageUrl = {guitar.imageUrl}
            manufacturer = {guitar.manufacturer}
            model = {guitar.model}
            id = {guitar.id}
            key = {guitar.id} />
        )}
      </div>
  </div>
  );
}

const mapStateToProps = state => {
  return  {
    guitarsInWishlist: state.guitarsInWishlist
  }
}

export default connect(mapStateToProps)(GuitarWishlist);
