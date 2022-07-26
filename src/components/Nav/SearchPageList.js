import React from 'react';
import './SearchPageList.scss';

const SearchPageList = ({
  total,
  limit,
  pgNext,
  pgPrev,
  scrollUp,
  movePage,
}) => {
  const pageNum = Math.ceil(total / limit);

  return (
    <ul className="pageLinkContainer">
      <li>
        <img
          className="pageLinkPrev"
          src="/images/prev.png"
          alt="prev"
          onClick={() => {
            movePage(pgPrev);
          }}
        />
      </li>
      {Array(pageNum)
        .fill()
        .map((el, idx) => {
          return (
            <span
              key={idx}
              className="pageLink"
              onClick={() => {
                movePage(idx + 1);
                scrollUp();
              }}
            >
              {idx + 1}
            </span>
          );
        })}
      <li>
        <img
          className="pageLinkNext"
          src="/images/next.png"
          alt="next"
          onClick={() => {
            movePage(pgNext);
          }}
        />
      </li>
    </ul>
  );
};

export default SearchPageList;
