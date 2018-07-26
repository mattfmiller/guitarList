import React from 'react';
import { connect } from 'react-redux'
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";

function AmpSpecs(props) {
  let optionalContent;
  let selectedAmp;

  // if (props.ampsInCollection.length === 0) return (<h1>loading...</h1>);

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

  let editPath = '/amps/' + props.selectedAmpId + '/edit';

  if (selectedAmp.wishlist) {
    optionalContent =
    <div>
      <h4 className='floatRight'><strong>Wishlist</strong></h4>
      <h4 className='floatLeft'><strong>{selectedAmp.instrument} Amplifier</strong></h4>
      <h1>{selectedAmp.manufacturer} - {selectedAmp.model}</h1>
      <img src={selectedAmp.imageUrl}/>
      <h4>{selectedAmp.description} Made In {selectedAmp.country}.</h4>
      <div className='left'>
        <h2>General</h2>
        <hr/>
        <div className='columns'>
          <div>
            <h3><strong>{selectedAmp.type} Amp</strong></h3>
            <h3><strong>Power:</strong> {selectedAmp.power} W</h3>
            <h3><strong>Weight:</strong> {selectedAmp.weight} lbs</h3>
          </div>
          <div>
            <h3><strong>Width:</strong> {selectedAmp.width} ''</h3>
            <h3><strong>Depth:</strong> {selectedAmp.depth} ''</h3>
            <h3><strong>Height:</strong> {selectedAmp.height} ''</h3>
          </div>
        </div>
        <br/>
        <br/>
        <h2>Hardware</h2>
        <hr/>
        <div className='columns'>
          <div>
            <h3><strong> Cabinet Wood:</strong>  {selectedAmp.cabinetWood}</h3>
            <h3><strong>Finish:</strong> {selectedAmp.finish}</h3>
            <h3><strong>Grill Cloth:</strong> {selectedAmp.grillCloth}</h3>
            <h3><strong>Logo:</strong> {selectedAmp.logo}</h3>
            <h3><strong>Tiltback Legs:</strong> {selectedAmp.tiltLegs}</h3>
          </div>
          <div>
            <h3><strong>Handle:</strong> {selectedAmp.handle}</h3>
            <h3><strong>Knobs:</strong> {selectedAmp.knobs}</h3>
            <h3><strong>Jewel Light:</strong> {selectedAmp.jewelLight}</h3>
            <h3><strong>Control Panel:</strong> {selectedAmp.controlPanel}</h3>
            <h3><strong>Feet:</strong> {selectedAmp.feet}</h3>
          </div>
        </div>
        <br/>
        <h2>Electronics</h2>
        <hr/>
        <div className='columns'>
          <div>
            <h3><strong>Internal Wiring:</strong> {selectedAmp.electronics}</h3>
            <h3><strong>Tubes:</strong> {selectedAmp.tubes}</h3>
            <h3><strong>externalSpeaker Jack:</strong> {selectedAmp.externalSpeaker}</h3>
          </div>
          <div>
            <h3><strong>Speakers:</strong> {selectedAmp.speakers}</h3>
            <h3><strong>Reverb:</strong> {selectedAmp.reverb}</h3>
            <h3><strong>Tremoolo:</strong> {selectedAmp.tremolo}</h3>
          </div>
        </div>
      </div>
    </div>
  } else {
    optionalContent =
    <div>
      <h4 className='floatRight'><strong>Collection</strong></h4>
      <h4 className='floatLeft'><strong>{selectedAmp.instrument} Amplifier</strong></h4>
      <h1>{selectedAmp.manufacturer} - {selectedAmp.model}</h1>
      <img src={selectedAmp.imageUrl}/>
      <h3><strong>Serial Number: </strong>{selectedAmp.serialNumber} ~ <strong>Year: </strong>{selectedAmp.year}</h3>
        <h4>{selectedAmp.description} Made In {selectedAmp.country}.</h4>
        <div className='left'>
          <h2>General</h2>
          <hr/>
          <div className='columns'>
            <div>
              <h3><strong>{selectedAmp.type} Amp</strong></h3>
              <h3><strong>Power:</strong> {selectedAmp.power} W</h3>
              <h3><strong>Weight:</strong> {selectedAmp.weight} lbs</h3>
            </div>
            <div>
              <h3><strong>Width:</strong> {selectedAmp.width} ''</h3>
              <h3><strong>Depth:</strong> {selectedAmp.depth} ''</h3>
              <h3><strong>Height:</strong> {selectedAmp.height} ''</h3>
            </div>
          </div>
          <br/>
          <br/>
          <h2>Hardware</h2>
          <hr/>
          <div className='columns'>
            <div>
              <h3><strong> Cabinet Wood:</strong>  {selectedAmp.cabinetWood}</h3>
              <h3><strong>Finish:</strong> {selectedAmp.finish}</h3>
              <h3><strong>Grill Cloth:</strong> {selectedAmp.grillCloth}</h3>
              <h3><strong>Logo:</strong> {selectedAmp.logo}</h3>
              <h3><strong>Tiltback Legs:</strong> {selectedAmp.tiltLegs}</h3>
            </div>
            <div>
              <h3><strong>Handle:</strong> {selectedAmp.handle}</h3>
              <h3><strong>Knobs:</strong> {selectedAmp.knobs}</h3>
              <h3><strong>Jewel Light:</strong> {selectedAmp.jewelLight}</h3>
              <h3><strong>Control Panel:</strong> {selectedAmp.controlPanel}</h3>
              <h3><strong>Feet:</strong> {selectedAmp.feet}</h3>
            </div>
          </div>
          <br/>
          <h2>Electronics</h2>
          <hr/>
          <div className='columns'>
            <div>
              <h3><strong>Internal Wiring:</strong> {selectedAmp.electronics}</h3>
              <h3><strong>Tubes:</strong> {selectedAmp.tubes}</h3>
              <h3><strong>externalSpeaker Jack:</strong> {selectedAmp.externalSpeaker}</h3>
            </div>
            <div>
              <h3><strong>Speakers:</strong> {selectedAmp.speakers}</h3>
              <h3><strong>Reverb:</strong> {selectedAmp.reverb}</h3>
              <h3><strong>Tremoolo:</strong> {selectedAmp.tremolo}</h3>
            </div>
          </div>
          <br/>
          <h2>Accessories</h2>
          <hr/>
          <div className='columns'>
            <div>
              <h3><strong>Cover:</strong> {selectedAmp.cover}</h3>
            </div>
          </div>
        </div>
    </div>
  }

  return(
    <div className='box'>
      {optionalContent}
      <br/>
      <Link style={{textDecoration: 'none', color: 'black'}} to={editPath}><h3><strong>Edit</strong></h3></Link>
    </div>
  );
}

const mapStateToProps = state => {
  return  {
    ampsInCollection: state.ampsInCollection,
    ampsInWishlist: state.ampsInWishlist
  }
}

export default connect(mapStateToProps)(AmpSpecs);
