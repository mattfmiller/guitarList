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
    this.state = {
      guitarsInCollection: [
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
            imageUrl: "https://cdn.shopify.com/s/files/1/0703/6443/products/tmg-guitar-company-gatton_2048x2048.jpg?v=1435610374",
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
            id: 3,
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
            id: 4,
            manufacturer: "Gibson",
            model: "Les Paul Custom",
            country: "USA",
            serialNumber: "xxx",
            year: 1999,
            weight: 10.8,
            imageUrl: "https://i.ebayimg.com/images/g/EoQAAOSwxKtYAV8k/s-l300.jpg",
            current: true,
            wishlist: false,
            paid: 1500,
            sold: 0
        }
      ],
      ampsInCollection: [],
      pedalsInCollection: []
    };
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' render={() => <Recent guitarsInCollection={this.state.guitarsInCollection} ampsInCollection={this.state.ampsInCollection}/>}/>

          <Route exact path='/guitars' render={() => <GuitarCollection guitarsInCollection={this.state.guitarsInCollection}/>}/>

          <Route exact path='/amps' render={() => <AmpCollection ampsInCollection={this.state.ampsInCollection}/>}/>

          <Route exact path='/pedals' render={() => <PedalCollection pedalsInCollection={this.state.pedalsInCollection}/>}/>

          <Route exact path = '/guitars/:guitarId' render={(props)=><GuitarSpecs path={props} selectedGuitarId={props.match.params.guitarId} />} />

        </Switch>
      </div>
    );
  }
}

export default App;
