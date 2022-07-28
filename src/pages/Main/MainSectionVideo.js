import React, { useEffect, useRef } from 'react';
import './MainSectionVideo.scss';

export default function MainSectionVideo() {
  const videoEl = useRef(null);

  const mainVideoPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error('Error attempting to play', error);
      });
  };

  useEffect(() => {
    mainVideoPlay();
  }, []);

  return (
    <>
      <div className="mainVideo">
        <video
          style={{ maxWidth: '100%', width: '100%', margin: '0 auto' }}
          playsInline
          loop
          muted
          // controls
          alt="All the devices"
          src="https://player.vimeo.com/progressive_redirect/playback/520427372/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=2b803b53f7f8fbc77ef6ba46a45e2927ccdcfbe46801953c0707cd63d44c359d"
          ref={videoEl}
        />
      </div>
      <div className="slideInfo">
        <span className="title">Magazine B</span>
        <span className="issueNum">ISSUE NO.89</span>
        <div>ARC'TERYX</div>
        <p>
          시조새의 학명 '아르카이옵테릭스 리토그라피카'를 모티브로 지은
          브랜드명은 제조를 기반으로 두며 진화적 접근법을 취하는 아크테릭스의
          태도를 담고 있습니다.
        </p>
        <span className="shopNow">SHOP NOW</span>
      </div>
    </>
  );
}
