/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './Cart.scss';

const Cart = () => {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="cartModal">
      <div className="cartNav">
        <span>Cart[{cartCount}]</span>
        <span>Close</span>
      </div>
      <div className="cartMain">
        <div className="empty">
          <p>장바구니가 비어 있습니다.</p>
        </div>
        {/* <div className="selected">
          <div className="productInfo">
            <img
              src="https://images.unsplash.com/photo-1598745845211-7d7a22d8cc25?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="selected_tiny"
            />
            <div className="description">
              <div>LE LABO</div>
              <div>₩15,000</div>
              <div className="count">
                <img
                  src="https://magazine-b.co.kr/web/baton/images/icon/icon_product_minus_white.png"
                  alt="minus"
                />
                <span>4</span>
                <img
                  src="https://magazine-b.co.kr/web/baton/images/icon/icon_product_plus_white.png"
                  alt="plus"
                />
              </div>
            </div>
            <p className="delete">×</p>
          </div>
        </div> */}
      </div>
      {/* <a className="cartFooter">
        <span>₩18,000 VIEW ALL</span>
      </a> */}
    </div>
  );
};

export default Cart;
