import React from 'react';
import { connect } from 'react-redux'
import PropTypes from "prop-types";
import Amp from './Amp';
import './styles/List.css';

function AmpWishlist(props) {
  return(
    <div className="container">
      {props.ampsInWishlist.map((amp) =>
         <Amp imageUrl = {amp.imageUrl}
          manufacturer = {amp.manufacturer}
          model = {amp.model}
          id = {amp.id}
          key = {amp.id} />
      )}
    </div>
  );
}

const mapStateToProps = state => {
  return  {
    ampsInWishlist: state.ampsInWishlist
  }
}

export default connect(mapStateToProps)(AmpWishlist);
