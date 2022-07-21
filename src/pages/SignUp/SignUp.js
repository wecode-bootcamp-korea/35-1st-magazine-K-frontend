import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUpInputData } from './signUpInputData';
import './SignUp.scss';

const SignUp = ({ props }) => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    idValue: '',
    passwordValue: '',
    rePasswordValue: '',
    name: '',
    phoneNumber: '',
    email: '',
    checkAll: '',
  });

  // const [warningText, setWarningText] = useState('idWarningMessageAtive');

  const handleChangestate = e => {
    const { name, value } = e.target;

    setInputValue({
      ...inputValue,
      [name]: value,
    });
    // if (inputValue.idValue.length === 0 || !testId.test(inputValue.idValue)) {
    //   setWarningText('idWarningMessageNoneAtive');
    // } else {
    //   setWarningText('idWarningMessageAtive');
    // }
  };

  const testPhoneNumber = /^\d+$/;
  const testId = /^[a-z0-9]{4,16}$/;
  const testPassword = /[/?.,;:|*~`!^-_[\]+<>@#$%&='")(}{]/gi;

  const handleChangeCheckstate = e => {
    const { name } = e.target;
    const { checked } = e.currentTarget;

    //console.log(e.currentTarget.checked);true false
    if (checked) {
      setInputValue({
        ...inputValue,
        [name]: checked,
      });
    } else {
      setInputValue({
        ...inputValue,
        [name]: checked,
      });
    }
  };
  //console.log(inputValue.passwordValue);

  const testValue = () => {
    if (inputValue.idValue.length === 0 || !testId.test(inputValue.idValue)) {
      alert('아이디 항목은 필수 입력값입니다.');
      return false;
    } else if (!testPassword.test(inputValue.passwordValue)) {
      alert('패스워드 항목은 필수 입력값입니다.');
      return false;
    } else if (
      inputValue.passwordValue.length < 8 ||
      inputValue.passwordValue.length > 16
    ) {
      alert(
        '대소문자/숫자/특수문자중3가지 이상 조합,8자~16자 필수 공백 불가능'
      );
      return false;
    } else if (
      inputValue.rePasswordValue.length !== inputValue.passwordValue.length
    ) {
      alert('패스워드가 다릅니다.');
      return false;
    } else if (inputValue.name.length === 0) {
      alert('이름 항목은 필수 입력값입니다.');
      return false;
    } else if (
      inputValue.phoneNumber.length === 0 ||
      !testPhoneNumber.test(inputValue.phoneNumber)
    ) {
      alert('휴대전화 항목은 필수 입력값입니다.');
      return false;
    } else if (inputValue.email.indexOf('@') === -1) {
      alert('이메일 항목은 필수 입력값입니다.');
      return false;
    } else if (inputValue.checkAll !== true) {
      alert('체크 항목은 필수 입력값입니다.');
      return false;
    }
    return true;
  };

  const goToMain = () => {
    if (testValue()) {
      fetch('http://10.58.6.169:8000/user/signup', {
        method: 'POST',
        body: JSON.stringify({
          user_name: inputValue.idValue,
          password: inputValue.passwordValue,
          name: inputValue.name,
          phone_number: inputValue.phoneNumber,
          email: inputValue.email,
        }),
      })
        .then(response => response.json())
        .then(result => {
          if (result.ACCESS_TOKEN) {
            localStorage.setItem('login-token', result.ACCESS_TOKEN);
            alert('회원가입성공');
            navigate('/Login');
          }
        });
    } else {
      return null;
    }
    //navigate('/Login');
  };

  // console.log(inputValue.idValue);
  // const inputKey = [
  //   {
  //     className: 'signUpItem',
  //     name: 'idValue',
  //     value: inputValue.idValue,
  //     onchange: handleChangestate,
  //   },
  // ];
  //console.log(signUpInputData);
  return (
    <div className="signUPageWrapper">
      <div className="signUPBox">
        {signUpInputData.map(props => (
          <div key={props.id}>
            <p className="signUpItem">
              {props.text}
              <span
                className={
                  inputValue.idValue.length > 0
                    ? props.noneWarningClassName
                    : props.warningClassName
                }
              >
                {props.warningMessage}
              </span>
            </p>
            <input
              className="signUpItem"
              name={props.name}
              onChange={handleChangestate}
            />
          </div>
        ))}
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
// if (inputValue.idValue.length === 0 || !testId.test(inputValue.idValue)) {
//   setWarningText('idWarningMessageNoneAtive');
// } else {
//   setWarningText('idWarningMessageAtive');
// }
