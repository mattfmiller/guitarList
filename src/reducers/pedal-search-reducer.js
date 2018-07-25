import constants from './../constants'
const { initialState, types } = constants

const pedalSearchReducer = (state = initialState.pedalsReturnedFromSearch, action) => {
  switch (action.type) {

    case types.REQUEST_PEDALS_BY_SEARCH:
    return state;

    case types.RECEIVE_PEDALS_BY_SEARCH:
    if (action.json.message) {
      return state;
    } else {
      return action.json;
    }

    default:
    return state;
  }
}

export default pedalSearchReducer;
