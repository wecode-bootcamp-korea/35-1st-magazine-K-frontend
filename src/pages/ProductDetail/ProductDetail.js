import React from 'react';
import './ProductDetail.scss';

const ProductDetail = () => {
  return (
    <div className="prdDetailPage">
      <div className="prdDetailContainer">
        <div className="prdDetailLeft">
          <div className="prdCategoryBox">
            <h4>MAGAZINE B</h4>
            <h4>ISSUE NO.89</h4>
          </div>
          <h1>ARC'TERYX</h1>
          <span className="prdPrice">₩18,000</span>
          <div className="prdCount">
            <span>-</span>
            <span>1</span>
            <span>+</span>
          </div>
          <div className="prdMetaInfo">
            <span>
              <span>LANGUAGE</span>
              <span>KOREAN</span>
            </span>
            <span>
              <span>SIZE</span>
              <span>170x240 mm</span>
            </span>
            <span>
              <span>PAGES</span>
              <span>160</span>
            </span>
            <span>
              <span>DATE</span>
              <span>2021. 11. 09</span>
            </span>
            <span>
              <span>ISBN</span>
              <span>979-11-6036-138-4</span>
            </span>
          </div>
        </div>
        <div className="prdDetailRight">
          <button>₩18,000 ADD TO CART</button>
          <div className="prdDescription">
            <p>DESCRIPTION</p>
            <p>
              아크테릭스는 1989년 등반가 데이브 레인이 자신의 경험을 토대로 더
              나은 등산 장비를 만들기 위해 캐나다 벤쿠버에서 설립한 '록
              솔리드'를 전신으로 시작합니다. 1991년 시조새의 학명
              '아르카이옵테릭스 리토그라피카'를 모티브로 지은 브랜드명은 제조를
              기반으로 두며 진화적 접근법을 취하는 그들의 태도를 담고 있습니다.
              등반 시 안전벨트 역할을 하는 기존 하네스에 인체 공학 시스템을
              적용해 충격하중을 고르게 지지하는 베이퍼 하네스를 선보인 이래,
              아크테릭스는 가벼운 동시에 방수와 방풍 효과를 높인 알파 SV 재킷
              같은 혁신적 제품을 연달아 공개하며 아웃도어업계의 기술 표준을
              높이고 있습니다. 또한 베일런스, 시스템_A 등 디자인을 강화한 도심형
              테크웨어 라인을 전개해 유명 셀러브리티는 물론, 서브컬처를 향유하는
              젊은 세대에도 큰 지지를 얻고 있습니다.
            </p>
          </div>
        </div>
      </div>
      <div className="prdImg">
        <img src="/images/productdetail/89.jpg" alt="ARC" />
      </div>
    </div>
  );
};

export default ProductDetail;
