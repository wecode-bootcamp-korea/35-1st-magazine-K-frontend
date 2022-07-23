const ProductEditor = ({ allCheckedHandler }) => {
  return (
    <div className="upChoiceBoxController">
      <label className="checkAll">
        <input
          type="checkbox"
          name="checkAll"
          onChange={e => allCheckedHandler(e)}
        />
        전체선택
      </label>
      <button className="checkDelete">선택삭제</button>
    </div>
  );
};
export default ProductEditor;
