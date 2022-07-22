import React from 'react';
import { useState, useEffect } from 'react';
import CashComponent from './CashComponent';
import ProductComponent from './ProductComponent';
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
  return (
    <div className="payPageWrapper">
      <div className="payPageBox">
        <div className="choiceBox">
          <div className="upChoiceBoxController">
            <label className="checkAll">
              <input type="checkbox" name="checkAll" />
              전체선택
            </label>
            <button className="checkDelete">선택삭제</button>
          </div>
          {productDataList.map(ProductData => {
            return (
              <ProductComponent
                ProductData={ProductData}
                key={ProductData.id}
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
