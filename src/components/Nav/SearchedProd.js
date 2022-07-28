import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchedProd.scss';

const SearchedProd = ({ prod }) => {
  const navigate = useNavigate();
  const modifiedPrice = prod.price.toString().slice(0, 2);

  return (
    <div className="prodContainer">
      <div className="prodImgWrapper">
        <img
          className="prodImg"
          src={prod.main_img_url_1}
          alt="searchedProd"
          onClick={() => {
            navigate(`/Products/${prod.product_id}`);
          }}
        />
      </div>
      <div className="prodInfoWrapper">
        <div
          className="prodInfoTitle"
          onClick={() => {
            navigate(`/Products/${prod.product_id}`);
          }}
        >
          {prod.title}
        </div>
        <div className="prodInfo">{`ISSUE NO.${prod.issue_number}`}</div>
        <div className="prodInfo">{prod.main_category}</div>
        <div className="prodInfo">{`₩${modifiedPrice},000`}</div>
      </div>
    </div>
  );
};

export default SearchedProd;
