import React from 'react';
import './Review.scss';
import Comment from './Commnet';

function Review() {
  const changeReview = () => {
    console.log('a');
  };
  return (
    <div className="reviewContainer">
      <div className="reviewTitle">
        <div className="review">REVIEW</div>
        <hr />
      </div>
      <form className="reviewForm">
        <div className="textarea">
          <textarea
            id="reviewTextarea"
            name="reviewTextarea"
            rows="5"
            placeholder="리뷰를 작성해주세요."
          />
        </div>
        <div className="click">
          <span className="selectBox">
            <select onChange={changeReview} className="reviewSelect">
              <option value="1">⭑</option>
              <option value="2">⭑⭑</option>
              <option value="3">⭑⭑⭑</option>
              <option value="4">⭑⭑⭑⭑</option>
              <option value="5">⭑⭑⭑⭑⭑</option>
            </select>
          </span>
          <input className="reviewSubmit" type="submit" value="리뷰등록" />
        </div>
      </form>
      <div className="reviewHr">
        <hr />
      </div>
      <div className="commentBox">
        <Comment />
      </div>
    </div>
  );
}

export default Review;
