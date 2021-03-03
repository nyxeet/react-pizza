import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './cart-actions';

const items = createReducer([], {
  [actions.addPizza]: (state, { payload }) => [...state, payload],
});

export default combineReducers({
  items,
});
