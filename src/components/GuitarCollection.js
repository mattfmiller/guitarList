import React from 'react';
import { connect } from 'react-redux'
import PropTypes from "prop-types";
import Guitar from './Guitar';
import './styles/List.css';

function GuitarCollection(props) {
  if (props.guitarsInCollection.length === 0) return (<h3>Hmmm, can't seem find any guitars in the collection...</h3>);
  return (
    <div className="container">
      {props.guitarsInCollection.map((guitar) =>
        <Guitar imageUrl = {guitar.imageUrl}
          manufacturer = {guitar.manufacturer}
          model = {guitar.model}
          id = {guitar.id}
          key = {guitar.id} />
      )}
    </div>
  );
}

const mapStateToProps = state => {
  return  {
    guitarsInCollection: state.guitarsInCollection
  }
}

export default connect(mapStateToProps)(GuitarCollection);
