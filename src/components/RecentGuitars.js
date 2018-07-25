import React from 'react';
import { connect } from 'react-redux'
import PropTypes from "prop-types";
import Guitar from './Guitar';
import './styles/List.css';

function RecentGuitars(props) {
  console.log(props.guitarsInCollection);
  if (props.guitarsInCollection.message) {
    console.log("error message");
  } else {
    console.log("list of guitars");
  }
  let recentGuitars = props.guitarsInCollection.slice(-3).reverse();
  return null;
    // <div className="container">
    //   // {recentGuitars.map((guitar) =>
    //   //    <Guitar imageUrl = {guitar.imageUrl}
    //   //     manufacturer = {guitar.manufacturer}
    //   //     model = {guitar.model}
    //   //     id = {guitar.id}
    //   //     key = {guitar.id} />
    //   // )}
    // </div>
  // );
}


const mapStateToProps = state => {
  return  {
    guitarsInCollection: state.guitarsInCollection
  }
}

export default connect(mapStateToProps)(RecentGuitars);
