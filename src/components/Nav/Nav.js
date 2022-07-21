import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Nav.scss';

const LoginTap = ({ token, movePage }) => {
  return (
    <div
      className="Menu"
      onClick={() => {
        token ? movePage('/MyPage') : movePage('/Login');
      }}
    >
      {token ? 'My Page' : 'Login'}
    </div>
  );
};

const Nav = () => {
  const navigate = useNavigate();
  let token = localStorage.getItem('token');
  const movePage = targetPg => {
    navigate(`${targetPg}`);
  };

  return (
    <nav className="nav">
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
        <div className="Menu">Search</div>
        <LoginTap token={token} movePage={movePage} />
        <div className="Menu">Cart[0]</div>
      </div>
    </nav>
  );
};

export default Nav;
