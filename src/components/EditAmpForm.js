import React from 'react';
import { connect } from 'react-redux'
import {fetchEditAmp} from './../actions';
import './styles/Form.css';

function EditAmpForm(props) {
  let selectedAmp;

  {props.ampsInCollection.forEach(function(amp) {
    if (amp.id === parseInt(props.selectedAmpId)) {
      selectedAmp = amp;
    }
  });}

  {props.ampsInWishlist.forEach(function(amp) {
    if (amp.id === parseInt(props.selectedAmpId)) {
      selectedAmp = amp;
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
    props.dispatch(fetchEditAmp(body, selectedAmp.id));
  }

  return(
    <div className='box'>
      <h2>Edit {selectedAmp.manufacturer} {selectedAmp.model}</h2>
      <form onSubmit={handleClick}>
        <div>
          <label>Add to Collection or Wishlist?</label>
          <br/>
          <select id ='wishlist' defaultValue={selectedAmp.wishlist} ref={(select) => {_wishlist=select;}}>
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
            defaultValue={selectedAmp.manufacturer}
            ref={(input) => {_manufacturer = input;}}/>
        </div>
        <div>
          <label>Model</label>
          <br/>
          <input
            type='text'
            id='model'
            defaultValue={selectedAmp.model}
            ref={(input) => {_model = input;}}/>
        </div>
        <div>
          <label>Country</label>
          <br/>
          <input
            type='text'
            id='country'
            defaultValue={selectedAmp.country}
            ref={(input) => {_country = input;}}/>
        </div>
        <div>
          <label>Serial Number</label>
          <br/>
          <input
            type='text'
            id='serialNumber'
            defaultValue={selectedAmp.serialNumber}
            ref={(input) => {_serialNumber = input;}}/>
        </div>
        <div>
          <label>Description</label>
          <br/>
          <textarea
            type='text'
            id='description'
            defaultValue={selectedAmp.description}
            ref={(input) => {_description = input;}}></textarea>
        </div>
        <div>
          <label>Year</label>
          <br/>
          <input
            type='number'
            id='year'
            defaultValue={selectedAmp.year}
            ref={(input) => {_year = input;}}/>
        </div>
        <div>
          <label>Image URL</label>
          <br/>
          <input
            type='text'
            id='imageUrl'
            defaultValue={selectedAmp.imageUrl}
            ref={(input) => {_imageUrl = input;}}/>
        </div>
        <div>
          <label>Paid</label>
          <br/>
          <input
            type='number'
            id='paid'
            defaultValue={selectedAmp.paid}
            ref={(input) => {_paid = input;}}/>
        </div>
        <div>
          <label>Weight</label>
          <br/>
          <input
            type='number'
            id='weight'
            defaultValue={selectedAmp.weight}
            ref={(input) => {_weight = input;}}/>
        </div>
        <div>
          <label>instrument</label>
          <br/>
          <input
            type='text'
            id='instrument'
            defaultValue={selectedAmp.instrument}
            ref={(input) => {_instrument = input;}}/>
        </div>
        <div>
          <label>type</label>
          <br/>
          <input
            type='text'
            id='type'
            defaultValue={selectedAmp.type}
            ref={(input) => {_type = input;}}/>
        </div>
        <h2>Hardware</h2>
        <hr/>
        <div>
          <label>cabinetWood</label>
          <br/>
          <input
            type='text'
            id='cabinetWood'
            defaultValue={selectedAmp.cabinetWood}
            ref={(input) => {_cabinetWood = input;}}/>
        </div>
        <div>
          <label>finish</label>
          <br/>
          <input
            type='text'
            id='finish'
            defaultValue={selectedAmp.finish}
            ref={(input) => {_finish = input;}}/>
        </div>
        <div>
          <label>grillCloth</label>
          <br/>
          <input
            type='text'
            id='grillCloth'
            defaultValue={selectedAmp.grillCloth}
            ref={(input) => {_grillCloth = input;}}/>
        </div>
        <div>
          <label>width</label>
          <br/>
          <input
            type='number'
            id='width'
            defaultValue={selectedAmp.width}
            ref={(input) => {_width = input;}}/>
        </div>
        <div>
          <label>depth</label>
          <br/>
          <input
            type='number'
            id='depth'
            defaultValue={selectedAmp.depth}
            ref={(input) => {_depth = input;}}/>
        </div>
        <div>
          <label>height</label>
          <br/>
          <input
            type='number'
            id='height'
            defaultValue={selectedAmp.height}
            ref={(input) => {_height = input;}}/>
        </div>
        <div>
          <label>handle</label>
          <br/>
          <input
            type='text'
            id='handle'
            defaultValue={selectedAmp.handle}
            ref={(input) => {_handle = input;}}/>
        </div>
        <div>
          <label>knobs</label>
          <br/>
          <input
            type='text'
            id='knobs'
            defaultValue={selectedAmp.knobs}
            ref={(input) => {_knobs = input;}}/>
        </div>
        <div>
          <label>jewelLight</label>
          <br/>
          <input
            type='text'
            id='jewelLight'
            defaultValue={selectedAmp.jewelLight}
            ref={(input) => {_jewelLight = input;}}/>
        </div>
        <div>
          <label>controlPanel</label>
          <br/>
          <input
            type='text'
            id='controlPanel'
            defaultValue={selectedAmp.controlPanel}
            ref={(input) => {_controlPanel = input;}}/>
        </div>
        <div>
          <label>logo</label>
          <br/>
          <input
            type='text'
            id='logo'
            defaultValue={selectedAmp.logo}
            ref={(input) => {_logo = input;}}/>
        </div>
        <div>
          <label>Tilt Legs</label>
          <br/>
            <input
              type='text'
              id='tiltLegs'
              defaultValue={selectedAmp.tiltLegs}
              ref={(input) => {_tiltLegs = input;}}/>
        </div>
        <div>
          <label>feet</label>
          <br/>
          <input
            type='text'
            id='feet'
            defaultValue={selectedAmp.feet}
            ref={(input) => {_feet = input;}}/>
        </div>
        <h2>Electronics</h2>
        <hr/>
        <div>
          <label>electronics</label>
          <br/>
          <input
            type='text'
            id='electronics'
            defaultValue={selectedAmp.electronics}
            ref={(input) => {_electronics = input;}}/>
        </div>
        <div>
          <label>power</label>
          <br/>
          <input
            type='number'
            id='power'
            defaultValue={selectedAmp.power}
            ref={(input) => {_power = input;}}/>
        </div>
        <div>
          <label>speakers</label>
          <br/>
          <input
            type='text'
            id='speakers'
            defaultValue={selectedAmp.speakers}
            ref={(input) => {_speakers = input;}}/>
        </div>
        <div>
          <label>Tubes</label>
          <br/>
          <input
            type='text'
            id='tubes'
            defaultValue={selectedAmp.tubes}
            ref={(input) => {_tubes = input;}}/>
        </div>
        <div>
          <label>Reverb</label>
          <br/>
            <input
              type='text'
              id='reverb'
              defaultValue={selectedAmp.reverb}
              ref={(input) => {_reverb = input;}}/>
        </div>
        <div>
          <label>Tremolo</label>
          <br/>
            <input
              type='text'
              id='tremolo'
              defaultValue={selectedAmp.tremolo}
              ref={(input) => {_tremolo = input;}}/>
        </div>
        <div>
          <label>externalSpeaker</label>
          <br/>
          <input
            type='text'
            id='externalSpeaker'
            defaultValue={selectedAmp.externalSpeaker}
            ref={(input) => {_externalSpeaker = input;}}/>
        </div>
        <div>
          <label>controls</label>
          <br/>
          <input
            type='text'
            id='controls'
            defaultValue={selectedAmp.controls}
            ref={(input) => {_controls = input;}}/>
        </div>
        <h2>Acessories</h2>
        <hr/>
        <div>
          <label>cover</label>
          <br/>
          <input
            type='text'
            id='cover'
            defaultValue={selectedAmp.cover}
            ref={(input) => {_cover = input;}}/>
        </div>
        <br/>
        <button type='submit'>Edit Amp</button>
      </form>
    </div>
  );
}

const mapStateToProps = state => {
  return  {
    ampsInCollection: state.ampsInCollection,
    ampsInWishlist: state.ampsInWishlist
  }
}

export default connect(mapStateToProps)(EditAmpForm);
