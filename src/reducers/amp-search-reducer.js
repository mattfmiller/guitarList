import constants from './../constants'
const { initialState, types } = constants

const ampSearchReducer = (state = initialState.ampsReturnedFromSearch, action) => {
  switch (action.type) {

    case types.REQUEST_AMPS_BY_SEARCH:
    return state;

    case types.RECEIVE_AMPS_BY_SEARCH:
    if (action.json.message) {
      return state;
    } else {
      return action.json;
    }

    default:
    return state;
  }
}

export default ampSearchReducer;
