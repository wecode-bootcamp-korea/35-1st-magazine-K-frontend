import React, { useState, useEffect } from 'react';

const ProductComponent = ({
  ProductData,
  onDelete,
  checkedItemHandler,
  isAllChecked,
  checkedItems,
}) => {
  // console.log(ProductData);
  const [count, setCount] = useState(Number(ProductData.quantity));

  const onIncrease = () => {
    setCount(count + 1);
  };

  const onDecrease = () => {
    if (count !== 1) {
      setCount(count - 1);
    }
  };

  const [bChecked, setChecked] = useState(false);

  const checkHandler = ({ target }) => {
    setChecked(!bChecked);
    checkedItemHandler(ProductData.id, target.checked);
  };

  const allCheckHandler = () => setChecked(isAllChecked);

  useEffect(() => allCheckHandler(), [isAllChecked]);
  //console.log(bChecked);
  return (
    <div className="downChoiceBoxController">
      <div className="itemInformation">
        <label>
          <input
            type="checkbox"
            name="checkAll"
            checked={bChecked}
            onChange={e => checkHandler(e)}
          />
          {ProductData.name}
        </label>
        <p>
          <span>₩</span>
          {ProductData.price}
        </p>
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
        <img src={ProductData.src} className="orderItem" alt="Product" />
        <button
          className="SelectQuantityClearButton"
          onClick={() => {
            if (
              window.confirm(
                `${ProductData.id}번째 선택하신 상품을 삭제하시겠습니까?`
              )
            ) {
              checkedItems.delete(ProductData.id);
              onDelete(ProductData.id);
            }
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

ProductComponent.defaltProps = { ProductData: [] };

export default ProductComponent;
