import { createSelector } from '@reduxjs/toolkit';

const getAllOrdersLength = state => state.cart.items.length;
const getAllOrders = state => state.cart.items;

const summaryPrice = createSelector([getAllOrders], orders => {
  return orders.reduce((total, order) => order[1] + total, 0);
});

const cartSelectors = {
  getAllOrdersLength,
  getAllOrders,
  summaryPrice,
};

export default cartSelectors;
