import React from 'react';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchedProd from './SerachedProd';
import './Search.scss';

const Search = () => {
  const [searchedProdList, setSearchedProdList] = useState([]);
  const [searchParams, setsearchParams] = useSearchParams();

  useEffect(() => {
    fetch('/data/SearchProd.json')
      .then(res => res.json())
      .then(res => setSearchedProdList(res));
  });

  return (
    <div className="search">
      <form className="searchContainer" onSubmit={() => {}}>
        <input
          className="searchBar"
          type="text"
          placeholder="Search Brand, City, Food..."
          autoFocus
        />
      </form>
      <div className="searchedProdsContainer">
        {searchedProdList.map(prod => {
          return <SearchedProd key={prod.id} prod={prod} />;
        })}
      </div>
    </div>
  );
};

export default Search;
