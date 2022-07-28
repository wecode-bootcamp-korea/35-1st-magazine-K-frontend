import React from 'react';
import { useState, useEffect } from 'react';
import CashComponent from './CashComponent';
import ProductComponent from './ProductComponent';
import ProductEditor from './ProductEditor';
import './Pay.scss';

const Pay = () => {
  const [productDataList, setProductDataList] = useState([]);
  const [userpoint, setUserpoint] = useState(0);
  const token = localStorage.getItem('login-token') || '';

  useEffect(() => {
    fetch(`http://10.58.3.49:8000/orders/cart`, {
      method: 'GET',
      headers: {
        AUTHORIZATION: token,
      },
    })
      .then(res => res.json())
      .then(result => {
        setUserpoint(result.result[0].user_point);
        setProductDataList(result.result[0].product);
      });
  }, [productDataList.length]);

  const patchOrderChange = (product_id, target) => {
    fetch(`http://10.58.3.49:8000/orders/cart/${product_id}`, {
      method: 'PATCH',
      headers: {
        AUTHORIZATION: token,
      },
      body: JSON.stringify({
        calculation: target,
      }),
    });
  };

  const onDelete = product_id => {
    if (window.confirm('선택하신 상품을 삭제하시겠습니까?')) {
      fetch(`http://10.58.3.49:8000/orders/cart/${product_id}`, {
        method: 'DELETE',
        headers: {
          AUTHORIZATION: token,
        },
      })
        .then(res => res.json())
        .then(res => {
          if (res.message === 'SUCCESS') {
            setProductDataList(productDataList =>
              productDataList.filter(it => it.id !== product_id)
            );
            checkedItems.delete(product_id);
            window.location.reload();
          }
        });
    }
  };

  const [checkedItems, setCheckedItems] = useState(new Set());

  const checkedItemHandler = (id, isChecked) => {
    if (isChecked) {
      checkedItems.add(id);
      setCheckedItems(checkedItems);
    } else if (!isChecked && checkedItems.has(id)) {
      checkedItems.delete(id);
      setCheckedItems(checkedItems);
    }
  };

  const [isAllChecked, setIsAllChecked] = useState(false);

  const allCheckedHandler = isChecked => {
    if (!isAllChecked) {
      setIsAllChecked(!isAllChecked);
      setCheckedItems(new Set(productDataList.map(({ id }) => id)));
      setIsAllChecked(true);
    } else {
      setIsAllChecked(!isAllChecked);
      checkedItems.clear();
      setCheckedItems(checkedItems);
      setIsAllChecked(false);
    }
  };

  const onIncrease = id => {
    const prevData = [...productDataList];
    const changeIndex = prevData.findIndex(el => el.product_id === id);
    prevData[changeIndex].quantity += 1;
    setProductDataList(prevData);
  };

  const onDecrease = id => {
    const prevData = [...productDataList];
    const changeIndex = prevData.findIndex(el => el.product_id === id);
    if (prevData[changeIndex].quantity !== 1) {
      prevData[changeIndex].quantity -= 1;
      setProductDataList(prevData);
    }
  };

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let sum = 0;
    productDataList.map(ProductData => {
      return (sum += ProductData.quantity * ProductData.price);
    });
    setTotalPrice(sum);
  }, [productDataList]);

  // const overLapProps = {
  //   isAllChecked: { isAllChecked },
  //   onDelete: { onDelete },
  //   checkedItems: { checkedItems },
  // };

  return (
    <div className="payPageWrapper">
      <div className="payPageBox">
        <div className="choiceBox">
          <ProductEditor
            allCheckedHandler={allCheckedHandler}
            isAllChecked={isAllChecked}
            onDelete={onDelete}
            checkedItems={checkedItems}
            // {...overLapProps}
          />
          {productDataList.length > 0 &&
            productDataList.map(ProductData => {
              return (
                <ProductComponent
                  ProductData={ProductData}
                  key={ProductData.product_id}
                  id={ProductData.product_id}
                  checkedItemHandler={checkedItemHandler}
                  onIncrease={onIncrease}
                  onDecrease={onDecrease}
                  isAllChecked={isAllChecked}
                  onDelete={onDelete}
                  checkedItems={checkedItems}
                  patchOrderChange={patchOrderChange}
                  // {...overLapProps}
                />
              );
            })}
        </div>
        <CashComponent
          totalPrice={totalPrice}
          userpoint={userpoint}
          token={token}
        />
      </div>
    </div>
  );
};

export default Pay;
