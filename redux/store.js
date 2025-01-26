import { configureStore } from '@reduxjs/toolkit';
import { combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {getProductsReducer, getProductDetailsReducer} from './reducers/productReducer';
import {cartReducer} from './reducers/cartReducer';// You'll need to create this

const reducer = combineReducers({
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
  cart: cartReducer,
});
const middleware = [thunk];
export const store = configureStore({
  reducer: reducer

});