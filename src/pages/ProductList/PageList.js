import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const PageList = ({ total, limit, setPage, moveNext, movePrev, cate_no }) => {
  const navigate = useNavigate();
  const pageNum = Math.ceil(total / limit);
  return (
    <>
      <li>
        <Link to={`?cate_no=${cate_no}&pg=${movePrev}`} disabled>
          <img className="pageLinkPrev" src="/images/prev.png" alt="prev" />
        </Link>
      </li>
      {Array(pageNum)
        .fill()
        .map((el, idx) => {
          return (
            <span
              key={idx}
              className="pageLink"
              onClick={() => {
                setPage(idx + 1);
                navigate(`?cate_no=${cate_no}&pg=${idx + 1}`);
              }}
            >
              {idx + 1}
            </span>
          );
        })}
      <li>
        <Link to={`?cate_no=${cate_no}&pg=${moveNext}`}>
          <img className="pageLinkNext" src="/images/next.png" alt="next" />
        </Link>
      </li>
    </>
  );
};

export default PageList;
