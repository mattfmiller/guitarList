import constants from './../constants'
const { initialState, types } = constants

const guitarCollectionReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {

    case types.REQUEST_GUITARS_IN_COLLECTION:
    const newStateSliceEntry = {
      isFetchingGuitarsInCollection: true
    };
    newState = Object.assign({}, state, newStateSliceEntry);
    return newState;

    case types.RECEIVE_GUITARS_IN_COLLECTION:
    const newGuitarsInCollectionSlice = {
      isFetchingGuitarsInCollection: false,
      guitarsInCollection: action.json,
    }
    newState = Object.assign({}, state, newGuitarsInCollectionSlice);
    return newState;

    default:
    return state
  }
}

export default guitarCollectionReducer;
