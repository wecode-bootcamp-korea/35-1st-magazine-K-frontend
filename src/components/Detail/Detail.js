import React, { useState } from 'react';
import './Detail.scss';

const Detail = ({ prdDetailData }) => {
  const [count, setCount] = useState(1);

  const MinusOne = () => {
    setCount(count - 1);
  };

  const PlusOne = () => {
    setCount(count + 1);
  };

  return (
    <div className="prdDetailPage">
      <div className="prdDetailContainer">
        <div className="prdDetailLeft">
          <div className="prdCategoryBox">
            <h4>{prdDetailData.main_category_name}</h4>
            <h4>ISSUE NO.{prdDetailData.issue_number}</h4>
          </div>
          <h1>{prdDetailData.title}</h1>
          <span className="prdPrice">₩{prdDetailData.price},000</span>
          <div className="prdCount">
            <span onClick={MinusOne}>-</span>
            <span>
              {count < 1
                ? (alert('최소 주문수량은 1개 입니다.'), setCount(1))
                : count}
            </span>
            <span onClick={PlusOne}>+</span>
          </div>
          <div className="prdMetaInfo">
            <span>
              <span>LANGUAGE</span>
              <span>{prdDetailData.language}</span>
            </span>
            <span>
              <span>SIZE</span>
              <span>{prdDetailData.size}</span>
            </span>
            <span>
              <span>PAGES</span>
              <span>{prdDetailData.pages}</span>
            </span>
            <span>
              <span>DATE</span>
              <span>{prdDetailData.date}</span>
            </span>
            <span>
              <span>ISBN</span>
              <span>{prdDetailData.isbn}</span>
            </span>
          </div>
        </div>
        <div className="prdDetailRight">
          <button>₩{prdDetailData.price * count},000 ADD TO CART</button>
          <div className="prdDescription">
            <p>DESCRIPTION</p>
            <p>{prdDetailData.description}</p>
          </div>
        </div>
      </div>
      <div className="prdImg">
        <img src={prdDetailData.detail_img_url} alt="ARC" />
      </div>
    </div>
  );
};

export default Detail;
