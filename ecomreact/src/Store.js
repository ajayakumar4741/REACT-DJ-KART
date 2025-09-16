//import {combineReducers,applyMiddleware} from 'redux' 
import { configureStore } from '@reduxjs/toolkit';
//import {thunk} from 'redux-thunk'
//import {composeWithDevTools} from '@redux-devtools/extension'
import { productsListReducers,productDetailsReducers } from './reducers/ProductReducers';
import { userLoginReducer,userRegisterReducer } from './reducers/userReducers';
import { cartReducer } from './reducers/cartReducers';
const cartItemsFromStorage = localStorage.getItem('cartItems')?
JSON.parse(localStorage.getItem('cartItems')): []

const store = configureStore({
  reducer: {
    productsList: productsListReducers,
    productDetails: productDetailsReducers,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    cart: cartReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(), // thunk is included by default
  preloadedState: {
    cart:{cartItems:cartItemsFromStorage}
  }, 
  devTools: true, 
});



export default store;

