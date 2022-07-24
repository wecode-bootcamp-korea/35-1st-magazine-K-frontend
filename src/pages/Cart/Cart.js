import React, { useState, useEffect } from 'react';
import './Cart.scss';

const Cart = () => {
  const [cartData, setCartData] = useState([]);
  const [orderQuantity, setOrderQuantity] = useState(1);
  const [cartModal, setCartModal] = useState(true);
  const [total, setTotal] = useState(0);

  // console.log(cartData);

  const totalPrice = cartData[0]?.price.toString().slice(0, 2) * orderQuantity;
  // console.log(totalPrice);

  function changeTotal() {
    setTotal(totalPrice);
  }

  function getCartDataPrice(cartData) {
    let cartDataPrice = [];
    for (let i = 0; i < cartData.length; i++) {
      cartDataPrice.push(
        cartData[i].price.toString().slice(0, 2) * orderQuantity
      );
    }
    return cartDataPrice;
  }
  const priceThousand = getCartDataPrice(cartData);
  console.log(priceThousand && priceThousand?.reduce((a, b) => a + b));

  // function totalPrice() {

  // }

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
              changeTotal={changeTotal}
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
function SelectedPrd({
  cartData,
  minusOrderQuantity,
  plusOrderQuantity,
  changeTotal,
}) {
  const [orderQuantity, setOrderQuantity] = useState(1);
  const totalPrice = cartData.price * orderQuantity;
  // console.log(totalPrice);
  // console.log(cartData);

  const plus = () => {
    setOrderQuantity(prev => prev + 1);
    plusOrderQuantity();

    const totalPrice = cartData.price * orderQuantity;
    changeTotal(cartData.price * orderQuantity);
    // console.log(totalPrice);
  };

  const minus = e => {
    // console.log(e.target);
    if (orderQuantity < 2) {
      setOrderQuantity(1);
    } else {
      setOrderQuantity(prev => prev - 1);
    }
    minusOrderQuantity();
    changeTotal(totalPrice);
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
}

export default Cart;
