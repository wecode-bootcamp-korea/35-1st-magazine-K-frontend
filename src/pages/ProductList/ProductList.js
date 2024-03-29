import React from 'react';
import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import MenuTap from './MenuTap';
import Product from './Product';
import PageList from './PageList';
import './ProductList.scss';

const ProductList = ({ modalState, setModalState }) => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [prodList, setProdList] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [limit, setLimit] = useState(10);
  const [sort, setSort] = useState('latest_issue');
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

  const scrollUp = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  const getProductList = () => {
    fetch(
      `http://10.58.3.49:8000/products?category=${parseInt(
        category
      )}&offset=${offset}&limit=${limit}&sort_by=${sort}`
    )
      .then(res => res.json())
      .then(res => {
        setTotal(res.result[0].total_count);
        setProdList(res.result[0].products);
      });
  };

  useEffect(() => {
    setSearchParams({ category: 1 });
  }, []);

  useEffect(() => {
    getProductList();
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
            scrollUp={scrollUp}
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
                scrollUp();
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
                scrollUp();
              }}
            >
              <option>SORT BY</option>
              <option value="latest_issue">최신순</option>
              <option value="oldest_issue">오래된 순</option>
              <option value="high_price">높은가격 순</option>
              <option value="low_price">낮은가격 순</option>
            </select>
          </div>
        </div>
      </div>
      <div className="prodlistContainer">
        {/* {prodList.slice(offset, limit * page).map(prod => ( */}
        {prodList.map(prod => (
          <Product
            key={Math.random()}
            prod={prod}
            category={category}
            modalState={modalState}
            setModalState={setModalState}
          />
        ))}
        <PageList
          total={total}
          movePage={movePage}
          pgNext={pgNext}
          pgPrev={pgPrev}
          category={category}
          limit={limit}
          scrollUp={scrollUp}
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
