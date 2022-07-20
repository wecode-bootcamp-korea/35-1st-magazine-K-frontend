import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState({
    idValue: '',
    passwordValue: '',
  });

  const handleChangestate = e => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const goToMain = () => {
    if (value.idValue.length === 0) {
      return alert('아이디 항목은 필수 입력값입니다.');
    } else if (value.passwordValue.length === 0) {
      return alert('패스워드 항목은 필수 입력값입니다.');
    }
    fetch('http://10.58.6.169:8000/user/login', {
      method: 'POST',
      body: JSON.stringify({
        user_name: value.idValue,
        password: value.passwordValue,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.ACCESS_TOKEN) {
          localStorage.setItem('login-token', result.ACCESS_TOKEN);
          //console.log('결과: ', result));
        }
      });
    navigate('/');
  };

  return (
    <div className="loginPageWrapper">
      <div className="loginBox">
        <div>
          <input
            name="idValue"
            placeholder="아이디"
            value={value.idValue}
            onChange={handleChangestate}
          />
          {/* 아이디는 영문소문자 와 숫자 4~16자로 입력 */}
        </div>
        <div>
          <input
            name="passwordValue"
            type="password"
            placeholder="패스워드"
            value={value.passwordValue}
            onChange={handleChangestate}
          />
          {/* 대소문자/숫자/특수문자 중 3가지 이상 조합, 8자~16자 입력가능특수문자 ~`!@#$%^()_-={}[]|;:<>,.?/ */}
        </div>
        <div>
          <button onClick={goToMain}>로그인</button>
        </div>
        <div>
          <button>주문조회</button>
          <button>아이디찾기</button>
          <button>비밀번호찾기</button>
          <Link to="/SignUp">
            <button>회원가입</button>
          </Link>
          {/* <Link to="/main-hyeonmin">Westagram</Link> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
