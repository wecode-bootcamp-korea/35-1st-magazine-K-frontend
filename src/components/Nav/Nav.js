import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Cart from './Cart';
import PopularSearch from './PopularSearch';
import './Nav.scss';

const Nav = ({ modalState, setModalState }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem('login-token');
  const [isClickedSearch, setIsClickedSearch] = useState(false);

  const toggleSearch = () => {
    isClickedSearch ? setIsClickedSearch(false) : setIsClickedSearch(true);
  };
  const toggleCart = () => {
    modalState ? setModalState(false) : setModalState(true);
  };

  const moveToSearch = e => {
    const searchValue = e.target.keyword.value;
    navigate(`/Search?keyword=${searchValue}`);
  };

  return (
    <div className="nav">
      <nav className="navigationContainer">
        <div className="firstMenuContainer">
          <img
            className="magazinIcon"
            onClick={() => {
              navigate('/');
              window.location.reload();
            }}
            src="/images/k.png"
            alt="kIcon"
          />
          <div
            className="magazineMenu"
            onClick={() => {
              navigate('/ProductList');
              window.location.reload();
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
              window.location.reload();
            }}
          >
            {token ? 'My Page' : 'Login'}
          </div>
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
              moveToSearch(e);
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
      <Cart toggleCart={toggleCart} modalState={modalState} />
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
