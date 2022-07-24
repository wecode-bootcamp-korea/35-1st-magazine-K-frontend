import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Cart from './Cart';
import './Nav.scss';

const Nav = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const [isClickedSearch, setIsClickedSearch] = useState(false);
  const [isClickedCart, setIsClickedCart] = useState(false);

  const toggleSearch = () => {
    isClickedSearch ? setIsClickedSearch(false) : setIsClickedSearch(true);
  };
  const toggleCart = () => {
    isClickedCart ? setIsClickedCart(false) : setIsClickedCart(true);
  };

  return (
    <div className="nav">
      <nav className="navigationContainer">
        <div className="firstMenuContainer">
          <img
            className="magazinIcon"
            onClick={() => {
              navigate('/');
            }}
            src="/images/k.png"
            alt="kIcon"
          />
          <div
            className="magazineMenu"
            onClick={() => {
              navigate('/ProductList');
            }}
          >
            Magazine
          </div>
        </div>
        <div className="secondMenuContainer">
          <div className="menus" onClick={toggleSearch}>
            Search
          </div>
          <div
            className="menus"
            onClick={() => {
              token ? navigate('/MyPage') : navigate('/Login');
            }}
          >
            {token ? 'My Page' : 'Login'}
          </div>{' '}
          <div className="menus" onClick={toggleCart}>
            Cart
          </div>
        </div>
      </nav>
      {isClickedSearch && (
        <form
          className="searchModalContainer"
          onSubmit={e => {
            const keyword = e.target.keyword.value;
            fetch(`keyword=${keyword}`);
            navigate(`/Search?${keyword}`);
          }}
        >
          <input
            className="searchBar"
            type="text"
            name="keyword"
            placeholder="Search Brand, City, Food..."
            autoFocus
          />
        </form>
      )}
      <Cart toggleCart={toggleCart} isClickedCart={isClickedCart} />
    </div>
  );
};

export default Nav;
