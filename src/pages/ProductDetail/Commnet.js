import React from 'react';
import './Comment.scss';

function Comment({ comment, selected }) {
  console.log(comment);
  return (
    <>
      <div className="commentBox">
        <div className="commentItem">
          <div className="comment">{comment}</div>
          <div className="userInfo">
            <div className="star">{selected}</div>
            <p className="userId">유저ID</p>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Comment;
