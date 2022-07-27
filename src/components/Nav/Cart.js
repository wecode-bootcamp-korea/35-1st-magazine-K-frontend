import React, { useState, useEffect } from 'react';
import ProdInCart from './ProdInCart';
import './Cart.scss';

const Cart = ({ toggleCart, isClickedCart }) => {
  const [cartData, setCartData] = useState([]);
  const [totalOrderNum, setTotalOrderNum] = useState(0);
  const [priceList, setPriceList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isEmpty, setIsEmpty] = useState(true);
  const token = localStorage.getItem('login-token') || '';

  function decreaseTotalOrderNum() {
    if (totalOrderNum < 2) {
      setTotalOrderNum(1);
    } else if (totalOrderNum < cartData.length + 1) {
      setTotalOrderNum(cartData.length);
    } else {
      setTotalOrderNum(totalOrderNum => totalOrderNum - 1);
    }
  }

  function increaseTotalOrderNum() {
    setTotalOrderNum(totalOrderNum => totalOrderNum + 1);
  }

  const deleteProduct = (prodIndex, orderNum) => {
    setCartData(
      cartData.filter((prod, idx) => {
        if (prodIndex === idx) {
          setTotalOrderNum(totalOrderNum - orderNum);
        }
        return prodIndex !== idx;
      })
    );
  };

  const sendToApiDelete = (product_id, prodIndex, orderNum) => {
    if (window.confirm('선택하신 상품을 삭제하시겠습니까?')) {
      fetch('http://10.58.4.155:8000/orders/cart', {
        method: 'DELETE',
        headers: {
          AUTHORIZATION: token,
        },
        body: JSON.stringify({
          product: product_id,
        }),
      })
        .then(res => res.json())
        .then(res => {
          if (res.message === 'SUCCESS') {
            deleteProduct(prodIndex, orderNum);
          }
        });
    }
  };

  useEffect(() => {
    if (token) {
      fetch('http://10.58.4.155:8000/orders/cart', {
        method: 'GET',
        headers: {
          AUTHORIZATION: token,
        },
      })
        .then(res => res.json())
        .then(res => {
          if (res.message === 'EMPTY_CART') {
            return;
          } else {
            setCartData(res.result);
            let sum = 0;
            res.result.forEach(product => {
              sum = sum + product.quantity;
            });
            setTotalOrderNum(sum);
          }
        });
    }
  }, [cartData, isClickedCart]);

  useEffect(() => {
    setPriceList(Array(cartData.length).fill());
    setIsEmpty(cartData.length === 0 ? true : false);
    // if (pageLoadCount === 0) {
    // } else {
    //   toggleCart();
    // }
    // pageLoadCount++;
  }, [cartData]);
  // console.log(cartData && cartData[0]?.priceList);
  // console.log(cartData && cartData[0]?.priceList.toString().slice(0, 2));

  useEffect(() => {
    let sum = 0;
    priceList.forEach(el => {
      sum = el + sum;
    });
    setTotalPrice(sum);
  }, [cartData, totalOrderNum, priceList]);

  return (
    <div className={['cartModal', isClickedCart && 'cartModalOn'].join(' ')}>
      <div className="cartNav">
        <span>Cart[{totalOrderNum}]</span>
        <span onClick={toggleCart}>Close</span>
      </div>
      <div className="cartMain">
        {isEmpty && (
          <div className="empty">
            <p>장바구니가 비어 있습니다.</p>
          </div>
        )}
        {cartData.map((cartData, idx) => {
          return (
            <ProdInCart
              key={cartData.id}
              cartData={cartData}
              decreaseTotalOrderNum={decreaseTotalOrderNum}
              increaseTotalOrderNum={increaseTotalOrderNum}
              priceList={priceList}
              idx={idx}
              setPriceList={setPriceList}
              sendToApiDelete={sendToApiDelete}
              token={token}
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
