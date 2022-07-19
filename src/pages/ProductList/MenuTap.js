import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const MenuTap = ({ menu }) => {
  const [setSearchParams] = useSearchParams();

  return (
    <div
      className="menuTapOn"
      onClick={() => {
        setSearchParams({ cate_no: menu.cate_no, pg: 1 });
      }}
    >
      <Link to="/ProductList/cate_no=1&pg=1">{menu.cate_name}</Link>
    </div>
  );
};

export default MenuTap;
