import React from 'react';
import { connect } from 'react-redux'
import PropTypes from "prop-types";
import Guitar from './Guitar';
import './styles/List.css';

function GuitarWishlist(props) {
  return(
    <div className="container">
      {props.guitarsInWishlist.map((guitar) =>
         <Guitar imageUrl = {guitar.imageUrl}
          manufacturer = {guitar.manufacturer}
          model = {guitar.model}
          id = {guitar.id}
          wishlist = {guitar.wishlist}
          key = {guitar.id} />
      )}
    </div>
  );
}

const mapStateToProps = state => {
  return  {
    guitarsInWishlist: state.guitarsInWishlist
  }
}

export default connect(mapStateToProps)(GuitarWishlist);
