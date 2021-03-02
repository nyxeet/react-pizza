import React, { useState } from 'react';
import './Categories.scss';

export default function Categories({ items }) {
  const [isActiveItem, setIsActiveItem] = useState('');
  const onClick = item => {
    setIsActiveItem(item);
  };
  return (
    <div className="list">
      {items.map(item => (
        <button
          key={item}
          onClick={() => onClick(item)}
          className={isActiveItem === item ? 'active-item' : 'item'}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
