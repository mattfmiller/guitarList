import React from 'react';
import { connect } from 'react-redux'
import PropTypes from "prop-types";
import Pedal from './Pedal';
import './styles/List.css';

function PedalCollection(props) {
  if (props.pedalsInCollection.length === 0) return (<h3>Hmmm, can't seem find any pedals in the collection...</h3>);
  return(
    <div className='box'>
    <h1>PEDAL COLLECTION:</h1>
    <div className="container">
      {props.pedalsInCollection.map((pedal) =>
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
    pedalsInCollection: state.pedalsInCollection
  }
}

export default connect(mapStateToProps)(PedalCollection);
