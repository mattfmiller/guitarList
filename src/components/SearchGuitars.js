import React from 'react';
import { connect } from 'react-redux'
import PropTypes from "prop-types";
import Guitar from './Guitar';
import './styles/List.css';

function SearchGuitars(props) {
  if (props.guitarsReturnedFromSearch.length === 0) return (<h3>Hmmm, can't seem to find any guitars for that search...</h3>);
  return(
    <div className="container">
      {props.guitarsReturnedFromSearch.map((guitar) =>
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
    guitarsReturnedFromSearch: state.guitarsReturnedFromSearch
  }
}

export default connect(mapStateToProps)(SearchGuitars);
