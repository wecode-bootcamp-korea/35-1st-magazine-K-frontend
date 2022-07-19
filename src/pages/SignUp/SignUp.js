import React from 'react';
import './SignUp.scss';

const SignUp = () => {
  return (
    <div className="signUPageWrapper">
      <div className="signUPBox">
        <p className="signUpItem">아이디*</p>
        <input className="signUpItem" />
        <p className="signUpItem">비밀번호*</p>
        <input className="signUpItem" />
        <p className="signUpItem">비밀번호 확인*</p>
        <input className="signUpItem" />
        <p className="signUpItem">이름*</p>
        <input className="signUpItem" />
        <p className="signUpItem">휴대전화</p>
        <input type="tel" className="signUpItem" />
        <p className="signUpItem">이메일*</p>
        <input type="email" className="signUpItem" />
        <p className="serviceAgree">서비스 이용 동의</p>
        <div className="inputWrapper agreeAll">
          <label>
            <input type="checkbox" />
            이용약관에 모두 동의합니다.(선택 정보 포함)
          </label>
        </div>
        <div className="inputWrapper">
          <label>
            <input type="checkbox" />
            [필수] <span>이용약관</span>에 동의합니다.
          </label>
        </div>
        <div className="inputWrapper">
          <label>
            <input type="checkbox" />
            [필수] <span>개인정보 수집 및 이용</span>에 동의합니다.
          </label>
        </div>
        <button>가입하기</button>
      </div>
    </div>
  );
};

export default SignUp;
