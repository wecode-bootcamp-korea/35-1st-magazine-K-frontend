import React from 'react';

const Product = ({ prod }) => {
  return (
    <div className="product">
      <div className="prodImgContainer">
        <div className="prodImgWrapper">
          <img className="prodImage" src={prod.main_img_url_1} alt="prod1-1" />
        </div>
        <div className="prodImgWrapper">
          <img
            className="prodImage"
            src={prod.main_img_url_2}
            alt="product1-2"
          />
        </div>
      </div>
      <div className="prodInfoContainer">
        <div className="prodInfoWrapper">
          <span className="prodTitle">{prod.title}</span>
          <span className="IssueNum">ISSUE NO.{prod.issue_number}</span>
          <span className="categoryName">{prod.main_category_name}</span>
          <span className="price">{prod.price},000</span>
        </div>
        <div className="addToCart">ADD TO CART</div>
      </div>
    </div>
  );
};

export default Product;
