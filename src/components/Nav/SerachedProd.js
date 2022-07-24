import React from 'react';
import './SearchedProd.scss';

const SearchedProd = ({ prod }) => {
  return (
    <div className="prodContainer">
      <div className="prodImgWrapper">
        <img
          className="prodImg"
          src="https://magazine-b.co.kr/web/product/small/202207/13b0b46dd2fa58df2614111d695f6d6e.jpg"
          alt="searchedProd"
        />
      </div>
      <div className="prodInfoWrapper">
        <div className="prodInfo">{prod.title}</div>
        <div className="prodInfo">{`ISSUE NO.${prod.issue_number}`}</div>
        <div className="prodInfo">{prod.main_category}</div>
        <div className="prodInfo">{`₩${prod.price
          .toString()
          .slice(0, 2)},000`}</div>
      </div>
    </div>
  );
};

export default SearchedProd;
