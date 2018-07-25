import React from 'react';
import { connect } from 'react-redux'
import PropTypes from "prop-types";
import Guitar from './Guitar';
import './styles/List.css';

function GuitarCollection(props) {
  console.log(props.guitarsInCollection);
  // if (props.guitarsInCollection === undefined) return (<h1>loading...</h1>);
  if (props.guitarsInCollection.message === undefined) {
    console.log(1);
    // return (
    //   <div className="container">
    //     {props.guitarsInCollection.map((guitar) =>
    //       <Guitar imageUrl = {guitar.imageUrl}
    //         manufacturer = {guitar.manufacturer}
    //         model = {guitar.model}
    //         id = {guitar.id}
    //         key = {guitar.id} />
    //     )}
    //   </div>
    // );
  } else {
    console.log(2);
    // return (
    //   <div className="container">
    //   </div>
    // );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return  {
    guitarsInCollection: state.guitarsInCollection
  }
}

export default connect(mapStateToProps)(GuitarCollection);
