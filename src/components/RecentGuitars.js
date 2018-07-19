import React from 'react';
import PropTypes from "prop-types";
import Guitar from './Guitar';
import './styles/List.css';

function RecentGuitars(props) {
  let recentGuitars = [];
  for (var i = props.guitarsInCollection.length -1; i > props.guitarsInCollection.length - 4; i--) {
    recentGuitars.push(props.guitarsInCollection[i]);
  }
  return(
    <div className="container">
      {recentGuitars.map((guitar) =>
         <Guitar imageUrl = {guitar.imageUrl}
          manufacturer = {guitar.manufacturer}
          model = {guitar.model}
          id = {guitar.id}
          key = {guitar.id} />
      )}
    </div>
  );
}

RecentGuitars.propTypes = {
  guitarsInCollection:PropTypes.array,
};

export default RecentGuitars;
