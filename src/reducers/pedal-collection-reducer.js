import constants from './../constants'
const { initialState, types } = constants

const pedalCollectionReducer = (state = initialState.pedalsInCollection, action) => {
  let newState;
  switch (action.type) {

    case types.REQUEST_PEDALS_IN_COLLECTION:
    return state;

    case types.RECEIVE_PEDALS_IN_COLLECTION:
    if (action.json.message) {
      return state;
    } else {
      return action.json;
    }

    default:
    return state;
  }
}

export default pedalCollectionReducer;
