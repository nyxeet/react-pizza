import { createSelector } from '@reduxjs/toolkit';

const getAllPizzas = state => state.pizzas.items;
const getCategory = state => state.pizzas.category;

const getFilteredPizzas = createSelector(
  [getAllPizzas, getCategory],
  (pizzas, filter) => {
    return pizzas.filter(pizza => pizza.category === filter);
  },
);

const pizzasSelectors = {
  getAllPizzas,
  getCategory,
  getFilteredPizzas,
};

export default pizzasSelectors;
