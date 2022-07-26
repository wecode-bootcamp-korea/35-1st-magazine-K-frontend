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
  const [prodList, setProdList] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(10);
  const [sort, setSort] = useState(0);
  const [isClickedList, setIsClickedList] = useState([]);

  const category = searchParams.get('category');
  const pageNum = Math.ceil(total / limit);
  let offset = (page - 1) * limit;

  const pgPrev = parseInt(page) - 1 ? parseInt(page) - 1 : 1;
  const pgNext = parseInt(page) === pageNum ? page : parseInt(page) + 1;
  const movePage = (category, page) => {
    setPage(() => page);
    offset = (page - 1) * limit;
    navigate(`?category=${category}`);
  };

  useEffect(() => {
    setSearchParams({ category: 1 });
  }, []);

  useEffect(() => {
    fetch(
      `http://10.58.4.28:8000/products?category=${category}&offset=${offset}&limit=${limit}&sort=${sort}`
      // `/data/cate_no=44&pg=1.json`
    )
      .then(res => res.json())
      .then(res => {
        const prodNum = res.result.length - 1;
        const dataList = res.result.slice(0, prodNum);
        const total = res.result[prodNum].category_total;
        setTotal(total);
        setProdList(dataList);

        // setProdList(res);
        // setTotal(36);
      });
  }, [category, offset, limit, sort]);

  useEffect(() => {
    setIsClickedList(Array(MENU_LIST.length).fill(true));
  }, []);

  return (
    <div className="productListPage">
      <div className="menuTapContainer">
        {MENU_LIST.map((menu, idx) => (
          <MenuTap
            key={menu.category}
            menu={menu}
            movePage={movePage}
            isClickedList={isClickedList}
            idx={idx}
          />
        ))}
        <div className="prodNumPerPage">
          <span className="totalNum">TOTAL {total}</span>
          <div className="numPerPageWrapper">
            <span className="numPerPageText">NUMBER PER PAGE</span>
            <select
              className="numPerPage"
              onChange={e => {
                setLimit(e.target.value);
              }}
              defaultValue="10"
            >
              <option>5</option>
              <option>10</option>
              <option>20</option>
            </select>
          </div>
          <div className="sortWrapper">
            <select
              className="sort"
              onChange={e => {
                setSort(e.target.value);
              }}
            >
              <option>SORT BY</option>
              <option value="0">최신순</option>
              <option value="1">오래된 순</option>
              <option value="2">높은가격 순</option>
              <option value="3">낮은가격 순</option>
            </select>
          </div>
        </div>
      </div>
      <div className="prodlistContainer">
        {/* {prodList.slice(offset, limit * page).map(prod => ( */}
        {prodList.map(prod => (
          <Product key={Math.random()} prod={prod} category={category} />
        ))}
        <PageList
          total={total}
          movePage={movePage}
          pgNext={pgNext}
          pgPrev={pgPrev}
          category={category}
          limit={limit}
        />
      </div>
    </div>
  );
};

export default ProductList;

const MENU_LIST = [
  {
    category: 1,
    cate_name: 'Magazine K',
  },
  {
    category: 2,
    cate_name: 'Fashion',
  },
  {
    category: 3,
    cate_name: 'Beauty',
  },
  {
    category: 4,
    cate_name: 'Design Lifestyle',
  },
  {
    category: 5,
    cate_name: 'Food',
  },
];
