import React, { useState } from 'react';

export default function Categories({ items }) {
  const [isActiveIndex, setIsActiveIndex] = useState(null);
  const onClick = index => {
    setIsActiveIndex(index);
  };
  return (
    <ul>
      {items.map((item, index) => (
        <li
          key={item}
          onClick={() => onClick(index)}
          className={isActiveIndex === index ? 'active' : ''}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
