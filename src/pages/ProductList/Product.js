import React from 'react';

const Product = props => {
  return (
    <div className="product">
      <div className="prodImgContainer">
        <div className="prodImgWrapper">
          <img
            className="prodImage"
            src={props.prod.main_img_url_1}
            alt="prod1-1"
          />
        </div>
        <div className="prodImgWrapper">
          <img
            className="prodImage"
            src={props.prod.main_img_url_2}
            alt="product1-2"
          />
        </div>
      </div>
      <div className="prodInfoContainer">
        <div className="prodInfoWrapper">
          <span className="prodTitle">{props.prod.title}</span>
          <span className="IssueNum">ISSUE NO.{props.prod.issue_number}</span>
          <span className="categoryName">{props.prod.main_category_name}</span>
          <span className="price">{props.prod.price},000</span>
        </div>
        <div className="addToCart">ADD TO CART</div>
      </div>
    </div>
  );
};

export default Product;
