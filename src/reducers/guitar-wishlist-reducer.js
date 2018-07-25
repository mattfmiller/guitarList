import constants from './../constants'
const { initialState, types } = constants

const guitarWishlistReducer = (state = initialState.guitarsInWishlist, action) => {
  let newState;
  switch (action.type) {

    case types.REQUEST_GUITARS_IN_WISHLIST:
    return state;

    case types.RECEIVE_GUITARS_IN_WISHLIST:
    if (action.json.message) {
      return state;
    } else {
      return action.json;
    }

    default:
    return state
  }
}

export default guitarWishlistReducer;
