import React from 'react';
import { connect } from 'react-redux'
import PropTypes from "prop-types";
import Amp from './Amp';
import './styles/List.css';

function AmpCollection(props) {
  if (props.ampsInCollection.length === 0) return (<h3>Hmmm, can't seem find any amps in the collection...</h3>);
  return(
    <div className="container">
      {props.ampsInCollection.map((amp) =>
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
    ampsInCollection: state.ampsInCollection
  }
}

export default connect(mapStateToProps)(AmpCollection);
