import React from 'react';
import './MainSlide.scss';

function MainSlide({
  mainSlideData,
  prevSlide,
  nextSlide,
  isFirstSlide,
  isLastSlide,
  slide,
}) {
  return (
    <>
      <button onClick={prevSlide} className="numLeft" disabled={isFirstSlide}>
        prev
      </button>
      <button onClick={nextSlide} className="numRight" disabled={isLastSlide}>
        next
      </button>
      <div className="num">
        <h1 className="prevNum">{slide}</h1>
        <h1 className="nextNum">3</h1>
      </div>
      <div className="slideInfo">
        <span className="title">{mainSlideData.main_category_name}</span>
        <span className="issueNum">ISSUE NO.{mainSlideData.issue_number}</span>
        <div>{mainSlideData.title}</div>
        <p>
          {mainSlideData.p1}
          <br />
          {mainSlideData.p2}
        </p>
        <span className="shopNow">SHOP NOW</span>
      </div>
    </>
  );
}

export default MainSlide;
