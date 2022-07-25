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
    //console.log(`${targetId}가 삭제되었습니다.`);
    const newProductList = productDataList.filter(it => it.id !== targetId);
    setProductDataList(newProductList);
  };

  const [checkedItems, setCheckedItems] = useState(new Set());

  const checkedItemHandler = (id, isChecked) => {
    if (isChecked) {
      checkedItems.add(id);
      setCheckedItems(checkedItems);
      console.log(checkedItems);
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
          {productDataList.map(ProductData => {
            return (
              <ProductComponent
                ProductData={ProductData}
                key={ProductData.id}
                onDelete={onDelete}
                checkedItemHandler={checkedItemHandler}
                isAllChecked={isAllChecked}
                checkedItems={checkedItems}
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
