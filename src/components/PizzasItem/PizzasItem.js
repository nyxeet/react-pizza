import React, { useState } from 'react';
import './PizzasItem.scss';

const PizzasItem = ({ item }) => {
  const typeNames = ['тонкое', 'традиционное'];
  const sizes = ['26 см.', '30 см.', '40 см.'];

  const [type, setType] = useState('');
  const [size, setSize] = useState('');
  return (
    <li key={item.id} className="pizza-item">
      <img src={item.imageUrl} className="pizza-img" />
      <h2 className="pizza-title">{item.name}</h2>
      <div className="pizza-buttons">
        <ul className="pizza-types">
          {typeNames.map(curType => (
            <li
              key={curType}
              onClick={() => setType(curType)}
              className={curType === type ? 'active-type' : 'type'}
            >
              {curType}
            </li>
          ))}
        </ul>
        <ul className="pizza-types mt">
          {sizes.map(curSize => (
            <li
              key={curSize}
              onClick={() => setSize(curSize)}
              className={curSize === size ? 'active-type' : 'type'}
            >
              {curSize}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default PizzasItem;
