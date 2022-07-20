import { useSearchParams } from 'react-router-dom';
import './MenuTap.scss';

const MenuTap = ({ menu, movePage }) => {
  const [, setSearchParams] = useSearchParams();

  return (
    <div
      className="menuTapOn"
      onClick={() => {
        setSearchParams({ cate_no: menu.cate_no, pg: 1 });
        movePage(menu.cate_no, 1);
      }}
    >
      {menu.cate_name}
    </div>
  );
};

export default MenuTap;
