import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PopularSearch.scss';

const PopularSearch = ({ search }) => {
  const navigate = useNavigate();
  return (
    <ul className="popularSearch">
      <li
        className="popularSearches"
        onClick={() => {
          navigate(`/Search?keyword=${search.title}`);
          window.location.reload();
        }}
      >
        {search.title}
      </li>
    </ul>
  );
};

export default PopularSearch;
