import React, { useState, useEffect } from 'react';
import SelectedPrd from './SelectedPrd';
import './Cart.scss';

const Cart = ({ toggleCart, isClickedCart }) => {
  const [cartData, setCartData] = useState([]);
  const [orderQuantity, setOrderQuantity] = useState(0);
  const [price, setPrice] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  function minusOrderQuantity() {
    if (orderQuantity < 2) {
      setOrderQuantity(1);
    } else if (orderQuantity < cartData.length + 1) {
      setOrderQuantity(cartData.length);
    } else {
      setOrderQuantity(orderQuantity => orderQuantity - 1);
    }
  }

  function plusOrderQuantity() {
    setOrderQuantity(orderQuantity => orderQuantity + 1);
  }

  const deleteProduct = (id, order) => {
    if (window.confirm('선택하신 상품을 삭제하시겠습니까?')) {
      setCartData(
        cartData.filter(prod => {
          if (prod.id === id) {
            setOrderQuantity(orderQuantity - order);
          }
          return prod.id !== id;
        })
      );
    }
  };

  useEffect(() => {
    fetch('data/cartData.json')
      .then(res => res.json())
      .then(data => {
        setCartData(() => data);
        let sum = 0;
        data.forEach(product => {
          sum = sum + product.order;
        });
        setOrderQuantity(sum);
      });
  }, []);

  useEffect(() => {
    setPrice(Array(cartData.length).fill());
  }, [cartData]);
  // console.log(cartData && cartData[0]?.price);
  // console.log(cartData && cartData[0]?.price.toString().slice(0, 2));

  useEffect(() => {
    let sum = 0;
    price.forEach(el => {
      sum = el + sum;
    });
    setTotalPrice(sum);
  }, [cartData, orderQuantity, price]);

  return (
    <div className={['cartModal', isClickedCart && 'cartModalOn'].join(' ')}>
      <div className="cartNav">
        <span>Cart[{orderQuantity}]</span>
        <span onClick={toggleCart}>Close</span>
      </div>
      <div className="cartMain">
        {/* <div className="empty">
            <p>장바구니가 비어 있습니다.</p>
          </div> */}

        {cartData.map((cartData, idx) => {
          return (
            <SelectedPrd
              key={cartData.id}
              cartData={cartData}
              minusOrderQuantity={minusOrderQuantity}
              plusOrderQuantity={plusOrderQuantity}
              price={price}
              idx={idx}
              setPrice={setPrice}
              deleteProduct={deleteProduct}
            />
          );
        })}
      </div>
      <div className="cartFooter">
        <span>₩{totalPrice},000 VIEW ALL</span>
      </div>
    </div>
  );
};

export default Cart;
