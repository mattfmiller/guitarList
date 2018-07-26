import React from 'react';
import { connect } from 'react-redux'
import {Link} from 'react-router-dom';
import PropTypes from "prop-types";
import {fetchDeletePedal} from './../actions';

function PedalSpecs(props) {
  let optionalContent;
  let selectedPedal;

  // if (props.pedalsInCollection.length === 0) return (<h1>loading...</h1>);

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

  let editPath = '/pedals/' + props.selectedPedalId + '/edit';

  function handleDelete() {
    let deleteConfirm = window.confirm('Delete Pedal?');
    if (deleteConfirm === true) {
      props.dispatch(fetchDeletePedal(selectedPedal.id));
    }
  }

  if (selectedPedal.wishlist) {
    optionalContent = <Link style={{textDecoration: 'none', color: 'black'}} to='/pedals/wishlist'><h4 className='floatRight'><strong>Wishlist</strong></h4></Link>
  } else {
    optionalContent = <Link style={{textDecoration: 'none', color: 'black'}} to='/pedals'><h4 className='floatRight'><strong>Collection</strong></h4></Link>
  }

  return(
    <div className='box'>
      <div>
        {optionalContent}
        <h4 className='floatLeft'><strong>{selectedPedal.type} Pedal</strong></h4>
        <h1>{selectedPedal.manufacturer} - {selectedPedal.model}</h1>
        <img src={selectedPedal.imageUrl}/>
        <h3><strong>Serial Number: </strong>{selectedPedal.serialNumber} ~ <strong>Year: </strong>{selectedPedal.year}</h3>
          <h4>{selectedPedal.description} Made In {selectedPedal.country}.</h4>
          <div className='left'>
            <h2>General</h2>
            <hr/>
            <div className='columns'>
              <div>
                <h3><strong>Effect:</strong> {selectedPedal.type}</h3>
                <h3><strong>Power:</strong> {selectedPedal.power}</h3>
                <h3><strong>Weight:</strong> {selectedPedal.weight} lbs</h3>
              </div>
              <div>
                <h3><strong>Width:</strong> {selectedPedal.width} ''</h3>
                <h3><strong>Depth:</strong> {selectedPedal.depth} ''</h3>
                <h3><strong>Height:</strong> {selectedPedal.height} ''</h3>
              </div>
            </div>
            <br/>
            <br/>
            <h2>Electronics</h2>
            <hr/>
            <div className='columns'>
              <div>
                <h3><strong>Circuit:</strong> {selectedPedal.electronics}</h3>
                <h3><strong>True Bypass:</strong> {selectedPedal.trueBypass}</h3>
                <h3><strong>Controls:</strong> {selectedPedal.controls}</h3>
              </div>
              <div>
                <h3><strong>Input Impedance:</strong> {selectedPedal.inputImpedance} Ohms</h3>
                <h3><strong>Output Impedance:</strong> {selectedPedal.outputImpedance} Ohms</h3>
                <h3><strong>Current Draw:</strong> {selectedPedal.currentDraw}</h3>
              </div>
            </div>
            <br/>
            <h2>Miscellaneous</h2>
            <hr/>
            <div className='columns'>
              <div>
                <h3><strong>Features:</strong> {selectedPedal.features}</h3>
              </div>
            </div>
          </div>
      </div>
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
    pedalsInCollection: state.pedalsInCollection,
    pedalsInWishlist: state.pedalsInWishlist
  }
}

export default connect(mapStateToProps)(PedalSpecs);
