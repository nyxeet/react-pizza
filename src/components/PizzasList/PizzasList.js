import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import pizzasOperations from '../../redux/pizzas/pizzas-operations';
import pizzasSelectors from '../../redux/pizzas/pizzas-selectors';
import './PizzasList.scss';
import PizzasItem from '../PizzasItem/PizzasItem';

const PizzasList = () => {
  const filteredItems = useSelector(pizzasSelectors.getFilteredPizzas);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pizzasOperations.fetchPizzas());
  }, [dispatch]);

  return (
    <ul className="pizza-list">
      {filteredItems.map(item => (
        <PizzasItem item={item} key={item.id} />
      ))}
    </ul>
  );
};

export default PizzasList;
