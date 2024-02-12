// store.js
import { createStore, applyMiddleware } from 'redux';
import productReducer from './Reducer/index';

const initialState = {
  products: [],
  loading: false,
  error: null,
};

const store = createStore(productReducer, initialState);

export default store;
