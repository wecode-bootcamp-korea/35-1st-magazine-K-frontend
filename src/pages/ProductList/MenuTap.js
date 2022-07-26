import './MenuTap.scss';

const MenuTap = ({ menu, movePage, isClickedList, idx }) => {
  const focusOnMenuTap = target => {
    isClickedList.forEach((menu, i) => {
      if (i !== target) {
        isClickedList[i] = false;
      } else {
        isClickedList[i] = true;
      }
    });
  };

  return (
    <div
      className={isClickedList[idx] ? 'menuTapOn' : 'menuTapOff'}
      onClick={() => {
        movePage(menu.category, 1);
        focusOnMenuTap(idx);
      }}
    >
      {menu.cate_name}
    </div>
  );
};

export default MenuTap;
