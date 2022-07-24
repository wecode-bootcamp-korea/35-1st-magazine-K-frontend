import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import SearchedProd from './SerachedProd';
import './Search.scss';

const Search = () => {
  const [searchedProdList, setSearchedProdList] = useState([]);
  const [searchParams, setsearchParams] = useSearchParams();
  const [isfilled, setIsfilled] = useState(true);
  const navigate = useNavigate();
  const searchValue = searchParams.get('keyword');

  useEffect(() => {
    fetch('/data/SearchProd.json')
      .then(res => res.json())
      .then(res => setSearchedProdList(res));
  }, []);

  useEffect(() => {
    setIsfilled(searchValue ? true : false);
  }, [searchValue]);

  return (
    <div className="search">
      <form
        className="searchContainer"
        onSubmit={e => {
          const keyword = e.target.keyword.value;
          fetch(`keyword=${keyword}`);
          navigate(`/Search?${keyword}`);
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
          {searchedProdList.map(prod => {
            return <SearchedProd key={prod.id} prod={prod} />;
          })}
        </div>
      )}
      {!isfilled && <div className="noResult">검색 결과가 없습니다.</div>}
    </div>
  );
};

export default Search;
