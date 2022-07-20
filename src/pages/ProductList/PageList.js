import React from 'react';
import './PageList.scss';

const PageList = ({ total, limit, movePage, pgNext, pgPrev, cate_no }) => {
  const pageNum = Math.ceil(total / limit);

  return (
    <ul className="pageLinkContainer">
      <li>
        <img
          className="pageLinkPrev"
          src="/images/prev.png"
          alt="prev"
          onClick={() => {
            movePage(cate_no, pgPrev);
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
                movePage(cate_no, idx + 1);
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
            movePage(cate_no, pgNext);
          }}
        />
      </li>
    </ul>
  );
};

export default PageList;
