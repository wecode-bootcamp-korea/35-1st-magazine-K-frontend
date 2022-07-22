import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Nav.scss';

const Nav = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const movePage = targetPg => {
    navigate(targetPg);
  };
  const [isClicked, setIsClicked] = useState(false);
  const toggleSearch = () => {
    isClicked ? setIsClicked(false) : setIsClicked(true);
  };

  return (
    <div className="nav">
      <nav className="navigationContainer">
        <div className="firstMenuContainer">
          <img
            className="magazinIcon"
            onClick={() => {
              movePage('/');
            }}
            src="/images/k.png"
            alt="kIcon"
          />
          <div
            className="magazineMenu"
            onClick={() => {
              movePage('/');
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
              token ? movePage('/MyPage') : movePage('/Login');
            }}
          >
            {token ? 'My Page' : 'Login'}
          </div>{' '}
          <div className="menus">Cart[0]</div>
        </div>
      </nav>
      <form className="searchModalContainer" onsubmit={() => {}}>
        {isClicked && (
          <input
            className="searchBar"
            type="text"
            placeholder="Search Brand, City, Food..."
            autoFocus
          />
        )}
      </form>
    </div>
  );
};

export default Nav;
