import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.scss';

const Product = ({ prod, category }) => {
  const {
    main_category,
    main_img_url_1,
    main_img_url_2,
    title,
    issue_number,
    price,
    product_id,
  } = prod;
  const navigate = useNavigate();
  const priceThousand = price.toString().slice(0, 2);
  const moveDetailPage = () => {
    navigate(`/ProductDetail?issue=${issue_number}&category=${category}`);
  };

  const addToCart = () => {
    fetch('http://10.58.4.28:8000/orders/cart', {
      method: 'POST',
      headers: {
        AUTHORIZATION:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Mn0.jZsIe7OpUqOR0sOxxZCIOlb4yvTSSNJ0sDwCQqPZ6HU',
      },
      body: JSON.stringify({
        product: product_id,
      }),
    });
  };

  return (
    <div className="product">
      <div className="prodImgContainer">
        <div className="prodImgWrapper">
          <img
            className="prodImage"
            src={main_img_url_1}
            alt="prod1-1"
            onClick={moveDetailPage}
          />
        </div>
        <div className="prodImgWrapper">
          <img
            className="prodImage"
            src={main_img_url_2}
            alt="product1-2"
            onClick={moveDetailPage}
          />
        </div>
      </div>
      <div className="prodInfoContainer">
        <div className="prodInfoWrapper">
          <span className="prodInfo">{title}</span>
          <span className="prodInfo">ISSUE NO.{issue_number}</span>
          <span className="prodInfo">{main_category}</span>
          <span className="prodInfo">{`₩${priceThousand},000`}</span>
        </div>
        <div
          className="addToCart"
          onClick={() => {
            addToCart();
          }}
        >
          ADD TO CART
        </div>
      </div>
    </div>
  );
};

export default Product;
