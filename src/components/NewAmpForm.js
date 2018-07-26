import React from 'react';
import { connect } from 'react-redux';
import {fetchNewAmp} from './../actions';
import './styles/Form.css';

function NewAmpForm(props) {
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
  let _instrument = null;
  let _type = null;
  let _power = null;
  let _cabinetWood = null;
  let _finish = null;
  let _grillCloth = null;
  let _width = null;
  let _depth = null;
  let _height = null;
  let _electronics = null;
  let _speakers = null;
  let _tubes = null;
  let _reverb = null;
  let _tremolo = null;
  let _externalSpeaker = null;
  let _handle = null;
  let _knobs = null;
  let _jewelLight = null;
  let _controlPanel = null;
  let _logo = null;
  let _tiltLegs = null;
  let _feet = null;
  let _controls = null;
  let _cover = null;

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
      'instrument': _instrument.value,
      'type': _type.value,
      'power': _power.value,
      'cabinetWood': _cabinetWood.value,
      'finish': _finish.value,
      'grillCloth': _grillCloth.value,
      'width': _width.value,
      'depth': _depth.value,
      'height': _height.value,
      'electronics': _electronics.value,
      'speakers': _speakers.value,
      'tubes': _tubes.value,
      'reverb': _reverb.value,
      'tremolo': _tremolo.value,
      'externalSpeaker': _externalSpeaker.value,
      'handle': _handle.value,
      'knobs': _knobs.value,
      'jewelLight': _jewelLight.value,
      'controlPanel': _controlPanel.value,
      'logo': _logo.value,
      'tiltLegs': _tiltLegs.value,
      'feet': _feet.value,
      'controls': _controls.value,
      'cover': _cover.value,
    }
    props.dispatch(fetchNewAmp(body));
  }

  return(
    <div className='box'>
      <h2>Add A New Amp</h2>
      <form onSubmit={handleClick}>
        <div>
          <label>Add to Collection or Wishlist?</label>
          <br/>
          <select id ='wishlist' ref={(select) => {_wishlist=select;}}>
            <option value="false">Collection</option>
            <option value="true">Wishlist</option>
          </select>
        </div>
        <div className='left'>
          <h2>General</h2>
          <hr/>
          <div className='columns'>
            <div>
              <div>
                <label>Manufacturer</label>
                <br/>
                <input
                  type='text'
                  id='manufacturer'
                  ref={(input) => {_manufacturer = input;}}/>
              </div>
              <div>
                <label>Model</label>
                <br/>
                <input
                  type='text'
                  id='model'
                  ref={(input) => {_model = input;}}/>
              </div>
              <div>
                <label>Country</label>
                <br/>
                <input
                  type='text'
                  id='country'
                  ref={(input) => {_country = input;}}/>
              </div>
              <div>
                <label>Serial Number</label>
                <br/>
                <input
                  type='text'
                  id='serialNumber'
                  ref={(input) => {_serialNumber = input;}}/>
              </div>
              <div>
                <label>Description</label>
                <br/>
                <textarea
                  type='text'
                  id='description'
                  ref={(input) => {_description = input;}}></textarea>
              </div>
              <div>
                <label>Year</label>
                <br/>
                <input
                  type='number'
                  id='year'
                  ref={(input) => {_year = input;}}/>
              </div>
            </div>
            <div>
              <div>
                <label>Image URL</label>
                <br/>
                <input
                  type='text'
                  id='imageUrl'
                  ref={(input) => {_imageUrl = input;}}/>
              </div>
              <div>
                <label>Paid</label>
                <br/>
                <input
                  type='number'
                  id='paid'
                  ref={(input) => {_paid = input;}}/>
              </div>
              <div>
                <label>Weight</label>
                <br/>
                <input
                  type='number'
                  id='weight'
                  ref={(input) => {_weight = input;}}/>
              </div>
              <div>
                <label>instrument</label>
                <br/>
                <input
                  type='text'
                  id='instrument'
                  ref={(input) => {_instrument = input;}}/>
              </div>
              <div>
                <label>type</label>
                <br/>
                <input
                  type='text'
                  id='type'
                  ref={(input) => {_type = input;}}/>
              </div>
            </div>
          </div>
          <h2>Hardware</h2>
          <hr/>
          <div className='columns'>
            <div>
              <div>
                <label>cabinetWood</label>
                <br/>
                <input
                  type='text'
                  id='cabinetWood'
                  ref={(input) => {_cabinetWood = input;}}/>
              </div>
              <div>
                <label>finish</label>
                <br/>
                <input
                  type='text'
                  id='finish'
                  ref={(input) => {_finish = input;}}/>
              </div>
              <div>
                <label>grillCloth</label>
                <br/>
                <input
                  type='text'
                  id='grillCloth'
                  ref={(input) => {_grillCloth = input;}}/>
              </div>
              <div>
                <label>width</label>
                <br/>
                <input
                  type='number'
                  id='width'
                  ref={(input) => {_width = input;}}/>
              </div>
              <div>
                <label>depth</label>
                <br/>
                <input
                  type='number'
                  id='depth'
                  ref={(input) => {_depth = input;}}/>
              </div>
              <div>
                <label>height</label>
                <br/>
                <input
                  type='number'
                  id='height'
                  ref={(input) => {_height = input;}}/>
              </div>
              <div>
                <label>handle</label>
                <br/>
                <input
                  type='text'
                  id='handle'
                  ref={(input) => {_handle = input;}}/>
              </div>
            </div>
            <div>
              <div>
                <label>knobs</label>
                <br/>
                <input
                  type='text'
                  id='knobs'
                  ref={(input) => {_knobs = input;}}/>
              </div>
              <div>
                <label>jewelLight</label>
                <br/>
                <input
                  type='text'
                  id='jewelLight'
                  ref={(input) => {_jewelLight = input;}}/>
              </div>
              <div>
                <label>controlPanel</label>
                <br/>
                <input
                  type='text'
                  id='controlPanel'
                  ref={(input) => {_controlPanel = input;}}/>
              </div>
              <div>
                <label>logo</label>
                <br/>
                <input
                  type='text'
                  id='logo'
                  ref={(input) => {_logo = input;}}/>
              </div>
              <div>
                <label>Tilt Legs</label>
                <br/>
                  <input
                    type='text'
                    id='tiltLegs'
                    ref={(input) => {_tiltLegs = input;}}/>
              </div>
              <div>
                <label>feet</label>
                <br/>
                <input
                  type='text'
                  id='feet'
                  ref={(input) => {_feet = input;}}/>
              </div>
            </div>
          </div>
          <h2>Electronics</h2>
          <hr/>
          <div className='columns'>
            <div>
              <div>
                <label>electronics</label>
                <br/>
                <input
                  type='text'
                  id='electronics'
                  ref={(input) => {_electronics = input;}}/>
              </div>
              <div>
                <label>power</label>
                <br/>
                <input
                  type='number'
                  id='power'
                  ref={(input) => {_power = input;}}/>
              </div>
              <div>
                <label>speakers</label>
                <br/>
                <input
                  type='text'
                  id='speakers'
                  ref={(input) => {_speakers = input;}}/>
              </div>
              <div>
                <label>Tubes</label>
                <br/>
                <input
                  type='text'
                  id='tubes'
                  ref={(input) => {_tubes = input;}}/>
              </div>
            </div>
            <div>
              <div>
                <label>Reverb</label>
                <br/>
                  <input
                    type='text'
                    id='reverb'
                    ref={(input) => {_reverb = input;}}/>
              </div>
              <div>
                <label>Tremolo</label>
                <br/>
                  <input
                    type='text'
                    id='tremolo'
                    ref={(input) => {_tremolo = input;}}/>
              </div>
              <div>
                <label>externalSpeaker</label>
                <br/>
                <input
                  type='text'
                  id='externalSpeaker'
                  ref={(input) => {_externalSpeaker = input;}}/>
              </div>
              <div>
                <label>controls</label>
                <br/>
                <input
                  type='text'
                  id='controls'
                  ref={(input) => {_controls = input;}}/>
              </div>
            </div>
          </div>
          <h2>Acessories</h2>
          <hr/>
          <div>
            <label>cover</label>
            <br/>
            <input
              type='text'
              id='cover'
              ref={(input) => {_cover = input;}}/>
          </div>
          <br/>
        </div>
        <button type='submit'>Add Amp</button>
      </form>
    </div>
  );
}

export default connect()(NewAmpForm);
