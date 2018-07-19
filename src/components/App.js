import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './styles/App.css';
import Header from './Header';
import Recent from './Recent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recentGuitars: [
        {
            bodyWood: "Mahogany",
            finish: "Lacquer",
            color: "Ebony",
            binding: "5-Ply",
            neckWood: "Mahogany",
            neckType: "Set",
            neckProfile: "1960's Slim Taper",
            fretboardWood: "Ebony",
            fretboardRadius: 12,
            frets: 22,
            fretMaterial: "Gibson Style",
            inlays: "Mother of Pearl Block",
            nutMaterial: "Bone",
            nutWidth: 1.6875,
            scaleLength: 24.75,
            neckPickup: "Humbucker",
            middlePickup: "N/A",
            bridgePickup: "Humbucker",
            volumePots: "500K CTS",
            tonePots: "500K CTS",
            capacitor: "Sprangue .022 uf",
            tuners: "Grover Rotomatic",
            tunerButtons: "Nickel Keystone",
            bridge: "Roller",
            tailpiece: "Bigsby B7",
            guitarSwitch: "3-way",
            knobs: "Bellhat",
            pickguard: "5-Ply Black",
            controls: "Volume, Tone",
            guitarCase: "Gibson Hardcase",
            id: 1,
            manufacturer: "Gibson",
            model: "Les Paul Custom",
            country: "USA",
            serialNumber: "xxx",
            year: 1999,
            weight: 10.8,
            imageUrl: "https://www.mansons.co.uk/userfiles/shop/products/main/main_6278.jpg",
            current: true,
            wishlist: false,
            paid: 1500,
            sold: 0
        },
        {
            bodyWood: "Mahogany",
            finish: "Lacquer",
            color: "Ebony",
            binding: "5-Ply",
            neckWood: "Mahogany",
            neckType: "Set",
            neckProfile: "1960's Slim Taper",
            fretboardWood: "Ebony",
            fretboardRadius: 12,
            frets: 22,
            fretMaterial: "Gibson Style",
            inlays: "Mother of Pearl Block",
            nutMaterial: "Bone",
            nutWidth: 1.6875,
            scaleLength: 24.75,
            neckPickup: "Humbucker",
            middlePickup: "N/A",
            bridgePickup: "Humbucker",
            volumePots: "500K CTS",
            tonePots: "500K CTS",
            capacitor: "Sprangue .022 uf",
            tuners: "Grover Rotomatic",
            tunerButtons: "Nickel Keystone",
            bridge: "Roller",
            tailpiece: "Bigsby B7",
            guitarSwitch: "3-way",
            knobs: "Bellhat",
            pickguard: "5-Ply Black",
            controls: "Volume, Tone",
            guitarCase: "Gibson Hardcase",
            id: 2,
            manufacturer: "Gibson",
            model: "Les Paul Custom",
            country: "USA",
            serialNumber: "xxx",
            year: 1999,
            weight: 10.8,
            imageUrl: "https://www.mansons.co.uk/userfiles/shop/products/main/main_6278.jpg",
            current: true,
            wishlist: false,
            paid: 1500,
            sold: 0
        }
      ],
    };
  }
  render() {
    console.log(this.state.recentGuitars);
    return (
      <div className="App">
        <Header />
        <p className="App-intro">GUITARS</p>
        <Switch>
          <Route exact path='/' render={() => <Recent recentGuitars={this.state.recentGuitars}/>}/>
        </Switch>
      </div>
    );
  }
}

export default App;
