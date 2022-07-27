import React from 'react';
import './Comment.scss';

function Comment({ data: { content, username, rating } }) {
  const changeNum = Number(rating);
  // const changeNumToStart = rating => {
  //   // console.log(rating);
  //   // console.log(typeof rating);
  //   if (rating === ('1.0' || 1)) {
  //     return '⭑';
  //   } else if (rating === ('2.0' || 2)) {
  //     return '⭑⭑';
  //   } else if (rating === ('3.0' || 3)) {
  //     return '⭑⭑⭑';
  //   } else if (rating === ('4.0' || 4)) {
  //     return '⭑⭑⭑⭑';
  //   } else if (rating === ('5.0' || 5)) {
  //     return '⭑⭑⭑⭑⭑';
  //   }
  // };

  return (
    <>
      <div className="commentBox">
        <div className="commentItem">
          <div className="userInfo">
            <div className="star">{STAR[changeNum - 1]}</div>
            <div className="comment">{content}</div>
            <p className="userId">{username}</p>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Comment;

const STAR = ['⭑', '⭑⭑', '⭑⭑⭑', '⭑⭑⭑⭑', '⭑⭑⭑⭑⭑'];
