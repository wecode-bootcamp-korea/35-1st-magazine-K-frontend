import React from 'react';
import './Detail.scss';

const Detail = ({ prdDetailData }) => {
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
            <span>-</span>
            <span>1</span>
            <span>+</span>
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
          <button>₩18,000 ADD TO CART</button>
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
