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
          {ProductData.name}
        </label>
        <p>
          <span>₩</span>
          {ProductData.price * ProductData.quantity}
        </p>
        <div className="SelectQuantityBox">
          {ProductData.quantity}
          <button className="SelectQuantityPlus" onClick={() => onIncrease(id)}>
            +
          </button>
          <button
            className="SelectQuantityMinus"
            onClick={() => onDecrease(id)}
          >
            &#8722;
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
          <img src="/images/Close.png" alt="close" className="closeButton" />
        </button>
      </div>
    </div>
  );
};

ProductComponent.defaltProps = { ProductData: [] };

export default ProductComponent;
