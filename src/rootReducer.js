import {combineReducers} from '@reduxjs/toolkit';
import navigationReducer from './features/navigationSlice';
import colorsReducer from './features/colorsSlice';
import goodsReducer from './features/goodsSlice';
import productReducer from './features/productSlice';
import favoritesReducer from './features/favoritesSlice';
import cartReducer from './features/cartSlice';
import searchReducer from './features/searchSlice';
import serverStatusReducer from './features/serverStatusSlice';

export const rootReducer = combineReducers({
  navigation: navigationReducer,
  colors: colorsReducer,
  goods: goodsReducer,
  product: productReducer,
  favorites: favoritesReducer,
  cart: cartReducer,
  search: searchReducer,
  serverStatus: serverStatusReducer,
});
