import { createAction } from '@reduxjs/toolkit';

const fetchPizzasRequest = createAction('pizzas/fetchPizzasRequest');
const fetchPizzasSuccess = createAction('pizzas/fetchPizzasSuccess');
const fetchPizzasError = createAction('pizzas/fetchPizzasError');

const changeCategory = createAction('pizzas/changeCategory');

const pizzasActions = {
  fetchPizzasRequest,
  fetchPizzasSuccess,
  fetchPizzasError,
  changeCategory,
};

export default pizzasActions;
