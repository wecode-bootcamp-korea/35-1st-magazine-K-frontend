import React, { useState } from 'react';
import './Review.scss';
import Comment from './Commnet';

function Review() {
  const [selected, setSelected] = useState('');
  const [selectedIndex, setSelectedIndex] = useState();
  const [value, setValue] = useState('');
  const [comments, setComments] = useState([]);

  const getTextareaValue = e => {
    setValue(e.target.value);
  };

  const addComment = e => {
    e.preventDefault();
    const copyComments = [...comments];
    if (value.length < 6) {
      alert('리뷰를 5글자 이상 입력해주세요.');
    }
    copyComments.push(value);
    setComments(copyComments);
    setValue('');
  };

  const changeSelect = e => {
    setSelectedIndex(e.target.value);
    setSelected(e.target.options[e.target.selectedIndex].text);
  };

  return (
    <div className="reviewContainer">
      <div className="reviewTitle">
        <div className="review">REVIEW</div>
        <hr />
      </div>
      <form className="reviewForm" onSubmit={addComment}>
        <div className="textarea">
          <textarea
            id="reviewTextarea"
            name="reviewTextarea"
            rows="5"
            placeholder="리뷰를 작성해주세요."
            onChange={getTextareaValue}
          />
        </div>
        <div className="click">
          <span className="selectBox">
            <select
              onChange={changeSelect}
              className="reviewSelect"
              value={selectedIndex}
            >
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
        {comments.map((comment, i) => {
          return (
            <Comment
              key={comment + i + 1}
              comment={comment}
              selected={selected}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Review;
