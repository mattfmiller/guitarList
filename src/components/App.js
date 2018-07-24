import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './styles/App.css';
import Header from './Header';
import Recent from './Recent';
import GuitarCollection from './GuitarCollection';
import AmpCollection from './AmpCollection';
import PedalCollection from './PedalCollection';
import GuitarSpecs from './GuitarSpecs';
import NewGuitarForm from './NewGuitarForm';
import GuitarWishlist from './GuitarWishlist';
import AmpSpecs from './AmpSpecs';
import NewAmpForm from './NewAmpForm';
import AmpWishlist from './AmpWishlist';
import PedalSpecs from './PedalSpecs';
import NewPedalForm from './NewPedalForm';
import PedalWishlist from './PedalWishlist';
import EditGuitarForm from './EditGuitarForm';
import EditAmpForm from './EditAmpForm';
import EditPedalForm from './EditPedalForm';
import { connect } from 'react-redux';
import {fetchGuitarsInCollection} from './../actions';

class App extends Component {
  constructor(props) {
    super(props);
  }

componentDidMount() {
  this.props.dispatch(fetchGuitarsInCollection());
};

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' render={() => <Recent/>}/>
          <Route exact path='/guitars/new' render={() => <NewGuitarForm/>}/>
          <Route exact path='/guitars/wishlist' render={() => <GuitarWishlist/>}/>
          <Route exact path='/guitars' render={() => <GuitarCollection/>}/>
          <Route exact path='/amps/new' render={() => <NewAmpForm/>}/>
          <Route exact path='/amps/wishlist' render={() => <AmpWishlist/>}/>
          <Route exact path='/amps' render={() => <AmpCollection/>}/>
          <Route exact path='/pedals/new' render={() => <NewPedalForm/>}/>
          <Route exact path='/pedals/wishlist' render={() => <PedalWishlist/>}/>
          <Route exact path='/pedals' render={() => <PedalCollection/>}/>
          <Route exact path = '/guitars/:guitarId' render={(props)=><GuitarSpecs path={props} selectedGuitarId={props.match.params.guitarId}/>}/>
          <Route exact path = '/amps/:ampId' render={(props)=><AmpSpecs path={props} selectedAmpId={props.match.params.ampId}/>}/>
          <Route exact path = '/pedals/:pedalId' render={(props)=><PedalSpecs path={props} selectedPedalId={props.match.params.pedalId}/>}/>
          <Route exact path = '/guitars/:guitarId/edit' render={(props)=><EditGuitarForm path={props} selectedGuitarId={props.match.params.guitarId}/>}/>
          <Route exact path = '/amps/:ampId/edit' render={(props)=><EditAmpForm path={props} selectedAmpId={props.match.params.ampId}/>}/>
          <Route exact path = '/pedals/:pedalId/edit' render={(props)=><EditPedalForm path={props} selectedPedalId={props.match.params.pedalId}/>}/>
        </Switch>
      </div>
    );
  }
}


export default connect()(App);
