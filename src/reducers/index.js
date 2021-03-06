import guitarCollectionReducer from './guitar-collection-reducer';
import guitarWishlistReducer from './guitar-wishlist-reducer';
import ampCollectionReducer from './amp-collection-reducer';
import ampWishlistReducer from './amp-wishlist-reducer';
import pedalCollectionReducer from './pedal-collection-reducer';
import pedalWishlistReducer from './pedal-wishlist-reducer';
import guitarSearchReducer from './guitar-search-reducer';
import ampSearchReducer from './amp-search-reducer';
import pedalSearchReducer from './pedal-search-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  guitarsInCollection: guitarCollectionReducer,
  guitarsInWishlist: guitarWishlistReducer,
  ampsInCollection: ampCollectionReducer,
  ampsInWishlist: ampWishlistReducer,
  pedalsInCollection: pedalCollectionReducer,
  pedalsInWishlist: pedalWishlistReducer,
  guitarsReturnedFromSearch: guitarSearchReducer,
  ampsReturnedFromSearch: ampSearchReducer,
  pedalsReturnedFromSearch: pedalSearchReducer
});

export default rootReducer;
