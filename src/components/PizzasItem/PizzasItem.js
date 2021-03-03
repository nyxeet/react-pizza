import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cartActions from '../../redux/cart/cart-actions';
import './PizzasItem.scss';

const PizzasItem = ({ item }) => {
  const dispatch = useDispatch();
  const typeNames = ['тонкое', 'традиционное'];
  const sizes = ['26 см.', '30 см.', '40 см.'];

  const [type, setType] = useState('тонкое');
  const [size, setSize] = useState('26 см.');
  const [inCart, setInCart] = useState(null);

  const addToCart = useCallback(
    (...data) => {
      setInCart(prev => prev + 1);
      dispatch(cartActions.addPizza(data));
    },
    [dispatch],
  );
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
      <div className="price-section">
        <h1 className="pizza-price">от {item.price} &#8381;</h1>
        <button
          className="pizza-button"
          type="button"
          onClick={() => addToCart(item.name, type, size)}
        >
          Добавить {inCart}
        </button>
      </div>
    </li>
  );
};

export default PizzasItem;
