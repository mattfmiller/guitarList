import * as types from "./../constants/ActionTypes";

export const requestGuitarsInCollection = () => ({
  type: types.REQUEST_GUITARS_IN_COLLECTION
});

export const receiveGuitarsInCollection = (json) => ({
  type: types.RECEIVE_GUITARS_IN_COLLECTION,
  json
});

export const requestGuitarsInWishlist = () => ({
  type: types.REQUEST_GUITARS_IN_WISHLIST
});

export const receiveGuitarsInWishlist = (json) => ({
  type: types.RECEIVE_GUITARS_IN_WISHLIST,
  json
});

export const requestAmpsInCollection = () => ({
  type: types.REQUEST_AMPS_IN_COLLECTION
});

export const receiveAmpsInCollection = (json) => ({
  type: types.RECEIVE_AMPS_IN_COLLECTION,
  json
});

export const requestAmpsInWishlist = () => ({
  type: types.REQUEST_AMPS_IN_WISHLIST
});

export const receiveAmpsInWishlist = (json) => ({
  type: types.RECEIVE_AMPS_IN_WISHLIST,
  json
});

export const requestPedalsInCollection = () => ({
  type: types.REQUEST_PEDALS_IN_COLLECTION
});

export const receivePedalsInCollection = (json) => ({
  type: types.RECEIVE_PEDALS_IN_COLLECTION,
  json
});

export const requestPedalsInWishlist = () => ({
  type: types.REQUEST_PEDALS_IN_WISHLIST
});

export const receivePedalsInWishlist = (json) => ({
  type: types.RECEIVE_PEDALS_IN_WISHLIST,
  json
});

export const requestGuitarsBySearch = () => ({
  type: types.REQUEST_GUITARS_BY_SEARCH
});

export const receiveGuitarsBySearch = (json, queryTerm) => ({
  type: types.RECEIVE_GUITARS_BY_SEARCH,
  json,
  queryTerm
});

export function fetchGuitarsInCollection() {
  return function (dispatch) {
    dispatch(requestGuitarsInCollection());
    return fetch('https://equiplist.herokuapp.com/guitars').then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    ).then(function(json) {
      dispatch(receiveGuitarsInCollection(json));
    });
  };
}

export function fetchGuitarsInWishlist() {
  return function (dispatch) {
    dispatch(requestGuitarsInWishlist());
    return fetch('https://equiplist.herokuapp.com/guitars/wishlist').then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    ).then(function(json) {
      dispatch(receiveGuitarsInWishlist(json));
    });
  };
}

export function fetchAmpsInCollection() {
  return function (dispatch) {
    dispatch(requestAmpsInCollection());
    return fetch('https://equiplist.herokuapp.com/amps').then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    ).then(function(json) {
      dispatch(receiveAmpsInCollection(json));
    });
  };
}

export function fetchAmpsInWishlist() {
  return function (dispatch) {
    dispatch(requestAmpsInWishlist());
    return fetch('https://equiplist.herokuapp.com/amps/wishlist').then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    ).then(function(json) {
      dispatch(receiveAmpsInWishlist(json));
    });
  };
}

export function fetchPedalsInCollection() {
  return function (dispatch) {
    dispatch(requestPedalsInCollection());
    return fetch('https://equiplist.herokuapp.com/pedals').then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    ).then(function(json) {
      dispatch(receivePedalsInCollection(json));
    });
  };
}

export function fetchPedalsInWishlist() {
  return function (dispatch) {
    dispatch(requestPedalsInWishlist());
    return fetch('https://equiplist.herokuapp.com/pedals/wishlist').then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    ).then(function(json) {
      dispatch(receivePedalsInWishlist(json));
    });
  };
}

export function fetchNewGuitar(body) {
  return function (dispatch){
    return fetch('https://equiplist.herokuapp.com/guitars/new', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(body)
    }).then(function(data) {
      console.log('Request success: ', data);
      fetchGuitarsInCollection();
      window.location.replace('http://localhost:3000/guitars');
    }).catch(function (error) {
      console.log('Request failure: ', error);
    });
  };
}

export function fetchNewAmp(body) {
  return function (dispatch){
    return fetch('https://equiplist.herokuapp.com/amps/new', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(body)
    }).then(function(data) {
      console.log('Request success: ', data);
      fetchAmpsInCollection();
      window.location.replace('http://localhost:3000/amps');
    }).catch(function (error) {
      console.log('Request failure: ', error);
    });
  };
}

export function fetchNewPedal(body) {
  return function (dispatch){
    return fetch('https://equiplist.herokuapp.com/pedals/new', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(body)
    }).then(function(data) {
      console.log('Request success: ', data);
      fetchPedalsInCollection();
      window.location.replace('http://localhost:3000/pedals');
    }).catch(function (error) {
      console.log('Request failure: ', error);
    });
  };
}

export function fetchEditGuitar(body, id) {
  return function (dispatch){
    return fetch('https://equiplist.herokuapp.com/guitars/' + id + '/edit', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(body)
    }).then(function(data) {
      console.log('Request success: ', data);
      fetchGuitarsInCollection();
      window.location.replace('http://localhost:3000/guitars');
    }).catch(function (error) {
      console.log('Request failure: ', error);
    });
  };
}

export function fetchEditAmp(body, id) {
  return function (dispatch){
    return fetch('https://equiplist.herokuapp.com/amps/' + id + '/edit', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(body)
    }).then(function(data) {
      console.log('Request success: ', data);
      fetchAmpsInCollection();
      window.location.replace('http://localhost:3000/amps');
    }).catch(function (error) {
      console.log('Request failure: ', error);
    });
  };
}

export function fetchEditPedal(body, id) {
  return function (dispatch){
    return fetch('https://equiplist.herokuapp.com/pedals/' + id + '/edit', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(body)
    }).then(function(data) {
      console.log('Request success: ', data);
      fetchPedalsInCollection();
      window.location.replace('http://localhost:3000/pedals');
    }).catch(function (error) {
      console.log('Request failure: ', error);
    });
  };
}

export function fetchGuitarsBySearch(queryTerm) {
  return function (dispatch) {
    dispatch(requestGuitarsBySearch());
    return fetch('https://equiplist.herokuapp.com/guitars?query=' + queryTerm).then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    ).then(function(json) {
      dispatch(receiveGuitarsBySearch(json, queryTerm));
    });
  };
}
