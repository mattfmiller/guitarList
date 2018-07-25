import constants from './../constants'
const { initialState, types } = constants

const pedalWishlistReducer = (state = initialState.pedalsInWishlist, action) => {
  let newState;
  switch (action.type) {

    case types.REQUEST_PEDALS_IN_WISHLIST:
    return state;

    case types.RECEIVE_PEDALS_IN_WISHLIST:
    if (action.json.message) {
      return state;
    } else {
      return action.json;
    }

    default:
    return state
  }
}

export default pedalWishlistReducer;
