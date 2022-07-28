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
  deleteCartData,
  token,
}) => {
  const { product_id } = cartData;
  const [orderNum, setOrderNum] = useState(cartData.quantity);

  const patchCartData = change => {
    fetch(`http://10.58.3.49:8000/orders/cart/${product_id}`, {
      method: 'PATCH',
      headers: {
        AUTHORIZATION: token,
      },
      body: JSON.stringify({
        product: product_id,
        calculation: change,
      }),
    });
  };

  const increaseOrderNum = () => {
    setOrderNum(prev => prev + 1);
    increaseTotalOrderNum();
    patchCartData('addition');
  };

  const decreasseOrderNum = e => {
    if (orderNum < 2) {
      setOrderNum(1);
    } else {
      setOrderNum(prev => prev - 1);
      decreaseTotalOrderNum();
      patchCartData('subtraction');
    }
  };

  priceList[idx] = cartData.price.toString().slice(0, 2) * orderNum;

  useEffect(() => {
    setPriceList(priceList);
  }, []);

  useEffect(() => {
    setOrderNum(cartData.quantity);
  }, [cartData]);

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
            deleteCartData(product_id, idx, orderNum);
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
