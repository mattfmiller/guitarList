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

export function fetchGuitarsInCollection() {
  return function (dispatch) {
    dispatch(requestGuitarsInCollection());
    return fetch('https://equiplist.herokuapp.com/guitars').then(
      response => response.json(),
      error => console.log('An error occurred.', error)
    ).then(function(json) {
      console.log('CHECK OUT THIS SWEET API RESPONSE:', json);
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
      console.log('CHECK OUT THIS SWEET API RESPONSE:', json);
      dispatch(receiveGuitarsInWishlist(json));
    });
  };
}
