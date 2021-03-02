import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import logoSvg from '../../assets/img/logo.svg';
import cartSvg from '../../assets/img/cart.svg';

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="link">
        <img src={logoSvg} className="logo" />
        <div>
          <h1 className="title">React pizza</h1>
          <p className="span">самая вкусная пицца во вселенной</p>
        </div>
      </Link>
      <button type="button" className="button">
        <span>520 &#8381;</span>
        <div className="delimiter"></div>
        <img src={cartSvg} className="cart-svg" />
        <span>3</span>
      </button>
    </header>
  );
}
