import React from 'react';
import { connect } from 'react-redux'
import PropTypes from "prop-types";
import Pedal from './Pedal';
import './styles/List.css';

function PedalWishlist(props) {
  return(
    <div className="container">
      {props.pedalsInWishlist.map((pedal) =>
         <Pedal imageUrl = {pedal.imageUrl}
          manufacturer = {pedal.manufacturer}
          model = {pedal.model}
          id = {pedal.id}
          key = {pedal.id} />
      )}
    </div>
  );
}

const mapStateToProps = state => {
  return  {
    pedalsInWishlist: state.pedalsInWishlist
  }
}

export default connect(mapStateToProps)(PedalWishlist);
