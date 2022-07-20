import React from 'react';
import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import MenuTap from './MenuTap';
import Product from './Product';
import PageList from './PageList';
import './ProductList.scss';

const ProductList = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [menuTapList, setMenuTapList] = useState([]);
  const [prodList, setProdList] = useState([]);
  const [page, setPage] = useState(1);

  const cate_no = searchParams.get('cate_no');
  const pg = searchParams.get('pg');
  const limit = 5;
  const offset = (page - 1) * limit;
  const total = prodList.length;
  const pageNum = Math.ceil(total / limit);

  const pgPrev = parseInt(pg) - 1 ? parseInt(pg) - 1 : 1;
  const pgNext = parseInt(pg) === pageNum ? pg : parseInt(pg) + 1;
  const movePage = (cate_no, pg) => {
    setPage(() => pg);
    navigate(`?cate_no=${cate_no}&pg=${pg}`);
  };

  useEffect(() => {
    setSearchParams({ cate_no: 44, pg: 1 });
  }, [setSearchParams]);

  useEffect(() => {
    fetch(`/data/cate_no=${parseInt(cate_no)}&pg=${pg}.json`)
      .then(res => res.json())
      .then(res => setProdList(res));
  }, [cate_no, pg]);

  useEffect(() => {
    fetch(`/data/menuTapList.json`)
      .then(res => res.json())
      .then(res => setMenuTapList(res));
  }, []);

  return (
    <div className="productListPage">
      <div className="menuTapContainer">
        {menuTapList.map(menu => (
          <MenuTap key={menu.cate_no} menu={menu} movePage={movePage} />
        ))}
      </div>
      <div className="prodlistContainer">
        {prodList.slice(offset, limit * page).map(prod => (
          <Product key={prod.issue_number} prod={prod} />
        ))}
        <PageList
          page={page}
          total={total}
          movePage={movePage}
          pgNext={pgNext}
          pgPrev={pgPrev}
          cate_no={cate_no}
          limit={limit}
        />
      </div>
    </div>
  );
};

export default ProductList;
