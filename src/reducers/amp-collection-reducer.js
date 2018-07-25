import constants from './../constants'
const { initialState, types } = constants

const ampCollectionReducer = (state = initialState.ampsInCollection, action) => {
  let newState;
  switch (action.type) {

    case types.REQUEST_AMPS_IN_COLLECTION:
    // const newStateSliceEntry = {
    //   isFetchingAmpsInCollection: true
    // };
    // newState = Object.assign({}, state, newStateSliceEntry);
    // return newState;
    return state;

    case types.RECEIVE_AMPS_IN_COLLECTION:
    // const newAmpsInCollectionSlice = {
    //   isFetchingAmpsInCollection: false,
    //   action.json
    // };
    // newState = Object.assign({}, state, newAmpsInCollectionSlice);
    // console.log(newState);
    // return newState;
    return action.json;

    default:
    return state
  }
}

export default ampCollectionReducer;
