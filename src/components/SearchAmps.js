import React from 'react';
import { connect } from 'react-redux'
import PropTypes from "prop-types";
import Amp from './Amp';
import './styles/List.css';

function SearchAmps(props) {
  if (props.ampsReturnedFromSearch.length === 0) return (<h3>Hmmm, can't seem to find any amps for that search...</h3>);
  return(
    <div className="container">
      {props.ampsReturnedFromSearch.map((amp) =>
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
    ampsReturnedFromSearch: state.ampsReturnedFromSearch
  }
}

export default connect(mapStateToProps)(SearchAmps);
