# 35기 1차 프로젝트 "Magazine K"

## 프로젝트 소개
 Magazine B라는 웹 사이트를 클론코딩하는 프로젝트.
 
 - Magazine B 웹사이트에 대한 소개
 세계 최초 브랜드 다큐맨터리 매거진이고 전 세계의 균형 잡힌 브랜드를 한 호에 하나씩 소개하는 광고 없는 월간지입니다. 
 브랜드의 숨은 얘기는 물론 감성과 문화까지 담고있어 브랜드에 관심 있는 사람이라면 누구나 쉽게 웹 사이트에 들어와
 월간지를 구매할 수 있는 사이트입니다.
 
  
 - Magazine B 웹사이트의 장점
  2주라는 제한된 시간 안에 
  회원가입, 로그인, 장바구니, 결제, 배송, 찜하기, 리뷰 등 
  커머스 웹사이트라면 꼭 구현해야하는 기능을 모두 갖추고 있고
  디자인도 매우 따뜻하고 감각적인 웹사이트입니다.
  
 -------
 
 ## 작업기간,  구현기능, 사용기술 소개
 - 작업기간
 7월 18일 ~ 7월 29일 => 약 2주간의 기간동안 작업하였습니다.
 
 - 구현기능
 구현한 기능을 간략하게 소개하자면
 회원가입 후 로그인 -> 로그인 한 사용자 장바구니에 담은 후 결제 -> 베송받은 후 리뷰기능 작성
 커머스 사이트의 기본적인 FLOW를 갖추고 있습니다.
 
 - 사용기술
 Front-end: HTML, SCSS, Javascript, React, React-Router
 Back-end: Phython, Django, MySQL
 
 
 ------
 
 ## 팀원 소개
 - FRONT
 주원영, 노정은, 길현민
 
 - BACK
 김동규, 황유정
 
 
 ------
 
 ## FRONTEND 필수구현 기능
 
 ### 1. 회원가입 페이지
 
 ### 2. 로그인 페이지
 
 ### 3. 메인 페이지
 
 ### 4. 제품 리스트 페이지
 #### 카테고리 메뉴 탭 포커스온 기능 구현
  - 각 카테고리 메뉴 탭을 컴포넌트화 시키고 부모 컴포넌트에서 useState값 선언, 이 state를 props로 각 컴포넌트에 넘겨준다.
  - state값(true or false)을 활용하여 메뉴 탭이 포커스 on or off되도록 css를 설정.
  - 한 카테고리 메뉴 탭이 클릭되면 true, 나머지 메뉴 탭들은 false가 되도록 로직 구현. 
  
 #### query parameter를 이용한 카테고리별 데이터 호출
  - 카테고리 메뉴탭을 클릭하면 url에 ?category={number}의 형식으로 나타나게끔 로직을 구현하고
  - searchParams를 이용해 category 값을 받아 API의 endpoint로 요청한다.
  - 백엔드 API는 해당하는 데이터들을 전송해준다.
  
 #### pagenation 및 sort 기능 구현
  - page당 상품 갯수(limit) 버튼을 추가해 사용자가 값을 입력하면, 이 값을 API endpoint로 전달한다.
  - 이때 API로부터 전체 상품 갯수(total)를 전달받아, total과 limit을 사용해 전체 페이지 수를 구한다.
  - 전체 페이지수를 기준으로 페이지네이션 로직을 구현하고, 페이지 수를 클릭할 때마다 이값도 API에 전달해준다.
  - 백엔드 API는 limit, page, category 값을 받아 해당하는 데이터리스트를 전송한다.
  - sort 버튼을 추가해 사용자가 값을 입력하면 백엔드와 약속한 string을 API에 보내준다.
  - 백엔드 API에서 해당하는 정렬 순서로 데이터리스트를 보내준다.
  
 ### 5. 제품 상세 페이지
 
 ### 6. 네비게이션 바 
 
 #### 로그인 토큰 값을 기준으로 메뉴 탭 구성이 변경되는 기능 구현
  - 로그인 시 발급되는 토큰 값을 사용해 삼항 연산자로 메뉴탭이 변경되는 기능 구현
  
 #### 네브바의 search 메뉴 탭을 클릭하면 검색 모달창이 나오는 기능 구현
  - isClicked라는 state값을 선언 후, search 탭이 클릭되면 state값을 ture & false로 바뀌도록 구현
  - isClecked 값을 기준으로 앤드연산자를 활용해 검색창이 조건부 렌더되도록 구현
 
 #### 검색 기능 구현
  - 사용자가 검색창에서 값을 입력하면 그 값을 담은 url로 이동하도록 로직을 구현했다. (`navigate(/Search?keyword=${searchValue});`)
  - 사용자가 입력한 검색값을 query parameter를 이용해 API에 보내주고, 응답받은 필터된 데이터 리스트를 화면에 구현
 
 #### 장바구니 모달창 css 기능(슬라이드)
  - 네브바의 Cart 탭 클릭 시 모달창이 오른쪽 구석에서 슬라이드 형태로 튀어 나오도록 구현하였다.
  - boolean state를 이용해 className이 다르게 부여되도록 하였고, 이를 이용해 슬라이드 css를 적용하였다. (transition)
  - 또한, 상품리스트페이지와 상세페이지의 장바구니에 추가 버튼을 눌러도 모달창이 작동하도록,
  - 모달창을 조절하는 state값을 라우터에 선언하여 각 컴포넌트에 props로 내려주었다. (이번 프로젝트에서는 별도의 라이브러리를 사용하지 않기로 했기 때문)
  
 #### 장바구니 모달창 기능 구현
  - 모달창에 담긴 상품의 수량이 변경될때마다 API에 해당 상품과 수량에 대한 정보를 보내준다.
  - 각 상품의 총 수량과 총 가격은 API로부터 받아오지 않고 프론트단에서 구현하였다.
  - 자식 컴포넌트의 총 수량과 가격을 계산하기 위해, useState의 set함수를 활용하여 자식에서 부모 컴포넌트로 데이터를 보내주는 방식을 사용하였다.
  - 유저가 장바구니에 담긴 상품을 삭제하면 삭제를 원하는 상품에 대한 정보를 API에 보내주어 데이터베이스에서 삭제하였으며,
  - 프론트단안에서도 해당 상품을 삭제하도록 filter 메소드를 사용하였다. 
  
 ### 7. 장바구니 메인 & 결제
 
 ### 8. 푸터


-------

## 프로젝트 협업 도구
1. Trello
기능 단위로 카드를 생성하여 프로젝트가 sprint 미팅대로 잘 이루어졌는지 파악하고 stand up 미팅 활용한 도구로 활용
![image](https://user-images.githubusercontent.com/97422072/181877342-8c063ea9-3554-477b-b2b8-31b9fd5ba3bc.png)

2. Slack
팀원간의 실시간 소통 창구
![image](https://user-images.githubusercontent.com/97422072/181877235-1fb94559-52a4-403c-a3f9-4daf4c8e7b0c.png)

3. Notion
회의정리 기록, 오늘의 공유/질문 사항, 현재 진행 사항, blocker 공유, 기능 단위 페이지 셍성 후 공유 및 기록
<img width="666" alt="노정은01" src="https://user-images.githubusercontent.com/98936671/181712824-0bef2c9c-2d4f-4366-a1c6-b3cb902c4a6c.png">
<img width="518" alt="노정은02" src="https://user-images.githubusercontent.com/98936671/181712830-d63e20f0-44f1-425d-af41-cdcb4eaf467d.png">
<img width="321" alt="노정은03" src="https://user-images.githubusercontent.com/98936671/181712833-a8c7efd4-bfbb-42d2-9a40-42d827b24866.png">
<img width="308" alt="노정은04" src="https://user-images.githubusercontent.com/98936671/181712835-e4037e1f-78e4-4062-9fba-06c0eb8fbbc0.png">

 
