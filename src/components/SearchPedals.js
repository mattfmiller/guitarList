import React from 'react';
import { connect } from 'react-redux'
import PropTypes from "prop-types";
import Pedal from './Pedal';
import './styles/List.css';

function SearchPedals(props) {
  if (props.pedalsReturnedFromSearch.length === 0) return (<h3>Hmmm, can't seem to find any pedals for that search...</h3>);
  return(
    <div className="container">
      {props.pedalsReturnedFromSearch.map((pedal) =>
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
    pedalsReturnedFromSearch: state.pedalsReturnedFromSearch
  }
}

export default connect(mapStateToProps)(SearchPedals);
