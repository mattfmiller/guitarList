import constants from './../constants'
const { initialState, types } = constants

const ampWishlistReducer = (state = initialState.ampsInWishlist, action) => {
  let newState;
  switch (action.type) {

    case types.REQUEST_AMPS_IN_WISHLIST:
    return state;

    case types.RECEIVE_AMPS_IN_WISHLIST:
    if (action.json.message) {
      return state;
    } else {
      return action.json;
    }

    default:
    return state
  }
}

export default ampWishlistReducer;
