import React from 'react';
import { connect } from 'react-redux';
import {fetchEditPedal} from './../actions';
import './styles/Form.css';

function EditPedalForm(props) {
  let selectedPedal;

  {props.pedalsInCollection.forEach(function(pedal) {
    if (pedal.id === parseInt(props.selectedPedalId)) {
      selectedPedal = pedal;
    }
  });}

  {props.pedalsInWishlist.forEach(function(pedal) {
    if (pedal.id === parseInt(props.selectedPedalId)) {
      selectedPedal = pedal;
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
  let _power = null;
  let _width = null;
  let _depth = null;
  let _height = null;
  let _electronics = null;
  let _trueBypass = null;
  let _inputImpedance = null;
  let _outputImpedance = null;
  let _currentDraw = null;
  let _controls = null;
  let _features = null;

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
      'power': _power.value,
      'width': _width.value,
      'depth': _depth.value,
      'height': _height.value,
      'electronics': _electronics.value,
      'trueBypass': _trueBypass.value,
      'inputImpedance': _inputImpedance.value,
      'outputImpedance': _outputImpedance.value,
      'currentDraw': _currentDraw.value,
      'controls': _controls.value,
      'features': _features.value,
    }
    props.dispatch(fetchEditPedal(body, selectedPedal.id));
  }

  return(
    <div className='box'>
      <h2>Edit {selectedPedal.manufacturer} {selectedPedal.model}</h2>
      <form onSubmit={handleClick}>
        <div>
          <label>Add to Collection or Wishlist?</label>
          <br/>
          <select id ='wishlist' defaultValue={selectedPedal.wishlist} ref={(select) => {_wishlist=select;}}>
            <option value="false">Collection</option>
            <option value="true">Wishlist</option>
          </select>
        </div>
        <h2>General</h2>
        <hr/>
        <div>
          <label>Manufacturer</label>
          <br/>
          <input
            type='text'
            id='manufacturer'
            defaultValue={selectedPedal.manufacturer}
            ref={(input) => {_manufacturer = input;}}/>
        </div>
        <div>
          <label>Model</label>
          <br/>
          <input
            type='text'
            id='model'
            defaultValue={selectedPedal.model}
            ref={(input) => {_model = input;}}/>
        </div>
        <div>
          <label>Country</label>
          <br/>
          <input
            type='text'
            id='country'
            defaultValue={selectedPedal.country}
            ref={(input) => {_country = input;}}/>
        </div>
        <div>
          <label>Serial Number</label>
          <br/>
          <input
            type='text'
            id='serialNumber'
            defaultValue={selectedPedal.serialNumber}
            ref={(input) => {_serialNumber = input;}}/>
        </div>
        <div>
          <label>Description</label>
          <br/>
          <textarea
            type='text'
            id='description'
            defaultValue={selectedPedal.description}
            ref={(input) => {_description = input;}}></textarea>
        </div>
        <div>
          <label>Year</label>
          <br/>
          <input
            type='number'
            id='year'
            defaultValue={selectedPedal.year}
            ref={(input) => {_year = input;}}/>
        </div>
        <div>
          <label>Image URL</label>
          <br/>
          <input
            type='text'
            id='imageUrl'
            defaultValue={selectedPedal.imageUrl}
            ref={(input) => {_imageUrl = input;}}/>
        </div>
        <div>
          <label>Paid</label>
          <br/>
          <input
            type='number'
            id='paid'
            defaultValue={selectedPedal.paid}
            ref={(input) => {_paid = input;}}/>
        </div>
        <div>
          <label>Weight</label>
          <br/>
          <input
            type='number'
            id='weight'
            defaultValue={selectedPedal.weight}
            ref={(input) => {_weight = input;}}/>
        </div>
        <div>
          <label>type</label>
          <br/>
          <input
            type='text'
            id='type'
            defaultValue={selectedPedal.type}
            ref={(input) => {_type = input;}}/>
        </div>
        <div>
          <label>width</label>
          <br/>
          <input
            type='number'
            id='width'
            defaultValue={selectedPedal.width}
            ref={(input) => {_width = input;}}/>
        </div>
        <div>
          <label>depth</label>
          <br/>
          <input
            type='number'
            id='depth'
            defaultValue={selectedPedal.depth}
            ref={(input) => {_depth = input;}}/>
        </div>
        <div>
          <label>height</label>
          <br/>
          <input
            type='number'
            id='height'
            defaultValue={selectedPedal.height}
            ref={(input) => {_height = input;}}/>
        </div>
        <h2>Electronics</h2>
        <hr/>
        <div>
          <label>power</label>
          <br/>
          <input
            type='text'
            id='power'
            defaultValue={selectedPedal.power}
            ref={(input) => {_power = input;}}/>
        </div>
        <div>
          <label>electronics</label>
          <br/>
          <input
            type='text'
            id='electronics'
            defaultValue={selectedPedal.electronics}
            ref={(input) => {_electronics = input;}}/>
        </div>
        <div>
          <label>True Bypass or Buffer?</label>
          <br/>
            <select id ='trueBypass' defaultValue={selectedPedal.trueBypass} ref={(select) => {_trueBypass=select;}}>
              <option value="true">True Bypass</option>
              <option value="false">Buffered</option>
            </select>
        </div>
        <div>
          <label>inputImpedance</label>
          <br/>
          <input
            type='number'
            id='inputImpedance'
            defaultValue={selectedPedal.inputImpedance}
            ref={(input) => {_inputImpedance = input;}}/>
        </div>
        <div>
          <label>outputImpedance</label>
          <br/>
          <input
            type='number'
            id='outputImpedance'
            defaultValue={selectedPedal.outputImpedance}
            ref={(input) => {_outputImpedance = input;}}/>
        </div>
        <div>
          <label>currentDraw</label>
          <br/>
          <input
            type='text'
            id='currentDraw'
            defaultValue={selectedPedal.currentDraw}
            ref={(input) => {_currentDraw = input;}}/>
        </div>
        <div>
          <label>controls</label>
          <br/>
          <input
            type='text'
            id='controls'
            defaultValue={selectedPedal.controls}
            ref={(input) => {_controls = input;}}/>
        </div>
        <div>
          <label>features</label>
          <br/>
          <input
            type='text'
            id='features'
            defaultValue={selectedPedal.features}
            ref={(input) => {_features = input;}}/>
        </div>
        <br/>
        <button type='submit'>Edit Pedal</button>
      </form>
    </div>
  );
}

const mapStateToProps = state => {
  return  {
    pedalsInCollection: state.pedalsInCollection,
    pedalsInWishlist: state.pedalsInWishlist
  }
}

export default connect(mapStateToProps)(EditPedalForm);
