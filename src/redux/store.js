import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import pizzasReducer from './pizzas/pizzas-reducer';
import cartReducer from './cart/cart-reducer';

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: {
    pizzas: pizzasReducer,
    cart: cartReducer,
  },
  middleware,
});

export default store;
