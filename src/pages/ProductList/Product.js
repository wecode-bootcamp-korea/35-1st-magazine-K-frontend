import React from 'react';
import './Product.scss';

const Product = ({ prod }) => {
  const {
    main_category,
    main_img_url_1,
    main_img_url_2,
    title,
    issue_number,
    price,
  } = prod;
  const priceThousand = price.toString().slice(0, 2);

  return (
    <div className="product">
      <div className="prodImgContainer">
        <div className="prodImgWrapper">
          <img className="prodImage" src={main_img_url_1} alt="prod1-1" />
        </div>
        <div className="prodImgWrapper">
          <img className="prodImage" src={main_img_url_2} alt="product1-2" />
        </div>
      </div>
      <div className="prodInfoContainer">
        <div className="prodInfoWrapper">
          <span className="prodInfo">{title}</span>
          <span className="prodInfo">ISSUE NO.{issue_number}</span>
          <span className="prodInfo">{main_category}</span>
          <span className="prodInfo">{`₩${priceThousand},000`}</span>
        </div>
        <div className="addToCart">ADD TO CART</div>
      </div>
    </div>
  );
};

export default Product;
