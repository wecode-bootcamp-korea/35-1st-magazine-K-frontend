import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import SearchedProd from './SearchedProd';
import SearchPageList from './SearchPageList';
import './Search.scss';

const Search = () => {
  const [productList, setProductList] = useState([]);
  const [searchParams] = useSearchParams();
  const [isfilled, setIsfilled] = useState(true);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);

  const navigate = useNavigate();
  const searchValue = searchParams.get('keyword');
  const limit = 12;
  const pageNum = Math.ceil(total / limit);
  let offset = (page - 1) * limit;

  const pgPrev = parseInt(page) - 1 ? parseInt(page) - 1 : 1;
  const pgNext = parseInt(page) === pageNum ? page : parseInt(page) + 1;

  const moveToSearch = e => {
    const searchValue = e.target.keyword.value;
    navigate(`/Search?keyword=${searchValue}`);
  };

  const scrollUp = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  const movePage = page => {
    setPage(() => page);
    offset = (page - 1) * limit;
  };

  const confirmSearchValueIsVaild = () => {
    if (!searchValue) {
      setIsfilled(searchValue ? true : false);
    } else if (productList.length === 0) {
      setIsfilled(false);
    } else {
      setIsfilled(true);
    }
  };

  const getSearchData = () => {
    fetch(
      `http://10.58.3.49:8000/products?offset=${offset}&limit=${limit}&keyword=${searchValue}`
    )
      .then(res => res.json())
      .then(res => {
        setProductList(res.result[0].products);
        setTotal(res.result[0].total_count);
      });
  };

  useEffect(() => {
    getSearchData();
  }, [offset, limit, searchValue]);

  useEffect(() => {
    confirmSearchValueIsVaild();
  }, [searchValue, productList.length]);

  return (
    <div className="search">
      <form
        className="searchContainer"
        onSubmit={e => {
          moveToSearch(e);
        }}
      >
        <input
          className="searchBar"
          type="text"
          name="keyword"
          placeholder="Search Brand, City, Food..."
          defaultValue={searchValue}
          autoFocus
        />
      </form>
      {isfilled && (
        <div className="searchedProdsContainer">
          {productList.map(prod => {
            return <SearchedProd key={prod.id} prod={prod} />;
          })}
          <SearchPageList
            total={total}
            pgNext={pgNext}
            pgPrev={pgPrev}
            limit={limit}
            scrollUp={scrollUp}
            movePage={movePage}
          />
        </div>
      )}
      {!isfilled && <div className="noResult">검색 결과가 없습니다.</div>}
    </div>
  );
};

export default Search;
