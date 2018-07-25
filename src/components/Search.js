import React, { Component } from 'react';
import PropTypes from "prop-types";
import SearchGuitars from './SearchGuitars';
import SearchAmps from './SearchAmps';
import SearchPedals from './SearchPedals';
import { connect } from 'react-redux';
import queryString from 'query-string';
import {fetchGuitarsBySearch} from './../actions';
import {fetchAmpsBySearch} from './../actions';
import {fetchPedalsBySearch} from './../actions';

class Search extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.currentRouterPath);
    let values = queryString.parse(this.props.currentRouterPath);
    let queryTerm = values.query;
    this.props.dispatch(fetchGuitarsBySearch(queryTerm));
    this.props.dispatch(fetchAmpsBySearch(queryTerm));
    this.props.dispatch(fetchPedalsBySearch(queryTerm));
  };

  render() {
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
}

export default connect()(Search);
