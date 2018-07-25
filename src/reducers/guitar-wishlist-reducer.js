import constants from './../constants'
const { initialState, types } = constants

const guitarWishlistReducer = (state = initialState.guitarsInWishlist, action) => {
  let newState;
  switch (action.type) {

    case types.REQUEST_GUITARS_IN_WISHLIST:
    // const newStateSliceEntry = {
    //   isFetchingGuitarsInWishlist: true
    // };
    // newState = Object.assign({}, state, newStateSliceEntry);
    // return newState;
    return {
      isFetchingGuitarsInWishlist: true
    };

    case types.RECEIVE_GUITARS_IN_WISHLIST:
    // const newGuitarsInWishlistSlice = {
    //   isFetchingGuitarsInWishlist: false,
    //   guitarsInWishlist: action.json,
    // };
    // newState = Object.assign({}, state, newGuitarsInWishlistSlice);
    // console.log(newState);
    // return newState;
    return action.json;

    default:
    return state
  }
}

export default guitarWishlistReducer;
