import constants from './../constants'
const { initialState, types } = constants

const pedalCollectionReducer = (state = initialState.pedalsInCollection, action) => {
  let newState;
  switch (action.type) {

    case types.REQUEST_PEDALS_IN_COLLECTION:
    // const newStateSliceEntry = {
    //   isFetchingPedalsInCollection: true
    // };
    // newState = Object.assign({}, state, newStateSliceEntry);
    // return newState;
    return state;

    case types.RECEIVE_PEDALS_IN_COLLECTION:
    // const newPedalsInCollectionSlice = {
    //   isFetchingPedalsInCollection: false,
    //   action.json
    // };
    // newState = Object.assign({}, state, newPedalsInCollectionSlice);
    // console.log(newState);
    // return newState;
    return action.json;

    default:
    return state
  }
}

export default pedalCollectionReducer;
