import React from 'react';
import PropTypes from "prop-types";
import Guitar from './Guitar';
import './styles/List.css';

function RecentGuitars(props) {
  console.log(props.recentGuitars);
  return(
    <div className="container">
      {props.recentGuitars.map((guitar, index) =>
         <Guitar imageUrl = {guitar.imageUrl}
          manufacturer = {guitar.manufacturer}
          model = {guitar.model}
          key = {guitar.id} />
      )}
    </div>
  );
}

RecentGuitars.propTypes = {
  recentGuitars:PropTypes.array,
};

export default RecentGuitars;
