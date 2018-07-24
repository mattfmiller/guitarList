import constants from './../constants'
const { initialState, types } = constants

const guitarWishlistReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {

    case types.REQUEST_GUITARS_IN_Wishlist:
    const newStateSliceEntry = {
      isFetchingGuitarsInWishlist: true
    };
    console.log("Hey!");
    newState = Object.assign({}, state, newStateSliceEntry);
    return newState;

    case types.RECEIVE_GUITARS_IN_Wishlist:
    const newGuitarsInWishlistSlice = {
      isFetchingGuitarsInWishlist: false,
      guitarsInWishlist: action.json,
    };
    newState = Object.assign({}, state, newGuitarsInWishlistSlice);
    console.log(newState);
    return newState;

    default:
    return state
  }
}

export default guitarWishlistReducer;
