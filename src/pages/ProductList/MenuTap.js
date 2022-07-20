import { useSearchParams } from 'react-router-dom';
import { useNavigate, Link } from 'react-router-dom';

const MenuTap = ({ menu, setPage }) => {
  const [, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  return (
    <div
      className="menuTapOn"
      onClick={() => {
        setSearchParams({ cate_no: menu.cate_no, pg: 1 });
        setPage(1);
        navigate(`?cate_no=${menu.cate_no}&pg=1`);
      }}
    >
      {menu.cate_name}
    </div>
  );
};

export default MenuTap;
