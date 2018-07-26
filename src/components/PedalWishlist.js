import React from 'react';
import { connect } from 'react-redux'
import PropTypes from "prop-types";
import Pedal from './Pedal';
import './styles/List.css';

function PedalWishlist(props) {
  if (props.pedalsInWishlist.length === 0) return (<h3>Hmmm, can't seem to find any pedals in the wishlist...</h3>);
  return(
    <div className='box'>
      <h1>PEDAL WISHLIST:</h1>
      <div className="container">
        {props.pedalsInWishlist.map((pedal) =>
          <Pedal imageUrl = {pedal.imageUrl}
            manufacturer = {pedal.manufacturer}
            model = {pedal.model}
            id = {pedal.id}
            key = {pedal.id} />
        )}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return  {
    pedalsInWishlist: state.pedalsInWishlist
  }
}

export default connect(mapStateToProps)(PedalWishlist);
