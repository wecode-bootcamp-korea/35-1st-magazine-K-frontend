import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Nav.scss';

const Login = ({ isLogin }) => {
  const navigate = useNavigate();
  return (
    <div
      className="loginMenu"
      onClick={() => {
        isLogin ? navigate('/Login') : navigate('/MyPage');
      }}
    >
      {isLogin ? 'Login' : 'My Page'}
    </div>
  );
};

const Nav = () => {
  const navigate = useNavigate();
  const [isLogin] = useState(false);

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
        <Login isLogin={isLogin} />
        <div className="cartMenu">Cart[0]</div>
      </div>
    </nav>
  );
};

export default Nav;
