import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './pizzas-actions';

const items = createReducer([], {
  [actions.fetchPizzasSuccess]: (_, { payload }) => payload,
});

const category = createReducer('', {
  [actions.changeCategory]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  category,
});
