import React from 'react';
import './PageList.scss';

const PageList = ({
  total,
  limit,
  movePage,
  pgNext,
  pgPrev,
  category,
  scrollUp,
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
            movePage(category, pgPrev);
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
                movePage(category, idx + 1);
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
            movePage(category, pgNext);
          }}
        />
      </li>
    </ul>
  );
};

export default PageList;
