import guitarCollectionReducer from './guitar-collection-reducer';
import guitarWishlistReducer from './guitar-wishlist-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  guitarsInCollection: guitarCollectionReducer,
  guitarsInWishlist: guitarWishlistReducer
});

export default rootReducer;
