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
  // const [menuTapList, setMenuTapList] = useState([]);
  const [prodList, setProdList] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  const cate_no = searchParams.get('cate_no');
  const pg = searchParams.get('pg');
  const limit = 5;
  // const offset = page * limit;
  const pageNum = Math.ceil(total / limit);

  const pgPrev = parseInt(pg) - 1 ? parseInt(pg) - 1 : 1;
  const pgNext = parseInt(pg) === pageNum ? pg : parseInt(pg) + 1;
  const movePage = (cate_no, pg) => {
    setPage(() => pg);
    navigate(`?cate_no=${cate_no}&pg=${pg}`);
  };

  useEffect(() => {
    setSearchParams({ cate_no: 1, pg: 1 });
  }, [setSearchParams]);

  useEffect(() => {
    // data/cate_no=${parseInt(cate_no)}&pg=${pg}.json
    fetch(
      `http://10.58.4.28:8000/products/main?category=${parseInt(
        cate_no
      )}&page=${parseInt(pg)}`
    )
      .then(res => res.json())
      .then(res => {
        const prodNum = res.result.length - 1;
        const dataList = res.result.slice(0, prodNum);
        const total = res.result[prodNum].category_total;

        setTotal(total);
        setProdList(dataList);
      });
  }, [cate_no, pg]);

  // useEffect(() => {
  //   fetch(`/data/menuTapList.json`)
  //     .then(res => res.json())
  //     .then(res => setMenuTapList(res));
  // }, []);

  return (
    <div className="productListPage">
      <div className="menuTapContainer">
        {MENU_LIST.map(menu => (
          <MenuTap key={menu.cate_no} menu={menu} movePage={movePage} />
        ))}
      </div>
      <div className="prodlistContainer">
        {/* {prodList.slice(offset, limit * page).map(prod => ( */}
        {prodList.map(prod => (
          <Product key={Math.random()} prod={prod} />
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

const MENU_LIST = [
  {
    cate_no: 44,
    cate_name: 'Magazine K',
  },
  {
    cate_no: 1,
    cate_name: 'Fashion',
  },
  {
    cate_no: 2,
    cate_name: 'Beauty',
  },
  {
    cate_no: 3,
    cate_name: 'Design Lifestyle',
  },
  {
    cate_no: 4,
    cate_name: 'Food',
  },
];
