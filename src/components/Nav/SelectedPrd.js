import React, { useEffect } from 'react';
import { useState } from 'react';

const SelectedPrd = ({
  cartData,
  minusOrderQuantity,
  plusOrderQuantity,
  price,
  setPrice,
  idx,
  deleteProduct,
}) => {
  const [orderQuantity, setOrderQuantity] = useState(1);

  useEffect(() => {
    setOrderQuantity(cartData.order);
  }, []);

  const plus = () => {
    setOrderQuantity(prev => prev + 1);
    plusOrderQuantity();
  };

  const minus = e => {
    if (orderQuantity < 2) {
      setOrderQuantity(1);
    } else {
      setOrderQuantity(prev => prev - 1);
      minusOrderQuantity();
    }
  };

  price[idx] = cartData.price.toString().slice(0, 2) * orderQuantity;

  useEffect(() => {
    setPrice(price);
  }, [price[idx]]);

  return (
    <div key={cartData.id} className="selected">
      <div className="productInfo">
        <img src={cartData.cart_img_url} alt="selected_tiny" />
        <div className="description">
          <div>{cartData.title}</div>
          <div>₩{price[idx]},000</div>
          <div className="count">
            <img
              onClick={minus}
              src="https://magazine-b.co.kr/web/baton/images/icon/icon_product_minus_white.png"
              alt="minus"
            />
            <span>{orderQuantity}</span>
            <img
              onClick={plus}
              src="https://magazine-b.co.kr/web/baton/images/icon/icon_product_plus_white.png"
              alt="plus"
            />
          </div>
        </div>
        <p
          onClick={() => {
            deleteProduct(cartData.id, orderQuantity);
          }}
          className="delete"
        >
          ×
        </p>
      </div>
    </div>
  );
};

export default SelectedPrd;
