import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  const navigate = useNavigate();

  return (
    <nav className="nav">
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
        <div className="searchMenu">Search</div>
        <div
          className="loginMenu"
          onClick={() => {
            navigate('/Login');
          }}
        >
          Login
        </div>
        <div className="cartMenu">Cart[0]</div>
      </div>
    </nav>
  );
};

export default Nav;
