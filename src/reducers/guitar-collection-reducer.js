import constants from './../constants'
const { initialState, types } = constants

const guitarCollectionReducer = (state = initialState.guitarsInCollection, action) => {
  let newState;
  switch (action.type) {

    case types.REQUEST_GUITARS_IN_COLLECTION:
    return state;

    case types.RECEIVE_GUITARS_IN_COLLECTION:
    if (action.json.message) {
      return state;
    } else {
      return action.json;
    }

    default:
    return state;
  }
}

export default guitarCollectionReducer;
