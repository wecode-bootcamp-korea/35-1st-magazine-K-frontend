import React, { useState } from 'react';

function ProductComponent({ ProductData }) {
  // console.log(ProductData);
  const [count, setCount] = useState(Number(ProductData.quantity));

  const onIncrease = () => {
    setCount(count + 1);
  };

  const onDecrease = () => {
    setCount(count - 1);
  };

  return (
    <div className="downChoiceBoxController" key={ProductData.id}>
      <div className="itemInformation">
        <label>
          <input type="checkbox" name="checkAll" />
          {ProductData.name}
        </label>
        <p>{ProductData.price}</p>
        <div className="SelectQuantityBox">
          <input
            className="SelectQuantity"
            value={count}
            onChange={e => {
              setCount(e.target.value);
            }}
          />
          <button className="SelectQuantityPlus" onClick={onIncrease}>
            +
          </button>
          <button className="SelectQuantityMinus" onClick={onDecrease}>
            -
          </button>
        </div>
      </div>
      <div className="SelectQuantityImgBox">
        <img src={ProductData.src} className="orderItem" />
        <button className="SelectQuantityClearButton">+</button>
      </div>
    </div>
  );
}

export default ProductComponent;
