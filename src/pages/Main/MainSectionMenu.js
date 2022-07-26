import React from 'react';
import './MainSectionMenu.scss';
function MainSectionMenu() {
  return (
    <div className="mainSectionMenu">
      <p className="sectionTitle">shop</p>
      <div className="sectionMenu">
        <h1 className="mainMenu">Magazine K,</h1>
        <h2 className="subMenu">Design&Lifestyle, Tech</h2>
      </div>
      <div className="menuInfo">
        <div className="info">
          <img
            src="https://images.unsplash.com/photo-1657299143363-621ba0a1e6ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="1"
          />
          <div className="category">
            <span className="cate">MAGAZINE B</span>
            <span className="issueNum">ISSUE NO.82</span>
          </div>

          <div className="title">BALI</div>
          <p className="desc">
            인도네시아의 화산섬 발리는 세계 최대 무슬림 인구가 사는 본토와 달리
            주민 대부분이 힌두교를 신봉하는 독특한 지역 문화를 형성한 곳입니다.
            발리인에게 힌두교는 신앙이자 춤과 회화, 건축은 물론 문화의 전반적
            영역에 걸쳐 가장 큰 영향을 미친 사회·정신생활의 핵심입니다. 1970년대
            응우라라이 국제공항이 개발·확장되면서 발리의 1세대 이방인이라 할 수
            있는 호주...
          </p>
        </div>
        <div className="info">
          <img
            className="halfImg"
            src="https://images.unsplash.com/photo-1633445382781-b088e47ca4f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bHVsdWxlbW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            alt="1"
          />
          <div className="category">
            <span className="cate">MAGAZINE B</span>
            <span className="issueNum">ISSUE NO.56</span>
          </div>
          <div className="title">LULULEMON</div>
          <p className="desc">
            1998년 캐나다 밴쿠버에서 창립한 룰루레몬은 요가 활동에 최적화한
            팬츠를 개발하며 각광받기 시작한 운동복 브랜드입니다. 기능성과 촉감이
            탁월한 셔츠와 팬츠, 아우터, 일상복, 스포츠용품 등은 신체 활동에 따른
            움직임을 면밀히 연구한 결과물로 이를 ‘감각의 과학’이라 일컫기도
            합니다. 더불어 운동할 때뿐 아니라 회사나 일상에서도 부담 없이 입을
            수 있는 패션을 제시하며 이른바 ‘애슬레저’ 룩을 선구했다는 평가를
            받고 있습니다. 빠른 속도로 성장한 룰루레몬은 오
          </p>
        </div>
        <div className="info">
          <img
            src="https://images.unsplash.com/photo-1542272606-fe889704e0f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFpc29uJTIwa2l0c3VuZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            alt="1"
          />
          <div className="category">
            <span className="cate">MAGAZINE B</span>
            <span className="issueNum">ISSUE NO.32</span>
          </div>
          <div className="title">MAISON KITSUNE</div>
          <p className="desc">
            2002년 프랑스 파리에서 시작한 메종 키츠네는 날 선 취향으로 새로운
            뮤지션을 발굴해온 음악 레이블에서 프레피 룩의 감성을 절묘하게 이식한
            패션 하우스, 브랜드의 바이브를 담은 카페로 차근차근 브랜드의
            레퍼토리를 넓혀왔습니다. 글로벌 팬덤을 거느린 브랜드로 성장한
            이후에도 '여우'라는 뜻의 브랜드 이름처럼 자유로운 변신을 거듭하며,
            패션과 라이프스타일 영역을 섭
          </p>
        </div>
      </div>
    </div>
  );
}

export default MainSectionMenu;
