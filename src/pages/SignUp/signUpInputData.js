//import React from 'react';
//import SignUp from './SignUp';

export const signUpInputData = [
  {
    id: 1,
    className: 'signUpItem',
    name: 'idValue',
    text: '아이디 * ',
    value: 'idValue',
    warningClassName: 'idWarningMessageAtive',
    noneWarningClassName: 'WarningMessageNoneAtive',
    warningMessage: '아이디는 영문소문자 또는 숫자 4~16자로 입력해주세요',
  },
  {
    id: 2,
    className: 'signUpItem',
    name: 'passwordValue',
    text: '비밀번호 * ',
    value: 'passwordValue',
    onchange: 'handleChangestate',
    warningClassName: 'passwordWarningMessageAtive',
    noneWarningClassName: 'WarningMessageNoneAtive',
    warningMessage: '대소문자/숫자/특수문자 중 3가지 이상 조합,8자~16자',
  },
  {
    id: 3,
    className: 'signUpItem',
    name: 'rePasswordValue',
    text: '비밀번호 확인 * ',
    value: 'rePasswordValue',
  },
  {
    id: 4,
    className: 'signUpItem',
    name: 'name',
    text: '이름 * ',
    value: 'name',
  },
  {
    id: 5,
    className: 'signUpItem',
    name: 'phoneNumber',
    text: '휴대전화',
    value: 'phoneNumber',
  },
  {
    id: 6,
    className: 'signUpItem',
    name: 'email',
    text: '이메일 * ',
    value: 'email',
  },
];
