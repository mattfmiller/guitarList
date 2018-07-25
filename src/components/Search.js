import React from 'react';
import PropTypes from "prop-types";
import SearchGuitars from './SearchGuitars';
import SearchAmps from './SearchAmps';
import SearchPedals from './SearchPedals';

function Search(props) {
  return(
    <div>
      <p>GUITARS:</p>
      <div className='container'>
        <SearchGuitars />
      </div>
    <hr/>
      <p>AMPS:</p>
      <div className='container'>
        <SearchAmps />
      </div>
      <hr/>
        <p>PEDALS:</p>
        <div className='container'>
          <SearchPedals />
        </div>
    </div>
  );
}

export default Search;
