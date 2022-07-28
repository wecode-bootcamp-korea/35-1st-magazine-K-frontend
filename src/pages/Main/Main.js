import React, { useState, useEffect } from 'react';
import './Main.scss';
import MainSlide from './MainSlide';
import MainSectionMenu from './MainSectionMenu';
import MainSectionVideo from './MainSectionVideo';

function Main() {
  const [slide, setSlide] = useState(1);
  const [mainSlideData, setMainSlideData] = useState([]);

  useEffect(() => {
    fetch('/data/mainSlideData.json')
      .then(res => res.json())
      .then(data => {
        const sameNumData = data.filter(data => {
          return data.id === slide;
        });
        setMainSlideData(() => sameNumData);
      });

    const interval = setInterval(() => {
      setSlide(slide => slide + 1);
    }, 3000);
    if (slide > 3) {
      setSlide(1);
    }
    return () => {
      clearInterval(interval);
    };
  }, [slide]);

  const prevSlide = () => {
    setSlide(slide => slide - 1);
  };

  const nextSlide = () => {
    setSlide(slide => slide + 1);
  };

  const isFirstSlide = slide === 1;
  const isLastSlide = slide === 3;

  return (
    <>
      <div className="slideContainer">
        <div className="slideImg">
          <img src={`/images/main/mainSlide${slide}.jpg`} alt="mainSlide1" />
          {mainSlideData.map(mainSlideData => {
            return (
              <MainSlide
                key={mainSlideData.id}
                mainSlideData={mainSlideData}
                prevSlide={prevSlide}
                nextSlide={nextSlide}
                isFirstSlide={isFirstSlide}
                isLastSlide={isLastSlide}
                slide={slide}
              />
            );
          })}
        </div>
      </div>
      <MainSectionMenu />
      <MainSectionVideo />
    </>
  );
}
export default Main;
