import React from 'react';
import './Comment.scss';

function Comment() {
  return (
    <>
      <div className="commentBox">
        <div className="commentItem">
          <div className="comment">항상 쓰던 제품이에요! 너무 좋네요.</div>
          <div className="userInfo">
            <div className="star">별별별별별</div>
            <p className="userId">유저ID</p>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Comment;
