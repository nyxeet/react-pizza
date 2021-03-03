import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Categories.scss';
import pizzasActions from '../../redux/pizzas/pizzas-actions';

export default function Categories({ items }) {
  const dispatch = useDispatch();
  const [isActiveItem, setIsActiveItem] = useState(null);
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
