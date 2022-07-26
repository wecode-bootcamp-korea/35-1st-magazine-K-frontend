import React, { useEffect } from 'react';
import { useState } from 'react';
import './ProdInCart.scss';

const ProdInCart = ({
  cartData,
  decreaseTotalOrderNum,
  increaseTotalOrderNum,
  priceList,
  setPriceList,
  idx,
  deleteProduct,
}) => {
  const [orderNum, setOrderNum] = useState(1);

  useEffect(() => {
    setOrderNum(cartData.order);
  }, []);

  const sendToApiOrderInfo = () => {
    fetch('3209403298470:8000/cart', {
      method: 'POST',
      body: JSON.stringify({}),
    });
  };

  const increaseOrderNum = () => {
    setOrderNum(prev => prev + 1);
    increaseTotalOrderNum();
  };

  const decreasseOrderNum = e => {
    if (orderNum < 2) {
      setOrderNum(1);
    } else {
      setOrderNum(prev => prev - 1);
      decreaseTotalOrderNum();
    }
  };

  priceList[idx] = cartData.price.toString().slice(0, 2) * orderNum;

  useEffect(() => {
    setPriceList(priceList);
  }, []);

  return (
    <div key={cartData.id} className="prodInCart">
      <div className="productInfo">
        <img src={cartData.cart_img_url} alt="selected_tiny" />
        <div className="description">
          <div>{cartData.title}</div>
          <div>₩{priceList[idx]},000</div>
          <div className="count">
            <img
              onClick={decreasseOrderNum}
              src="https://magazine-b.co.kr/web/baton/images/icon/icon_product_minus_white.png"
              alt="minus"
            />
            <span>{orderNum}</span>
            <img
              onClick={increaseOrderNum}
              src="https://magazine-b.co.kr/web/baton/images/icon/icon_product_plus_white.png"
              alt="plus"
            />
          </div>
        </div>
        <p
          onClick={() => {
            deleteProduct(cartData.id, orderNum);
          }}
          className="delete"
        >
          ×
        </p>
      </div>
    </div>
  );
};

export default ProdInCart;
