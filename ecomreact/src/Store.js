//import {combineReducers,applyMiddleware} from 'redux' 
import { configureStore } from '@reduxjs/toolkit';
//import {thunk} from 'redux-thunk'
//import {composeWithDevTools} from '@redux-devtools/extension'
import { productsListReducers,productDetailsReducers } from './reducers/ProductReducers';

const store = configureStore({
  reducer: {
    productsList: productsListReducers,
    productDetails: productDetailsReducers
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(), // thunk is included by default
  preloadedState: {}, // optional, use if you have initial state
  devTools: true, // optional, enabled by default
});

export default store;

