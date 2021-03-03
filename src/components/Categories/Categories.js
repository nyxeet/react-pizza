import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './Categories.scss';
import pizzasActions from '../../redux/pizzas/pizzas-actions';

export default function Categories({ items }) {
  const dispatch = useDispatch();
  const [isActiveItem, setIsActiveItem] = useState(0);
  useEffect(() => {
    dispatch(pizzasActions.changeCategory(0));
  }, [dispatch]);

  const onClick = index => {
    setIsActiveItem(index);
    dispatch(pizzasActions.changeCategory(index));
  };
  return (
    <>
      <div className="list">
        {items.map((item, index) => (
          <button
            key={item}
            onClick={() => onClick(index)}
            className={isActiveItem === index ? 'active-item' : 'item'}
          >
            {item}
          </button>
        ))}
      </div>
      <h2>Все пиццы</h2>
    </>
  );
}
