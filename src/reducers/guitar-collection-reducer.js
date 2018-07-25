import constants from './../constants'
const { initialState, types } = constants

const guitarCollectionReducer = (state = initialState.guitarsInCollection, action) => {
  let newState;
  switch (action.type) {

    case types.REQUEST_GUITARS_IN_COLLECTION:
    // const newStateSliceEntry = {
    //   isFetchingGuitarsInCollection: true
    // };
    // newState = Object.assign({}, state, newStateSliceEntry);
    // return newState;
    return state;

    case types.RECEIVE_GUITARS_IN_COLLECTION:
    if (action.json.message) {
      return state;
    } else {
      return action.json;
    }
    // const newGuitarsInCollectionSlice = {
    //   isFetchingGuitarsInCollection: false,
    //   action.json
    // };
    // newState = Object.assign({}, state, newGuitarsInCollectionSlice);
    // console.log(newState);
    // return newState;

    default:
    return state;
  }
}

export default guitarCollectionReducer;
