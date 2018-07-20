import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './styles/App.css';
import Header from './Header';
import Recent from './Recent';
import GuitarCollection from './GuitarCollection';
import AmpCollection from './AmpCollection';
import PedalCollection from './PedalCollection';
import GuitarSpecs from './GuitarSpecs';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' render={() => <Recent/>}/>

          <Route exact path='/guitars' render={() => <GuitarCollection/>}/>

          <Route exact path='/amps' render={() => <AmpCollection ampsInCollection={this.state.ampsInCollection}/>}/>

          <Route exact path='/pedals' render={() => <PedalCollection pedalsInCollection={this.state.pedalsInCollection}/>}/>

          <Route exact path = '/guitars/:guitarId' render={(props)=><GuitarSpecs path={props} selectedGuitarId={props.match.params.guitarId} />} />

        </Switch>
      </div>
    );
  }
}

export default App;
