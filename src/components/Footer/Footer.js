import React from 'react';
import './Footer.scss';

function Footer() {
  return (
    <div className="footerContainer">
      <div className="footerMain">
        <div className="footerLogo">K</div>
        <div className="footerMenu">
          <ul className="naviList">
            <li className="naviTitle">ABOUT US</li>
            <li className="naviItem">Company</li>
            <li className="naviItem">Contact</li>
            <li className="naviItem">Media & Service</li>
            <li className="naviItem">Partnership</li>
            <li className="naviItem">Stockists</li>
          </ul>
          <ul className="naviList">
            <li className="naviTitle">CUSTOMER SERVICE</li>
            <li className="naviItem">Inquiry</li>
            <li className="naviItem">FAQ</li>
            <li className="naviItem">Notice</li>
          </ul>
          <ul className="naviList">
            <li className="naviTitle">SNS</li>
            <li className="naviItem">Instagram</li>
            <li className="naviItem">Facebook</li>
            <li className="naviItem">Youtube</li>
          </ul>
          <ul className="naviList">
            <li className="naviTitle">FOLLOW US</li>
            <li className="naviItem">K Cast</li>
            <li className="naviItem">K Playlist</li>
            <li className="naviItem">Subscribe</li>
          </ul>
        </div>
      </div>
      <ul className="footerSubInfo">
        <li className="company">© Megazine K Company</li>
        <li>주소: 서울시 강남구 테헤란로 427 위워크</li>
        <li>회사명: 위코드</li>
        <li>대표자: Megazine K</li>
        <li>사업자등록번호: 123-45-7689</li>
        <li>통신판매업 신고번호: 제1111-서울용산-111호</li>
        <li>개인정보처리방침</li>
        <li>이용약관</li>
        <li>site by Megazine K</li>
      </ul>
    </div>
  );
}

export default Footer;
