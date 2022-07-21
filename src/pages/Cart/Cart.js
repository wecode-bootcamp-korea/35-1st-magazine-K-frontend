import React, { useState, useEffect } from 'react';
import './Cart.scss';

const Cart = () => {
  const [orderQuantity, setOrderQuantity] = useState(0);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    fetch('data/cartData.json')
      .then(res => res.json())
      .then(data => {
        setCartData(data);
      });
  }, []);

  return (
    <div className="cartModal">
      <div className="cartNav">
        <span>Cart[{orderQuantity}]</span>
        <span>Close</span>
      </div>
      <div className="cartMain">
        {/* <div className="empty">
            <p>장바구니가 비어 있습니다.</p>
          </div> */}

        {/* 여기 map 돌리면 됨 */}
        {cartData.map(cartData => {
          return (
            <SelectedPrd
              key={cartData.id}
              setOrderQuantity={setOrderQuantity}
              cartData={cartData}
            />
          );
        })}
      </div>
      <div className="cartFooter">
        <span>
          ₩{orderQuantity === 0 ? 15 : 15 * orderQuantity},000 VIEW ALL
        </span>
      </div>
    </div>
  );
};
function SelectedPrd({ cartData }) {
  const { cart_img_url, id, price, title } = cartData;

  const [orderQuantity, setOrderQuantity] = useState(0);

  const [cartModal, setCartModal] = useState(true);

  const priceThousand = price.toString().slice(0, 2);

  function minusOrderQuantity() {
    if (orderQuantity < 2) {
      setOrderQuantity(1);
    } else {
      setOrderQuantity(orderQuantity - 1);
    }
  }

  function plusOrderQuantity() {
    setOrderQuantity(orderQuantity + 1);
  }

  function deleteProduct() {
    alert('선택하신 상품을 삭제하시겠습니까?');
    setCartModal(false);
  }

  return (
    <div
      key={id}
      className="selected"
      style={cartModal ? { display: 'flex' } : { display: 'none' }}
    >
      <div className="productInfo">
        <img src={cart_img_url} alt="selected_tiny" />
        <div className="description">
          <div>{title}</div>
          <div>₩{priceThousand},000</div>
          <div className="count">
            <img
              onClick={minusOrderQuantity}
              src="https://magazine-b.co.kr/web/baton/images/icon/icon_product_minus_white.png"
              alt="minus"
            />
            <span>{orderQuantity}</span>
            <img
              onClick={plusOrderQuantity}
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
}

export default Cart;
