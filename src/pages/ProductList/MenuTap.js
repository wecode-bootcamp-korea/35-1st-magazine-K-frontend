import './MenuTap.scss';

const MenuTap = ({ menu, movePage }) => {
  return (
    <div
      className="menuTapOn"
      onClick={() => {
        // setSearchParams({ category: menu.category, page: 1 });
        movePage(menu.category, 1, 0);
      }}
    >
      {menu.cate_name}
    </div>
  );
};

export default MenuTap;
