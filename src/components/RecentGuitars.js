import React from 'react';
import PropTypes from "prop-types";
import Guitar from './Guitar';
import './styles/List.css';

function RecentGuitars(props) {
  let recentGuitars = [];
  for (var i = props.guitars.length -1; i > props.guitars.length - 4; i--) {
    recentGuitars.push(props.guitars[i]);
  }
  return(
    <div className="container">
      {recentGuitars.map((guitar) =>
         <Guitar imageUrl = {guitar.imageUrl}
          manufacturer = {guitar.manufacturer}
          model = {guitar.model}
          key = {guitar.id} />
      )}
    </div>
  );
}

RecentGuitars.propTypes = {
  guitars:PropTypes.array,
};

export default RecentGuitars;
