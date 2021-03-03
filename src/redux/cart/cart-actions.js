import { createAction } from '@reduxjs/toolkit';

const addPizza = createAction('pizzas/addPizza');

const pizzasActions = {
  addPizza,
};

export default pizzasActions;
