import constants from './../constants'
const { initialState, types } = constants

const pedalWishlistReducer = (state = initialState.pedalsInWishlist, action) => {
  let newState;
  switch (action.type) {

    case types.REQUEST_PEDALS_IN_WISHLIST:
    // const newStateSliceEntry = {
    //   isFetchingPedalsInWishlist: true
    // };
    // newState = Object.assign({}, state, newStateSliceEntry);
    // return newState;
    return {
      isFetchingPedalsInWishlist: true
    };

    case types.RECEIVE_PEDALS_IN_WISHLIST:
    // const newPedalsInWishlistSlice = {
    //   isFetchingPedalsInWishlist: false,
    //   pedalsInWishlist: action.json,
    // };
    // newState = Object.assign({}, state, newPedalsInWishlistSlice);
    // console.log(newState);
    // return newState;
    return action.json;

    default:
    return state
  }
}

export default pedalWishlistReducer;
