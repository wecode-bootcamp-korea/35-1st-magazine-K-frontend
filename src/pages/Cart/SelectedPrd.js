import React, { useEffect } from 'react';
import { useState } from 'react';

const SelectedPrd = ({ cartData, minusOrderQuantity, plusOrderQuantity }) => {
  const [orderQuantity, setOrderQuantity] = useState(1);

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

  const [selected, setSelected] = useState(true);

  const priceThousand = cartData.price.toString().slice(0, 2);
  // console.log(priceThousand);

  function deleteProduct() {
    alert('선택하신 상품을 삭제하시겠습니까?');
    setSelected(false);
  }

  return (
    <div
      key={cartData.id}
      className="selected"
      style={selected ? { display: 'flex' } : { display: 'none' }}
    >
      <div className="productInfo">
        <img src={cartData.cart_img_url} alt="selected_tiny" />
        <div className="description">
          <div>{cartData.title}</div>
          <div>₩{priceThousand},000</div>
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
        <p onClick={deleteProduct} className="delete">
          ×
        </p>
      </div>
    </div>
  );
};

export default SelectedPrd;
