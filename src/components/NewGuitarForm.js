import React from 'react';

function NewGuitarForm(props) {
  const f = false;
  let t = true;

  let _manufacturer = null;
  let _model = null;
  let _wishlist = null;
  let _country = null;
  let _serialNumber = null;
  let _year = null;
  let _imageUrl = null;
  let _paid = null;
  let _sold = null;
  let _weight = null;
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
    console.log({wishlist: JSON.parse(_wishlist.value), manufacturer: _manufacturer.value});
  }

  return(
    <div>
      <h2>Add A New Guitar Form</h2>
      <form onSubmit={handleClick}>
        <div>
          <label>Add to Collection or Wishlist?</label>
          <br/>
          <select id ='wishlist' ref={(select) => {_wishlist=select;}}>
            <option value={f}>Collection</option>
            <option value={t}>Wishlist</option>
          </select>
        </div>
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
          <label>Year</label>
          <br/>
          <input
            type='number'
            id='year'
            ref={(input) => {_year = input;}}/>
        </div>
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
            type='text'
            id='weight'
            ref={(input) => {_weight = input;}}/>
        </div>
        <div>
          <label>bodyWood</label>
          <br/>
          <input
            type='text'
            id='bodyWood'
            ref={(input) => {_bodyWood = input;}}/>
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
          <label>color</label>
          <br/>
          <input
            type='text'
            id='color'
            ref={(input) => {_color = input;}}/>
        </div>
        <div>
          <label>binding</label>
          <br/>
          <input
            type='text'
            id='binding'
            ref={(input) => {_binding = input;}}/>
        </div>
        <div>
          <label>neckWood</label>
          <br/>
          <input
            type='text'
            id='neckWood'
            ref={(input) => {_neckWood = input;}}/>
        </div>
        <div>
          <label>neckType</label>
          <br/>
          <input
            type='text'
            id='neckType'
            ref={(input) => {_neckType = input;}}/>
        </div>
        <div>
          <label>neckProfile</label>
          <br/>
          <input
            type='text'
            id='neckProfile'
            ref={(input) => {_neckProfile = input;}}/>
        </div>
        <div>
          <label>fretboardWood</label>
          <br/>
          <input
            type='text'
            id='fretboardWood'
            ref={(input) => {_fretboardWood = input;}}/>
        </div>
        <div>
          <label>fretboardRadius</label>
          <br/>
          <input
            type='text'
            id='fretboardRadius'
            ref={(input) => {_fretboardRadius = input;}}/>
        </div>
        <div>
          <label>frets</label>
          <br/>
          <input
            type='text'
            id='frets'
            ref={(input) => {_frets = input;}}/>
        </div>
        <div>
          <label>fretMaterial</label>
          <br/>
          <input
            type='text'
            id='fretMaterial'
            ref={(input) => {_fretMaterial = input;}}/>
        </div>
        <div>
          <label>inlays</label>
          <br/>
          <input
            type='text'
            id='inlays'
            ref={(input) => {_inlays = input;}}/>
        </div>
        <div>
          <label>nutMaterial</label>
          <br/>
          <input
            type='text'
            id='nutMaterial'
            ref={(input) => {_nutMaterial = input;}}/>
        </div>
        <div>
          <label>nutWidth</label>
          <br/>
          <input
            type='text'
            id='nutWidth'
            ref={(input) => {_nutWidth = input;}}/>
        </div>
        <div>
          <label>scaleLength</label>
          <br/>
          <input
            type='text'
            id='scaleLength'
            ref={(input) => {_scaleLength = input;}}/>
        </div>
        <div>
          <label>neckPickup</label>
          <br/>
          <input
            type='text'
            id='neckPickup'
            ref={(input) => {_neckPickup = input;}}/>
        </div>
        <div>
          <label>middlePickup</label>
          <br/>
          <input
            type='text'
            id='middlePickup'
            ref={(input) => {_middlePickup = input;}}/>
        </div>
        <div>
          <label>bridgePickup</label>
          <br/>
          <input
            type='text'
            id='bridgePickup'
            ref={(input) => {_bridgePickup = input;}}/>
        </div>
        <div>
          <label>volumePots</label>
          <br/>
          <input
            type='text'
            id='volumePots'
            ref={(input) => {_volumePots = input;}}/>
        </div>
        <div>
          <label>tonePots</label>
          <br/>
          <input
            type='text'
            id='tonePots'
            ref={(input) => {_tonePots = input;}}/>
        </div>
        <div>
          <label>capacitor</label>
          <br/>
          <input
            type='text'
            id='capacitor'
            ref={(input) => {_capacitor = input;}}/>
        </div>
        <div>
          <label>tuners</label>
          <br/>
          <input
            type='text'
            id='tuners'
            ref={(input) => {_tuners = input;}}/>
        </div>
        <div>
          <label>tunerButtons</label>
          <br/>
          <input
            type='text'
            id='tunerButtons'
            ref={(input) => {_tunerButtons = input;}}/>
        </div>
        <div>
          <label>bridge</label>
          <br/>
          <input
            type='text'
            id='bridge'
            ref={(input) => {_bridge = input;}}/>
        </div>
        <div>
          <label>tailpiece</label>
          <br/>
          <input
            type='text'
            id='tailpiece'
            ref={(input) => {_tailpiece = input;}}/>
        </div>
        <div>
          <label>guitarSwitch</label>
          <br/>
          <input
            type='text'
            id='guitarSwitch'
            ref={(input) => {_guitarSwitch = input;}}/>
        </div>
        <div>
          <label>knobs</label>
          <br/>
          <input
            type='text'
            id='knobs'
            ref={(input) => {_knobs = input;}}/>
        </div>
        <div>
          <label>pickguard</label>
          <br/>
          <input
            type='text'
            id='pickguard'
            ref={(input) => {_pickguard = input;}}/>
        </div>
        <div>
          <label>controls</label>
          <br/>
          <input
            type='text'
            id='controls'
            ref={(input) => {_controls = input;}}/>
        </div>
        <div>
          <label>guitarCase</label>
          <br/>
          <input
            type='text'
            id='guitarCase'
            ref={(input) => {_guitarCase = input;}}/>
        </div>
        <button type='submit'>+Guitar</button>
      </form>
    </div>
  );
}

export default NewGuitarForm;
