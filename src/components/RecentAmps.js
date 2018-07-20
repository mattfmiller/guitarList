import React from 'react';
import { connect } from 'react-redux'
import PropTypes from "prop-types";
import Amp from './Amp';
import './styles/List.css';

function RecentAmps(props) {
  let recentAmps = [];
  for (var i = props.ampsInCollection.length -1; i > props.ampsInCollection.length - 4; i--) {
    recentAmps.push(props.ampsInCollection[i]);
  }
  return(
    <div className="container">
      {recentAmps.map((amp) =>
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

export default connect(mapStateToProps)(RecentAmps);
