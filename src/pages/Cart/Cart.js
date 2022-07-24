import React, { useState, useEffect } from 'react';
import SelectedPrd from './SelectedPrd';
import './Cart.scss';

const Cart = () => {
  const [cartData, setCartData] = useState([]);
  const [orderQuantity, setOrderQuantity] = useState(1);
  const [cartModal, setCartModal] = useState(true);
  const [total, setTotal] = useState(0);

  // const totalPrice = cartData[0]?.price.toString().slice(0, 2) * orderQuantity;

  function getCartDataPrice(cartData) {
    let cartDataPrice = [];
    for (let i = 0; i < cartData.length; i++) {
      cartDataPrice.push(
        cartData[i].price.toString().slice(0, 2) * orderQuantity
      );
    }
    return cartDataPrice;
  }
  // const priceThousand = getCartDataPrice(cartData);
  // console.log(priceThousand && priceThousand?.reduce((a, b) => a + b));

  const closeCart = () => {
    setCartModal(false);
  };

  function minusOrderQuantity() {
    if (orderQuantity < 2) {
      setOrderQuantity(1);
    } else {
      setOrderQuantity(orderQuantity => orderQuantity - 1);
    }
  }

  function plusOrderQuantity() {
    setOrderQuantity(orderQuantity => orderQuantity + 1);
  }

  useEffect(() => {
    fetch('data/cartData.json')
      .then(res => res.json())
      .then(data => {
        setCartData(data);
      });
  }, []);

  return (
    <div
      className="cartModal"
      style={cartModal ? { visibility: 'visible' } : { visibility: 'hidden' }}
    >
      <div className="cartNav">
        <span>Cart[{orderQuantity}]</span>
        <span onClick={closeCart}>Close</span>
      </div>
      <div className="cartMain">
        {/* <div className="empty">
            <p>장바구니가 비어 있습니다.</p>
          </div> */}

        {cartData.map(cartData => {
          return (
            <SelectedPrd
              key={cartData.id}
              cartData={cartData}
              minusOrderQuantity={minusOrderQuantity}
              plusOrderQuantity={plusOrderQuantity}
            />
          );
        })}
      </div>
      <div className="cartFooter">
        <span>
          ₩{total}
          ,000 VIEW ALL
        </span>
      </div>
    </div>
  );
};
export default Cart;
