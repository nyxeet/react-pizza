import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import pizzasOperations from '../../redux/pizzas/pizzas-operations';
import pizzasSelectors from '../../redux/pizzas/pizzas-selectors';
import './PizzasList.scss';

const PizzasList = () => {
  const filteredItems = useSelector(pizzasSelectors.getFilteredPizzas);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pizzasOperations.fetchPizzas());
  }, []);

  return (
    <ul className="pizza-list">
      {filteredItems.map(item => (
        <li key={item.id} className="pizza-item">
          <img src={item.imageUrl} className="pizza-img" />
          <h1>{item.name}</h1>
        </li>
      ))}
    </ul>
  );
};

export default PizzasList;
