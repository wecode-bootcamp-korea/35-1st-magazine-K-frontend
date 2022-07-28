import React, { useEffect, useState } from 'react';
import './Review.scss';
import { useParams } from 'react-router-dom';
import Comment from './Comment';

function Review() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [commentText, setCommentText] = useState('');
  const [comment, setComment] = useState([]);
  const [reviewData, setReviewData] = useState([]);
  let { product_id } = useParams();

  useEffect(() => {
    setComment(reviewData);
  }, [reviewData]);
  // console.log(reviewData);

  useEffect(() => {
    fetch(`http://10.58.4.114:8000/products/${product_id}/reviews`)
      .then(res => res.json())
      .then(data => {
        setReviewData(data.RESULTS);
        // setReviewData(data.RESULTS.reviews);
        // console.log(data.RESULTS);
      });
  }, []);

  const getCommentText = e => {
    setCommentText(e.target.value);
  };

  const addReview = e => {
    if (commentText.length < 6) {
      alert('5글자 이상을 입력해주세요');
      setCommentText('');
    } else if (rating === 0) {
      alert('별점을 선택해주세요.');
    } else {
      const textareaObj = {
        username: 'aa11',
        content: commentText,
        rating: rating,
      };

      // window.location.reload();

      fetch(`http://10.58.4.114:8000/products/${product_id}/reviews`, {
        //사용할 http 메소드
        method: 'POST',
        //토큰
        headers: {
          Authorization:
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJJRCI6Mn0.o_wFDI-SqSVi5OEw7Bzjv7cKOJHc85ErxtbMyNz1S1c',
        },
        //서버에 보낼 데이터 (별점, 리뷰)
        body: JSON.stringify({
          rating: rating,
          content: commentText,
        }),
      })
        .then(res => res.json())
        .then(data => {
          if (data.MESSAGE === 'SUCCESS') {
            const copyComment = [...comment, textareaObj];
            setComment(copyComment);
            setCommentText('');
          } else {
            alert('구매하셔야 리뷰등록 가능합니다!');
            setCommentText('');
          }
        });
    }
  };

  return (
    <div className="reviewContainer">
      <div className="reviewTitle">
        <div className="review">REVIEW</div>
        <div className="reviewH1">이 Megazine에 대해 리뷰해주세요!</div>
        <div className="starRating">
          {[...Array(5)].map((star, index) => {
            index += 1;
            return (
              <button
                type="button"
                id={index}
                key={index}
                className={index <= (hover || rating) ? 'on' : 'off'}
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
              >
                <span className="star">&#9733;</span>
              </button>
            );
          })}
        </div>
        <hr />
      </div>
      <div className="reviewForm">
        <div className="textarea">
          <textarea
            id="reviewTextarea"
            name="reviewTextarea"
            onChange={getCommentText}
            value={commentText}
            rows="5"
            placeholder="리뷰를 작성해주세요."
          />
        </div>
        <div className="click">
          <button className="reviewSubmit" onClick={addReview}>
            리뷰등록
          </button>
        </div>
      </div>
      <div className="reviewHr">
        <hr />
      </div>
      <div className="commentBox">
        {comment.map((data, i) => {
          return <Comment key={i} data={data} />;
        })}
      </div>
    </div>
  );
}

export default Review;
