import React, { Component } from 'react';
import './styles/App.css';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          GUITARS
        </p>
      </div>
    );
  }
}

export default App;
