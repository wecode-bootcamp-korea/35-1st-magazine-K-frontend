import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    idValue: '',
    passwordValue: '',
  });

  const handleChageInputValue = e => {
    const { name, value } = e.target;

    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const testValue = () => {
    if (inputValue.idValue.length === 0) {
      alert('아이디 항목은 필수 입력값입니다.');
      return false;
    } else if (inputValue.passwordValue.length === 0) {
      alert('패스워드 항목은 필수 입력값입니다.');
      return false;
    }
    return true;
  };

  const goToMain = () => {
    if (testValue()) {
      fetch('http://10.58.4.114:8000/member/login', {
        method: 'POST',
        body: JSON.stringify({
          username: inputValue.idValue,
          password: inputValue.passwordValue,
        }),
      })
        .then(response => response.json())
        .then(result => {
          if (result.AUTHORIZATION) {
            localStorage.setItem('login-token', result.AUTHORIZATION);
            navigate('/');
          } else {
            alert('등록되지않은 회원입니다.');
          }
        });
    } else {
      return null;
    }
  };

  return (
    <div className="loginPageWrapper">
      <div className="loginBox">
        <div>
          <input
            className="input"
            name="idValue"
            placeholder="아이디"
            value={inputValue.idValue}
            onChange={handleChageInputValue}
          />
          {/* 아이디는 영문소문자 와 숫자 4~16자로 입력 */}
        </div>
        <div>
          <input
            className="input"
            name="passwordValue"
            type="password"
            placeholder="패스워드"
            value={inputValue.passwordValue}
            onChange={handleChageInputValue}
          />
          {/* 대소문자/숫자/특수문자 중 3가지 이상 조합, 8자~16자 입력가능특수문자 ~`!@#$%^()_-={}[]|;:<>,.?/ */}
        </div>
        <div>
          <button className="loginButton" onClick={goToMain}>
            로그인
          </button>
        </div>
        <div className="linkButton">
          <button>주문조회</button>
          <button className="borderLeftLine">아이디찾기</button>
          <button className="borderLeftLine">비밀번호찾기</button>
          <Link to="/SignUp">
            <button className="borderLeftLine">회원가입</button>
          </Link>
          {/* <Link to="/main-hyeonmin">Westagram</Link> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
