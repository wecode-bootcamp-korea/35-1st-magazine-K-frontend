import React from 'react';

const ProductEditor = ({ allCheckedHandler, isAllChecked }) => {
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
      <button className="checkDelete">선택삭제</button>
    </div>
  );
};
export default ProductEditor;
