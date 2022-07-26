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
  token,
}) => {
  const { product_id } = cartData;
  const [orderNum, setOrderNum] = useState(1);

  useEffect(() => {
    setOrderNum(cartData.quantity);
  }, []);

  const sendToApi = () => {
    fetch('http://10.58.4.155:8000/orders/cart', {
      method: 'POST',
      headers: {
        AUTHORIZATION: token,
      },
      body: JSON.stringify({
        product: product_id,
        calculation: 'addition',
      }),
    });
  };

  const increaseOrderNum = () => {
    setOrderNum(prev => prev + 1);
    increaseTotalOrderNum();
    sendToApi();
  };

  const decreasseOrderNum = e => {
    if (orderNum < 2) {
      setOrderNum(1);
    } else {
      setOrderNum(prev => prev - 1);
      decreaseTotalOrderNum();
      sendToApi();
    }
  };
  priceList[idx] = cartData.price.toString().slice(0, 2) * orderNum;

  useEffect(() => {
    setPriceList(priceList);
  }, []);

  return (
    <div key={cartData.id} className="prodInCart">
      <div className="productInfo">
        <img src={cartData.picture} alt="selected_tiny" />
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
