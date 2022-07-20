import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.scss';

const SignUp = () => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    idValue: '',
    passwordValue: '',
    rePasswordValue: '',
    name: '',
    phoneNumber: '',
    email: '',
    checkAll: '',
  });

  const handleChangestate = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const testPhoneNumber = /^\d+$/;
  const testId = /^[a-z0-9]{4,16}$/;
  const testPassword = /[/?.,;:|*~`!^-_[\]+<>@#$%&='")(}{]/gi;

  const handleChangeCheckstate = e => {
    //console.log(e.currentTarget.checked);true false
    if (e.currentTarget.checked) {
      setState({
        ...state,
        [e.target.name]: e.currentTarget.checked,
      });
      console.log(!testPassword.test(state.passwordValue));
    } else {
      setState({
        ...state,
        [e.target.name]: e.currentTarget.checked,
      });
    }
  };

  const goToMain = () => {
    if (state.idValue.length === 0 || !testId.test(state.idValue)) {
      return alert('아이디 항목은 필수 입력값입니다.');
    } else if (!testPassword.test(state.passwordValue)) {
      return alert('패스워드 항목은 필수 입력값입니다.');
    } else if (
      state.passwordValue.length < 8 ||
      state.passwordValue.length > 16
    ) {
      return alert(
        '대소문자/숫자/특수문자중3가지 이상 조합,8자~16자 필수 공백 불가능'
      );
    } else if (state.rePasswordValue.length !== state.passwordValue.length) {
      return alert('패스워드가 다릅니다.');
    } else if (state.name.length === 0) {
      return alert('이름 항목은 필수 입력값입니다.');
    } else if (
      state.phoneNumber.length === 0 ||
      !testPhoneNumber.test(state.phoneNumber)
    ) {
      return alert('휴대전화 항목은 필수 입력값입니다.');
    } else if (state.email.indexOf('@') === -1) {
      return alert('이메일 항목은 필수 입력값입니다.');
    } else if (state.checkAll !== true) {
      return alert('체크 항목은 필수 입력값입니다.');
    }
    fetch('http://10.58.6.169:8000/user/signup', {
      method: 'POST',
      body: JSON.stringify({
        user_name: state.idValue,
        password: state.passwordValue,
        name: state.name,
        phone_number: state.phoneNumber,
        email: state.email,
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
    <div className="signUPageWrapper">
      <div className="signUPBox">
        <p className="signUpItem">아이디*</p>
        <p>아이디는 영문소문자와 숫자를 이용하여 4~16자로 입력해주세요.</p>
        <input
          className="signUpItem"
          name="idValue"
          value={state.idValue}
          onChange={handleChangestate}
        />
        <p className="signUpItem">비밀번호*</p>
        <p>
          -대소문자/숫자/특수문자중3가지 이상 조합,8자~16자-입력 가능 특수문자
          ~`!@#$%^()/-공백 불가능
        </p>
        <input
          className="signUpItem"
          name="passwordValue"
          type="password"
          value={state.passwordValue}
          onChange={handleChangestate}
        />
        <p className="signUpItem">비밀번호 확인*</p>
        <input
          className="signUpItem"
          name="rePasswordValue"
          type="password"
          value={state.rePasswordValue}
          onChange={handleChangestate}
        />
        <p className="signUpItem">이름*</p>
        <input
          className="signUpItem"
          name="name"
          value={state.name}
          onChange={handleChangestate}
        />
        <p className="signUpItem">휴대전화</p>
        <input
          type="tel"
          className="signUpItem"
          name="phoneNumber"
          value={state.phoneNumber}
          onChange={handleChangestate}
        />
        <p className="signUpItem">이메일*</p>
        <input
          type="email"
          className="signUpItem"
          name="email"
          value={state.email}
          onChange={handleChangestate}
        />
        <p className="serviceAgree">서비스 이용 동의</p>
        <div className="inputWrapper agreeAll">
          <label>
            <input
              type="checkbox"
              name="checkAll"
              onChange={handleChangeCheckstate}
            />
            이용약관에 모두 동의합니다.
          </label>
        </div>
        <button onClick={goToMain}>가입하기</button>
      </div>
    </div>
  );
};

export default SignUp;
