import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Nav.scss';

const LoginTap = ({ isLogin }) => {
  const navigate = useNavigate();
  return (
    <div
      className="Menu"
      onClick={() => {
        isLogin ? navigate('/MyPage') : navigate('/Login');
      }}
    >
      {isLogin ? 'My Page' : 'Login'}
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
        <div className="Menu">Search</div>
        <LoginTap isLogin={isLogin} />
        <div className="Menu">Cart[0]</div>
      </div>
    </nav>
  );
};

export default Nav;
