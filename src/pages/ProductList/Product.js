import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.scss';

const Product = ({ prod, modalState, setModalState }) => {
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
    navigate(`/Products/${product_id}`);
  };

  const addToCart = () => {
    const token = localStorage.getItem('login-token') || '';

    if (token) {
      fetch(`http://10.58.4.114:8000/orders/cart/${product_id}`, {
        method: 'POST',
        headers: {
          AUTHORIZATION: token,
        },
        body: JSON.stringify({
          quantity: 1,
        }),
      })
        .then(res => res.json())
        .then(res => {
          if (res.result === 'SUCCESS') {
            setModalState(true);
          }
        });
    } else {
      alert('로그인이 필요한 기능입니다.');
      navigate('/Login');
    }
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
