import React from 'react';
import { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import MenuTap from './MenuTap';
import Product from './Product';
import './ProductList.scss';

const ProductList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [menuTapList, setMenuTapList] = useState([]);
  const [prodList, setProdList] = useState([]);
  const cate_no = searchParams.get('detail');
  const pg = searchParams.get('mode');

  useEffect(() => {
    setSearchParams({ cate_no: 43, pg: 1 });
  }, [setSearchParams]);

  useEffect(() => {
    fetch(`/data/prodListMagazineK.json`)
      .then(res => res.json())
      .then(res => setProdList(res));
  }, []);

  useEffect(() => {
    fetch(`/data/menuTapList.json`)
      .then(res => res.json())
      .then(res => setMenuTapList(res));
  }, []);

  return (
    <div className="productListPage">
      <div className="menuTapContainer">
        {menuTapList.map(menu => (
          <MenuTap key={menu.cate_no} menu={menu} />
        ))}
      </div>
      <div className="prodlistContainer">
        {prodList.map(prod => (
          <Product key={prod.issue_number} prod={prod} />
        ))}
        <ul>
          <li>
            <Link
              to={`cate_no=${cate_no}&pg=${pg - 1}`}
              className="pageLinkPrev"
            >
              <img src="/images/prev.png" alt="prev" />
            </Link>
          </li>
          <li>
            <Link
              to={`cate_no=${cate_no}&pg=${pg + 1}`}
              className="pageLinkNext"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductList;
