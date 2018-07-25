import constants from './../constants'
const { initialState, types } = constants

const ampCollectionReducer = (state = initialState.ampsInCollection, action) => {
  let newState;
  switch (action.type) {

    case types.REQUEST_AMPS_IN_COLLECTION:
    return state;

    case types.RECEIVE_AMPS_IN_COLLECTION:
    if (action.json.message) {
      return state;
    } else {
      return action.json;
    }

    default:
    return state
  }
}

export default ampCollectionReducer;
