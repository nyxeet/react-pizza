import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import pizzasReducer from './pizzas/pizzas-reducer';

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: {
    pizzas: pizzasReducer,
  },
  middleware,
});

export default store;
