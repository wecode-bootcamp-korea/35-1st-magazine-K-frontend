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
          // fetch(`http://10.58.4.28:8000/search?keyword=${search.title}`);
          //   .then(res => res.json())
          //   .then(res => {
          //     if (res.message === 'SUCCESS') {
          navigate(`/Search?keyword=${search.title}`);
          window.location.reload();
          //   }
          // });
        }}
      >
        {search.title}
      </li>
    </ul>
  );
};

export default PopularSearch;
