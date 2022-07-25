import './MenuTap.scss';

const MenuTap = ({ menu, movePage }) => {
  return (
    <div
      className="menuTapOn"
      onClick={() => {
        movePage(menu.category, 1, 0);
      }}
    >
      {menu.cate_name}
    </div>
  );
};

export default MenuTap;
