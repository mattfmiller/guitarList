import React from 'react';
import { connect } from 'react-redux'
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import './styles/InstrumentSpecs.css';
import {fetchDeleteGuitar} from './../actions';

function GuitarSpecs(props) {

  let optionalContent;
  let selectedGuitar;
  // if (props.guitarsInCollection.length === 0) return (<h1>loading...</h1>);

  {props.guitarsInCollection.forEach(function(guitar) {
    if (guitar.id === parseInt(props.selectedGuitarId)) {
      selectedGuitar = guitar;
    }
  });}

  {props.guitarsInWishlist.forEach(function(guitar) {
    if (guitar.id === parseInt(props.selectedGuitarId)) {
      selectedGuitar = guitar;
    }
  });}

  let editPath = '/guitars/' + props.selectedGuitarId + '/edit';

  if (selectedGuitar.wishlist) {
    optionalContent =
    <div>
      <Link style={{textDecoration: 'none', color: 'black'}} to='/guitars/wishlist'><h4 className='floatRight'><strong>Wishlist</strong></h4></Link>
      <h4 className='floatLeft'><strong>{selectedGuitar.type} Guitar</strong></h4>
      <h1>{selectedGuitar.manufacturer} - {selectedGuitar.model}</h1>
      <img src={selectedGuitar.imageUrl}/>
      <h4>{selectedGuitar.description} Made In {selectedGuitar.country}.</h4>
      <div className='left'>
        <h2>Body</h2>
        <hr/>
        <div className='columns'>
          <div>
            <h3><strong>Wood:</strong>  {selectedGuitar.bodyWood}</h3>
            <h3><strong>Binding:</strong> {selectedGuitar.binding}</h3>
          </div>
          <div>
            <h3><strong>Finish:</strong> {selectedGuitar.finish}</h3>
            <h3><strong>Color:</strong> {selectedGuitar.color}</h3>
          </div>
        </div>
        <br/>
        <h2>Neck</h2>
        <hr/>
        <div className='columns'>
          <div>
            <h3><strong>{selectedGuitar.neckType} Neck</strong></h3>
            <h3><strong>Wood:</strong> {selectedGuitar.neckWood}</h3>
            <h3><strong>Profile:</strong> {selectedGuitar.neckProfile}</h3>
            <h3><strong>Scale Length:</strong> {selectedGuitar.scaleLength}''</h3>
            <h3><strong>Fretboard Wood:</strong> {selectedGuitar.fretboardWood}</h3>
            <h3><strong>Fretboard Radius:</strong> {selectedGuitar.fretboardRadius}''</h3>
          </div>
          <div>
            <h3><strong>Number of Frets:</strong> {selectedGuitar.frets}</h3>
            <h3><strong>Frets:</strong> {selectedGuitar.fretMaterial}</h3>
            <h3><strong>Nut Width:</strong> {selectedGuitar.nutWidth}''</h3>
            <h3><strong>Nut Material:</strong> {selectedGuitar.nutMaterial}</h3>
            <h3><strong>Inlays:</strong> {selectedGuitar.inlays}</h3>
          </div>
        </div>
        <br/>
        <h2>Hardware</h2>
        <hr/>
        <div className='columns'>
          <div>
            <h3><strong>Bridge:</strong> {selectedGuitar.bridge}</h3>
            <h3><strong>Tailpiece:</strong> {selectedGuitar.tailpiece}</h3>
            <h3><strong>Tuning Machines:</strong> {selectedGuitar.tuners}</h3>
            <h3><strong>Tuner Buttons:</strong> {selectedGuitar.tunerButtons}</h3>
          </div>
          <div>
            <h3><strong>Switch:</strong> {selectedGuitar.guitarSwitch}</h3>
            <h3><strong>Knobs:</strong> {selectedGuitar.knobs}</h3>
            <h3><strong>Pickguard:</strong> {selectedGuitar.pickguard}</h3>
          </div>
        </div>
        <br/>
        <h2>Electronics</h2>
        <hr/>
        <div className='columns'>
          <div>
            <h3><strong>Neck Pickup:</strong> {selectedGuitar.neckPickup}</h3>
            <h3><strong>Middle Pickup:</strong> {selectedGuitar.middlePickup}</h3>
            <h3><strong>Bridge Pickup:</strong> {selectedGuitar.bridgePickup}</h3>
            <h3><strong>Controls:</strong> {selectedGuitar.controls}</h3>
          </div>
          <div>
            <h3><strong>Volume Pot(s):</strong> {selectedGuitar.volumePots}</h3>
            <h3><strong>Tone Pot(s):</strong> {selectedGuitar.tonePots}</h3>
            <h3><strong>Capacitor:</strong> {selectedGuitar.capacitor}</h3>
          </div>
        </div>
      </div>
    </div>
  } else {
    optionalContent =
    <div>
      <Link style={{textDecoration: 'none', color: 'black'}} to='/guitars'><h4 className='floatRight'><strong>Collection</strong></h4></Link>
      <h4 className='floatLeft'><strong>{selectedGuitar.type} Guitar</strong></h4>
      <h1>{selectedGuitar.manufacturer} - {selectedGuitar.model}</h1>
      <img src={selectedGuitar.imageUrl}/>
      <h3><strong>Serial Number: </strong>{selectedGuitar.serialNumber} ~ <strong>Year: </strong>{selectedGuitar.year}</h3>
        <h4>{selectedGuitar.description} Made In {selectedGuitar.country}.</h4>
        <div className='left'>
          <h2>Body</h2>
          <hr/>
          <div className='columns'>
            <div>
              <h3><strong>Weight:</strong> {selectedGuitar.weight} lbs</h3>
              <h3><strong>Wood:</strong>  {selectedGuitar.bodyWood}</h3>
              <h3><strong>Binding:</strong> {selectedGuitar.binding}</h3>
            </div>
            <div>
              <h3><strong>Finish:</strong> {selectedGuitar.finish}</h3>
              <h3><strong>Color:</strong> {selectedGuitar.color}</h3>
            </div>
          </div>
          <br/>
          <h2>Neck</h2>
          <hr/>
          <div className='columns'>
            <div>
              <h3><strong>{selectedGuitar.neckType} Neck</strong></h3>
              <h3><strong>Wood:</strong> {selectedGuitar.neckWood}</h3>
              <h3><strong>Profile:</strong> {selectedGuitar.neckProfile}</h3>
              <h3><strong>Scale Length:</strong> {selectedGuitar.scaleLength}''</h3>
              <h3><strong>Fretboard Wood:</strong> {selectedGuitar.fretboardWood}</h3>
              <h3><strong>Fretboard Radius:</strong> {selectedGuitar.fretboardRadius}''</h3>
            </div>
            <div>
              <h3><strong>Number of Frets:</strong> {selectedGuitar.frets}</h3>
              <h3><strong>Frets:</strong> {selectedGuitar.fretMaterial}</h3>
              <h3><strong>Nut Width:</strong> {selectedGuitar.nutWidth}''</h3>
              <h3><strong>Nut Material:</strong> {selectedGuitar.nutMaterial}</h3>
              <h3><strong>Inlays:</strong> {selectedGuitar.inlays}</h3>
            </div>
          </div>
          <br/>
          <h2>Hardware</h2>
          <hr/>
          <div className='columns'>
            <div>
              <h3><strong>Bridge:</strong> {selectedGuitar.bridge}</h3>
              <h3><strong>Tailpiece:</strong> {selectedGuitar.tailpiece}</h3>
              <h3><strong>Tuning Machines:</strong> {selectedGuitar.tuners}</h3>
              <h3><strong>Tuner Buttons:</strong> {selectedGuitar.tunerButtons}</h3>
            </div>
            <div>
              <h3><strong>Switch:</strong> {selectedGuitar.guitarSwitch}</h3>
              <h3><strong>Knobs:</strong> {selectedGuitar.knobs}</h3>
              <h3><strong>Pickguard:</strong> {selectedGuitar.pickguard}</h3>
            </div>
          </div>
          <br/>
          <h2>Electronics</h2>
          <hr/>
          <div className='columns'>
            <div>
              <h3><strong>Neck Pickup:</strong> {selectedGuitar.neckPickup}</h3>
              <h3><strong>Middle Pickup:</strong> {selectedGuitar.middlePickup}</h3>
              <h3><strong>Bridge Pickup:</strong> {selectedGuitar.bridgePickup}</h3>
              <h3><strong>Controls:</strong> {selectedGuitar.controls}</h3>
            </div>
            <div>
              <h3><strong>Volume Pot(s):</strong> {selectedGuitar.volumePots}</h3>
              <h3><strong>Tone Pot(s):</strong> {selectedGuitar.tonePots}</h3>
              <h3><strong>Capacitor:</strong> {selectedGuitar.capacitor}</h3>
            </div>
          </div>
          <br/>
          <h2>Accessories</h2>
          <hr/>
          <div className='columns'>
            <div>
              <h3><strong>Case:</strong> {selectedGuitar.guitarCase}</h3>
            </div>
          </div>
        </div>
    </div>
  }

  function handleDelete() {
    let deleteConfirm = window.confirm('Delete Guitar?');
    if (deleteConfirm === true) {
      props.dispatch(fetchDeleteGuitar(selectedGuitar.id));
    }
  }

  return(
    <div className='box'>
      {optionalContent}
      <br/>
      <div className='edit-delete'>
        <Link style={{textDecoration: 'none', color: 'black'}} to={editPath}><h3><strong>Edit</strong></h3></Link>
        <h3 onClick={handleDelete}><strong>Delete</strong></h3>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return  {
    guitarsInCollection: state.guitarsInCollection,
    guitarsInWishlist: state.guitarsInWishlist
  }
}

export default connect(mapStateToProps)(GuitarSpecs);
