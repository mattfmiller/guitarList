import constants from './../constants'
const { initialState, types } = constants

const guitarSearchReducer = (state = initialState.guitarsReturnedFromSearch, action) => {
  switch (action.type) {

    case types.REQUEST_GUITARS_BY_SEARCH:
    return state;

    case types.RECEIVE_GUITARS_BY_SEARCH:
    if (action.json.message) {
      return state;
    } else {
      return action.json;
    }

    default:
    return state;
  }
}

export default guitarSearchReducer;
