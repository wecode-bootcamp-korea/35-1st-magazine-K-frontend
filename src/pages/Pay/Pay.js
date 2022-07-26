import React from 'react';
import { useState, useEffect } from 'react';
import CashComponent from './CashComponent';
import ProductComponent from './ProductComponent';
import ProductEditor from './ProductEditor';
import './Pay.scss';

const Pay = () => {
  const [productDataList, setProductDataList] = useState([]);

  useEffect(() => {
    fetch('/data/PayProductData.json')
      .then(res => res.json())
      .then(result => {
        // console.log('result :', result);
        setProductDataList(result);
      });
  }, []);

  const onDelete = targetId => {
    // [1,3,4]
    //const newProductList = productDataList.filter(it => it.id !== targetId);
    setProductDataList(productDataList =>
      productDataList.filter(it => it.id !== targetId)
    ); // []
    //console.log(productDataList);
  };

  const [checkedItems, setCheckedItems] = useState(new Set());

  const checkedItemHandler = (id, isChecked) => {
    if (isChecked) {
      checkedItems.add(id);
      setCheckedItems(checkedItems);
      console.log(checkedItems);
      //console.log(productDataList);
    } else if (!isChecked && checkedItems.has(id)) {
      checkedItems.delete(id);
      setCheckedItems(checkedItems);
      console.log(checkedItems);
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
    const changeIndex = prevData.findIndex(el => el.id === id);
    prevData[changeIndex].quantity += 1;
    setProductDataList(prevData);
  };

  const onDecrease = id => {
    const prevData = [...productDataList];
    const changeIndex = prevData.findIndex(el => el.id === id);
    if (prevData[changeIndex].quantity !== 1) {
      prevData[changeIndex].quantity -= 1;
      setProductDataList(prevData);
    }
  };

  // const onDecrease = () => {
  //   if (count !== 1) {
  //     setCount(count - 1);
  //   }
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
          />
          {productDataList.length > 0 &&
            productDataList.map(ProductData => {
              return (
                <ProductComponent
                  ProductData={ProductData}
                  key={ProductData.id}
                  id={ProductData.id}
                  onDelete={onDelete}
                  checkedItemHandler={checkedItemHandler}
                  isAllChecked={isAllChecked}
                  checkedItems={checkedItems}
                  onIncrease={onIncrease}
                  onDecrease={onDecrease}
                />
              );
            })}
        </div>
        <CashComponent />
      </div>
    </div>
  );
};

export default Pay;
