import React from 'react';

const Login = () => {
  return (
    <div className="LoginContainer">
      <div>
        <input />
        {/* 아이디는 영문소문자 또는 숫자 4~16자로 입력 */}
      </div>
      <div>
        <input />
        {/* 대소문자/숫자/특수문자 중 3가지 이상 조합, 8자~16자 입력가능특수문자 ~`!@#$%^()_-={}[]|;:<>,.?/ */}
      </div>
      <div>
        <button>로그인</button>
      </div>
      <div>
        <button>주문조회</button>
        <button>아이디찾기</button>
        <button>비밀번호찾기</button>
        <button>회원가입</button>
      </div>
    </div>
  );
};

export default Login;
