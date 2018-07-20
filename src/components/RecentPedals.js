import React from 'react';
import { connect } from 'react-redux'
import PropTypes from "prop-types";
import Pedal from './Pedal';
import './styles/List.css';

function RecentPedals(props) {
  let recentPedals = [];
  for (var i = props.pedalsInCollection.length -1; i > props.pedalsInCollection.length - 4; i--) {
    recentPedals.push(props.pedalsInCollection[i]);
  }
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
