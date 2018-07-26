import React from 'react';
import { connect } from 'react-redux';
import {fetchEditGuitar} from './../actions';
import './styles/Form.css';

function EditGuitarForm(props) {
  let selectedGuitar;

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

  let _manufacturer = null;
  let _model = null;
  let _collection = null;
  let _wishlist = null;
  let _country = null;
  let _serialNumber = null;
  let _description = null;
  let _year = null;
  let _imageUrl = null;
  let _paid = null;
  let _sold = null;
  let _weight = null;
  let _type = null;
  let _bodyWood = null;
  let _finish = null;
  let _color = null;
  let _binding = null;
  let _neckWood = null;
  let _neckType = null;
  let _neckProfile = null;
  let _fretboardWood = null;
  let _fretboardRadius = null;
  let _frets = null;
  let _fretMaterial = null;
  let _inlays = null;
  let _nutMaterial = null;
  let _nutWidth = null;
  let _scaleLength = null;
  let _neckPickup = null;
  let _middlePickup = null;
  let _bridgePickup = null;
  let _volumePots = null;
  let _tonePots = null;
  let _capacitor = null;
  let _tuners = null;
  let _tunerButtons = null;
  let _bridge = null;
  let _tailpiece = null;
  let _guitarSwitch = null;
  let _knobs = null;
  let _pickguard = null;
  let _controls = null;
  let _guitarCase = null;

  function handleClick(event) {
    event.preventDefault();
    let body = {
      'manufacturer': _manufacturer.value,
      'model': _model.value,
      'current': true,
      'wishlist': _wishlist.value,
      'country': _country.value,
      'serialNumber': _serialNumber.value,
      'description': _description.value,
      'year': _year.value,
      'imageUrl': _imageUrl.value,
      'paid': _paid.value,
      'sold': 0,
      'weight': _weight.value,
      'type': _type.value,
      'bodyWood': _bodyWood.value,
      'finish': _finish.value,
      'color': _color.value,
      'binding': _binding.value,
      'neckWood': _neckWood.value,
      'neckType': _neckType.value,
      'neckProfile': _neckProfile.value,
      'fretboardWood': _fretboardWood.value,
      'fretboardRadius': _fretboardRadius.value,
      'frets': _frets.value,
      'fretMaterial': _fretMaterial.value,
      'inlays': _inlays.value,
      'nutMaterial': _nutMaterial.value,
      'nutWidth': _nutWidth.value,
      'scaleLength': _scaleLength.value,
      'neckPickup': _neckPickup.value,
      'middlePickup': _middlePickup.value,
      'bridgePickup': _bridgePickup.value,
      'volumePots': _volumePots.value,
      'tonePots': _tonePots.value,
      'capacitor': _capacitor.value,
      'tuners': _tuners.value,
      'tunerButtons': _tunerButtons.value,
      'bridge': _bridge.value,
      'tailpiece': _tailpiece.value,
      'guitarSwitch': _guitarSwitch.value,
      'knobs': _knobs.value,
      'pickguard': _pickguard.value,
      'controls': _controls.value,
      'guitarCase': _guitarCase.value
    }
    props.dispatch(fetchEditGuitar(body, selectedGuitar.id));
  }

  return(
    <div className='box'>
      <h2>Edit {selectedGuitar.manufacturer} {selectedGuitar.model}:</h2>
      <form onSubmit={handleClick}>
        <div>
          <label>Add to Collection or Wishlist?</label>
          <br/>
          <select id ='wishlist' defaultValue={selectedGuitar.wishlist} ref={(select) => {_wishlist=select;}}>
            <option selected='selected' value="false">Collection</option>
            <option value="true">Wishlist</option>
          </select>
        </div>
        <div>
          <label>Manufacturer</label>
          <br/>
          <input
            type='text'
            id='manufacturer'
            defaultValue={selectedGuitar.manufacturer}
            ref={(input) => {_manufacturer = input;}}/>
        </div>
        <div>
          <label>Model</label>
          <br/>
          <input
            type='text'
            id='model'
            defaultValue={selectedGuitar.model}
            ref={(input) => {_model = input;}}/>
        </div>
        <div>
          <label>Country</label>
          <br/>
          <input
            type='text'
            id='country'
            defaultValue={selectedGuitar.country}
            ref={(input) => {_country = input;}}/>
        </div>
        <div>
          <label>Serial Number</label>
          <br/>
          <input
            type='text'
            id='serialNumber'
            defaultValue={selectedGuitar.serialNumber}
            ref={(input) => {_serialNumber = input;}}/>
        </div>
        <div>
          <label>Description</label>
          <br/>
          <textarea
            type='text'
            id='description'
            defaultValue={selectedGuitar.description}
            ref={(input) => {_description = input;}}></textarea>
        </div>
        <div>
          <label>Year</label>
          <br/>
          <input
            type='number'
            id='year'
            defaultValue={selectedGuitar.year}
            ref={(input) => {_year = input;}}/>
        </div>
        <div>
          <label>Image URL</label>
          <br/>
          <input
            type='text'
            id='imageUrl'
            defaultValue={selectedGuitar.imageUrl}
            ref={(input) => {_imageUrl = input;}}/>
        </div>
        <div>
          <label>Paid</label>
          <br/>
          <input
            type='number'
            id='paid'
            defaultValue={selectedGuitar.paid}
            ref={(input) => {_paid = input;}}/>
        </div>
        <div>
          <label>Type of Guitar</label>
          <br/>
          <input
            type='text'
            id='type'
            defaultValue={selectedGuitar.type}
            ref={(input) => {_type = input;}}/>
        </div>
        <div>
          <label>Weight</label>
          <br/>
          <input
            type='number'
            id='weight'
            defaultValue={selectedGuitar.weight}
            ref={(input) => {_weight = input;}}/>
        </div>
        <h2>Body</h2>
        <hr/>
        <div>
          <label>Wood</label>
          <br/>
          <input
            type='text'
            id='bodyWood'
            defaultValue={selectedGuitar.bodyWood}
            ref={(input) => {_bodyWood = input;}}/>
        </div>
        <div>
          <label>Finish</label>
          <br/>
          <input
            type='text'
            id='finish'
            defaultValue={selectedGuitar.finish}
            ref={(input) => {_finish = input;}}/>
        </div>
        <div>
          <label>Color</label>
          <br/>
          <input
            type='text'
            id='color'
            defaultValue={selectedGuitar.color}
            ref={(input) => {_color = input;}}/>
        </div>
        <div>
          <label>Binding</label>
          <br/>
          <input
            type='text'
            id='binding'
            defaultValue={selectedGuitar.binding}
            ref={(input) => {_binding = input;}}/>
        </div>
        <h2>Neck</h2>
        <hr/>
        <div>
          <label>Wood</label>
          <br/>
          <input
            type='text'
            id='neckWood'
            defaultValue={selectedGuitar.neckWood}
            ref={(input) => {_neckWood = input;}}/>
        </div>
        <div>
          <label>Neck Type</label>
          <br/>
          <input
            type='text'
            id='neckType'
            defaultValue={selectedGuitar.neckType}
            ref={(input) => {_neckType = input;}}/>
        </div>
        <div>
          <label>Neck Profile</label>
          <br/>
          <input
            type='text'
            id='neckProfile'
            defaultValue={selectedGuitar.neckProfile}
            ref={(input) => {_neckProfile = input;}}/>
        </div>
        <div>
          <label>Fretboard Material</label>
          <br/>
          <input
            type='text'
            id='fretboardWood'
            defaultValue={selectedGuitar.fretMaterial}
            ref={(input) => {_fretboardWood = input;}}/>
        </div>
        <div>
          <label>Fretboard Radius</label>
          <br/>
          <input
            type='number'
            id='fretboardRadius'
            defaultValue={selectedGuitar.fretboardRadius}
            ref={(input) => {_fretboardRadius = input;}}/>
        </div>
        <div>
          <label>Number of Frets</label>
          <br/>
          <input
            type='number'
            id='frets'
            defaultValue={selectedGuitar.frets}
            ref={(input) => {_frets = input;}}/>
        </div>
        <div>
          <label>Fret Material</label>
          <br/>
          <input
            type='text'
            id='fretMaterial'
            defaultValue={selectedGuitar.fretMaterial}
            ref={(input) => {_fretMaterial = input;}}/>
        </div>
        <div>
          <label>Inlays</label>
          <br/>
          <input
            type='text'
            id='inlays'
            defaultValue={selectedGuitar.inlays}
            ref={(input) => {_inlays = input;}}/>
        </div>
        <div>
          <label>Nut Material</label>
          <br/>
          <input
            type='text'
            id='nutMaterial'
            defaultValue={selectedGuitar.nutMaterial}
            ref={(input) => {_nutMaterial = input;}}/>
        </div>
        <div>
          <label>Nut Width</label>
          <br/>
          <input
            type='number'
            id='nutWidth'
            defaultValue={selectedGuitar.nutWidth}
            ref={(input) => {_nutWidth = input;}}/>
        </div>
        <div>
          <label>Scale Length</label>
          <br/>
          <input
            type='number'
            id='scaleLength'
            defaultValue={selectedGuitar.scaleLength}
            ref={(input) => {_scaleLength = input;}}/>
        </div>
        <h2>Electronics</h2>
        <hr/>
        <div>
          <label>Neck Pickup</label>
          <br/>
          <input
            type='text'
            id='neckPickup'
            defaultValue={selectedGuitar.neckPickup}
            ref={(input) => {_neckPickup = input;}}/>
        </div>
        <div>
          <label>Middle Pickup</label>
          <br/>
          <input
            type='text'
            id='middlePickup'
            defaultValue={selectedGuitar.middlePickup}
            ref={(input) => {_middlePickup = input;}}/>
        </div>
        <div>
          <label>Bridge Pickup</label>
          <br/>
          <input
            type='text'
            id='bridgePickup'
            defaultValue={selectedGuitar.bridgePickup}
            ref={(input) => {_bridgePickup = input;}}/>
        </div>
        <div>
          <label>Volume Pot(s)</label>
          <br/>
          <input
            type='text'
            id='volumePots'
            defaultValue={selectedGuitar.volumePots}
            ref={(input) => {_volumePots = input;}}/>
        </div>
        <div>
          <label>Tone Pot(s)</label>
          <br/>
          <input
            type='text'
            id='tonePots'
            defaultValue={selectedGuitar.tonePots}
            ref={(input) => {_tonePots = input;}}/>
        </div>
        <div>
          <label>Capacitor</label>
          <br/>
          <input
            type='text'
            id='capacitor'
            defaultValue={selectedGuitar.capacitor}
            ref={(input) => {_capacitor = input;}}/>
        </div>
        <div>
          <label>Controls</label>
          <br/>
          <input
            type='text'
            id='controls'
            defaultValue={selectedGuitar.controls}
            ref={(input) => {_controls = input;}}/>
        </div>
        <h2>Hardware</h2>
        <hr/>
        <div>
          <label>Tuning Machines</label>
          <br/>
          <input
            type='text'
            id='tuners'
            defaultValue={selectedGuitar.tuners}
            ref={(input) => {_tuners = input;}}/>
        </div>
        <div>
          <label>Tuner Buttons</label>
          <br/>
          <input
            type='text'
            id='tunerButtons'
            defaultValue={selectedGuitar.tunerButtons}
            ref={(input) => {_tunerButtons = input;}}/>
        </div>
        <div>
          <label>Bridge</label>
          <br/>
          <input
            type='text'
            id='bridge'
            defaultValue={selectedGuitar.bridge}
            ref={(input) => {_bridge = input;}}/>
        </div>
        <div>
          <label>Tailpiece</label>
          <br/>
          <input
            type='text'
            id='tailpiece'
            defaultValue={selectedGuitar.tailpiece}
            ref={(input) => {_tailpiece = input;}}/>
        </div>
        <div>
          <label>Switch</label>
          <br/>
          <input
            type='text'
            id='guitarSwitch'
            defaultValue={selectedGuitar.guitarSwitch}
            ref={(input) => {_guitarSwitch = input;}}/>
        </div>
        <div>
          <label>Knobs</label>
          <br/>
          <input
            type='text'
            id='knobs'
            defaultValue={selectedGuitar.knobs}
            ref={(input) => {_knobs = input;}}/>
        </div>
        <div>
          <label>Pickguard</label>
          <br/>
          <input
            type='text'
            id='pickguard'
            defaultValue={selectedGuitar.pickguard}
            ref={(input) => {_pickguard = input;}}/>
        </div>
        <h2>Accessories</h2>
        <hr/>
        <div>
          <label>Guitar Case</label>
          <br/>
          <input
            type='text'
            id='guitarCase'
            defaultValue={selectedGuitar.guitarCase}
            ref={(input) => {_guitarCase = input;}}/>
        </div>
        <br/>
        <button type='submit'>Edit Guitar</button>
      </form>
    </div>
  );
}

const mapStateToProps = state => {
  return  {
    guitarsInCollection: state.guitarsInCollection,
    guitarsInWishlist: state.guitarsInWishlist
  }
}

export default connect(mapStateToProps)(EditGuitarForm);
