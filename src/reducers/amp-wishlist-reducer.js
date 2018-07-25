import constants from './../constants'
const { initialState, types } = constants

const ampWishlistReducer = (state = initialState.ampsInWishlist, action) => {
  let newState;
  switch (action.type) {

    case types.REQUEST_AMPS_IN_WISHLIST:
    // const newStateSliceEntry = {
    //   isFetchingAmpsInWishlist: true
    // };
    // newState = Object.assign({}, state, newStateSliceEntry);
    // return newState;
    return {
      isFetchingAmpsInWishlist: true
    };

    case types.RECEIVE_AMPS_IN_WISHLIST:
    // const newAmpsInWishlistSlice = {
    //   isFetchingAmpsInWishlist: false,
    //   ampsInWishlist: action.json,
    // };
    // newState = Object.assign({}, state, newAmpsInWishlistSlice);
    // console.log(newState);
    // return newState;
    return action.json;

    default:
    return state
  }
}

export default ampWishlistReducer;
