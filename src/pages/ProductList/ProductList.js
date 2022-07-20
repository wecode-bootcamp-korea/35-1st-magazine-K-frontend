import React from 'react';
import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import MenuTap from './MenuTap';
import Product from './Product';
import PageList from './PageList';
import './ProductList.scss';

const ProductList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [menuTapList, setMenuTapList] = useState([]);
  const [prodList, setProdList] = useState([]);
  const [limit] = useState(5);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  const cate_no = searchParams.get('cate_no');
  const pg = searchParams.get('pg');
  const total = prodList.length;
  const pageNum = Math.ceil(total / limit);
  const movePrev = () => {
    return parseInt(pg) - 1 ? parseInt(pg) - 1 : 1;
  };
  const moveNext = () => {
    return parseInt(pg) === pageNum ? pg : parseInt(pg) + 1;
  };
  useEffect(() => {
    setSearchParams({ cate_no: 43, pg: 1 });
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
          <MenuTap key={menu.cate_no} menu={menu} setPage={setPage} />
        ))}
      </div>
      <div className="prodlistContainer">
        {prodList.slice(offset, limit * page).map((prod, idx) => (
          <Product key={prod.issue_number} prod={prod} />
        ))}
        <ul className="pageLinkContainer">
          <PageList
            page={page}
            total={total}
            setPage={setPage}
            moveNext={moveNext()}
            movePrev={movePrev()}
            cate_no={cate_no}
            limit={limit}
          />
        </ul>
      </div>
    </div>
  );
};

export default ProductList;
