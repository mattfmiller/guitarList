import * as actions from './../../src/actions';

describe('guitarCollectionReducer', () => {

    it('Should update state when API guitars in collection are being requested.', () => {
      const action = actions.requestGuitarsInCollection();
      const newStateEntry = {
        isFetchingGuitarsInCollection: true
      };
      expect(guitarCollectionReducer(initialState.isFetchingGuitarsInCollection, action))
      .toEqual(newStateEntry);
    });

  });
