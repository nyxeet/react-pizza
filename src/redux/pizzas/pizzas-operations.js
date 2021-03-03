import axios from 'axios';

import actions from './pizzas-actions';

axios.defaults.baseURL = 'http://localhost:4040';

const fetchPizzas = () => dispatch => {
  dispatch(actions.fetchPizzasRequest());
  axios
    .get('/pizzas')
    .then(({ data }) => dispatch(actions.fetchPizzasSuccess(data)))
    .catch(error => console.log(error));
};

const pizzasOperations = {
  fetchPizzas,
};

export default pizzasOperations;
