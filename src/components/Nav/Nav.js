import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Cart from './Cart';
import PopularSearch from './PopularSearch';
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
        <>
          <form
            className="searchModalContainer"
            onSubmit={e => {
              const searchValue = e.target.keyword.value;
              // fetch(`http://10.58.4.28:8000/search?keyword=${searchValue}`)
              //   .then(res => res.json())
              //   .then(res => {
              //     if (res.message === 'SUCCESS') {
              navigate(`/Search?keyword=${searchValue}`);
              //   }
              // });
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
          <div className="recentSearchesContainer">
            <div className="title">인기 검색어</div>
            {POPULAR_SEARCHES.map(search => {
              return <PopularSearch key={search.id} search={search} />;
            })}
          </div>
        </>
      )}
      <Cart toggleCart={toggleCart} isClickedCart={isClickedCart} />
    </div>
  );
};

export default Nav;

const POPULAR_SEARCHES = [
  {
    id: 0,
    title: 'LEMAIRE',
  },
  {
    id: 1,
    title: 'BLUE BOTTLE COFFEE',
  },
  {
    id: 2,
    title: 'MUJI',
  },
  {
    id: 3,
    title: 'ASTIER DE VILLATTE',
  },
  {
    id: 4,
    title: `PATAGONIA`,
  },
];
