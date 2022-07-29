import React, { useState, useEffect } from 'react';
import './ProductComponent.scss';

const ProductComponent = ({
  ProductData,
  id,
  onDelete,
  checkedItemHandler,
  isAllChecked,
  checkedItems,
  onIncrease,
  onDecrease,
  patchOrderChange,
}) => {
  const [bChecked, setChecked] = useState(false);

  const checkHandler = ({ target }) => {
    setChecked(!bChecked);
    checkedItemHandler(ProductData.id, target.checked);
  };

  const allCheckHandler = () => setChecked(isAllChecked);

  useEffect(() => allCheckHandler(), [isAllChecked]);

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
          {ProductData.title}
        </label>
        <p>
          <span>₩</span>
          {(ProductData.price * ProductData.quantity).toLocaleString('ko-KR')}
        </p>
        <div className="SelectQuantityBox">
          {ProductData.quantity}
          <button
            className="SelectQuantityPlus"
            onClick={() => {
              onIncrease(id);
              patchOrderChange(id, 'addition');
            }}
          >
            +
          </button>
          <button
            className="SelectQuantityMinus"
            onClick={() => {
              onDecrease(id);
              patchOrderChange(id, 'subtraction');
            }}
          >
            &#8722;
          </button>
        </div>
      </div>
      <div className="SelectQuantityImgBox">
        <img src={ProductData.picture} className="orderItem" alt="Product" />
        <button
          className="SelectQuantityClearButton"
          onClick={() => {
            onDelete(id);
          }}
        >
          <img src="/images/Close.png" alt="close" className="closeButton" />
        </button>
      </div>
    </div>
  );
};

ProductComponent.defaltProps = { ProductData: [] };

export default ProductComponent;
