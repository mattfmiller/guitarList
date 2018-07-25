import React from 'react';
import { connect } from 'react-redux'
import PropTypes from "prop-types";
import Guitar from './Guitar';
import './styles/List.css';

function GuitarWishlist(props) {
  console.log(props.guitarsInWishlist);
  return (
    <div className="container">
    
    </div>
  );
}

const mapStateToProps = state => {
  return  {
    guitarsInWishlist: state.guitarsInWishlist
  }
}

export default connect(mapStateToProps)(GuitarWishlist);
