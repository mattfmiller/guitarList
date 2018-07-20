import React from 'react';
import { connect } from 'react-redux'
import PropTypes from "prop-types";
import Pedal from './Pedal';
import './styles/List.css';

function RecentPedals(props) {
  let recentPedals = props.pedalsInCollection.slice(-3).reverse();
  return(
    <div className="container">
      {recentPedals.map((pedal) =>
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
    pedalsInCollection: state.pedalsInCollection
  }
}

export default connect(mapStateToProps)(RecentPedals);
