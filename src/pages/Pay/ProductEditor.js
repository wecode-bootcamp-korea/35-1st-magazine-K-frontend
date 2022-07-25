import React from 'react';
import './ProductEditor.scss';

const ProductEditor = ({
  allCheckedHandler,
  isAllChecked,
  onDelete,
  checkedItems,
}) => {
  return (
    <div className="upChoiceBoxController">
      <label className="checkAll">
        <input
          type="checkbox"
          name="checkAll"
          onChange={e => allCheckedHandler(e)}
          checked={isAllChecked}
        />
        전체선택
      </label>
      <button
        className="checkDelete"
        onClick={() => {
          if (window.confirm(`선택하신 상품을 삭제하시겠습니까?`)) {
            // console.log(checkedItems);
            checkedItems.forEach(value => {
              // console.log(value);
              checkedItems.delete(value);
              onDelete(value);
            });
          }
        }}
      >
        선택삭제
      </button>
    </div>
  );
};
export default ProductEditor;
