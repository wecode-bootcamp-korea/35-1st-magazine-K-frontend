# 35기 1차 프로젝트 "Magazine K"

> [Magazine B 웹 사이트](http://foaflsawsbucket.s3-website.ap-northeast-2.amazonaws.com/)<br/>


## 🌟 프로젝트 소개
<img width="1439" alt="스크린샷 2022-08-16 오후 2 19 36" src="https://user-images.githubusercontent.com/78889402/184803568-0e8fb77a-e3b2-4ace-a9e6-69b5af173b29.png">

 Magazine B라는 웹 사이트를 클론코딩하는 프로젝트.
 
 - Magazine B 웹사이트에 대한 소개 <br />
 세계 최초 브랜드 다큐맨터리 매거진이고 전 세계의 균형 잡힌 브랜드를 한 호에 하나씩 소개하는 광고 없는 월간지입니다. <br /> 
 브랜드의 숨은 얘기는 물론 감성과 문화까지 담고있어 브랜드에 관심 있는 사람이라면 누구나 쉽게 웹 사이트에 들어와 <br />
 월간지를 구매할 수 있는 사이트입니다.
 
  
 - Magazine B 웹사이트의 장점 <br />
  2주라는 제한된 시간 안에 커머스 웹사이트를 구현해야합니다.<br />
  Magazine B 웹사이트는 간단한 웹사이트처럼 보이지만 <br />
  회원가입, 로그인, 장바구니, 결제, 배송, 찜하기, 리뷰 등 <br /> 
  커머스 웹사이트라면 꼭 구현해야하는 기능을 모두 갖추고 있고 <br />
  디자인도 매우 따뜻하고 감각적인 웹사이트입니다.
  
 -------
 
 ## 📅 작업기간,  구현기능, 사용기술 소개
 - 작업기간 <br />
 7월 18일 ~ 7월 29일 => 약 2주간의 기간동안 작업하였습니다.
 
 - 구현기능 <br />
 구현한 기능을 간략하게 소개하자면<br />
 회원가입 후 로그인 -> 로그인 한 사용자 장바구니에 담은 후 결제 -> 베송받은 후 리뷰기능 작성<br />
 커머스 사이트의 기본적인 FLOW를 갖추고 있습니다.
 
 - 사용기술<br />
 Front-end: HTML, SCSS, Javascript, React, React-Router<br />
 Back-end: Phython, Django, MySQL
 

 ------
 
 ## 👩🏻‍💻 팀원 소개
 - FRONT
 주원영, 노정은, 길현민
 
 - BACK
 김동규, 황유정
 
 ## 👩🏻‍💻 FRONTEND 각 담당페이지
 #### [주원영님](), [노정은님](https://jeongeuni.tistory.com/47), [길현민님]() - (클릭 시 블로그로 이동!) <br> 
 
 - 주원영 : 네비게이션 바 , 상품 리스트 페이지, 장바구니 모달, 검색, 결제
 - 노정은 : 메인 페이지, 상품 상세 페이지, 장바구니 모달, 푸터, 리뷰
 - 길현민 : 로그인, 회원가입, 장바구니 메인, 결제
 ------
 
 ## 👍🏻 FRONTEND 필수구현 기능
 
 ### 1. 회원가입 페이지
 
 ### 2. 로그인 페이지
 
 ### 3. 메인 페이지
 #### Carousel (이미지 슬라이드) 기능 구현
 - setinterval 함수 사용하여 3초 마다 슬라이드 이미지가 자동 변환되도록 구현했고 useState로 숫자 3이 넘어가면 1부터 다시 시작하도록 설정했다.
 - 슬라이드 이미지의 오른쪽을 누르면 앞의 이미지로, 왼쪽을 누르면 뒤의 이미지로 변환하는데 이는 button태그로 오른쪽 반, 왼쪽 반 각각 넓이를 50%씩 주고 opacity: 0으로 안보이게 처리하였다.
 - 또한 const isFirstSlide = slide === 1; const isLastSlide = slide === 3;로 변수를 만들어 1과 3에서는 버튼을 눌러도 안넘어 가도록 disabled에 할당해주었다.
 - 슬라이드가 변환될 때 각 이미지에 맞는 데이터가 출력되도록 해야한다. 이는 데이터에 filter메서드를 걸어 data.id와 slide의 숫자가 같을 때만 리턴하도록 해서 구현할 수 았었다.
  
#### MainSectionMenu 페이지 이동 기능 구현
- MainSectionMenu에 이미지를 누르면 navigate함수가 실행되어 해당 제품의 issue_number로 이동하도록 설정했다. -> navigate(`Products/${issue_number}`);
- MainSectionMenu 하단의 Shop버튼을 누르면 상품리스트 페이지로 이동하는데 이도 navigate함수를 이용하였다. -> navigate(`/ProductList?category=1`);

#### 동영상 자동재생 기능 구현
- useRef훅을 사용하여 스크롤이 동영상에 도달했을 때 자동재생되도록 구현하였고 video속성으로 playsInline, loop, muted을 할당했다.
- 또한 동영상이 화면에 가득 차도록 구현하여야 했는데 이는 SCSS로 부모요소에 width: 100%;, object-fit: cover;을 주고 자식요소에 width: 100%;, height: 100%;를 줘서 구현할 수 있었다.

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
 #### 상세페이지
 - -, +를 누를때 마다 상품의 개수가 변하며 가격도 함께 변동하는데 이는 useState로 구현했다.
 - 상품 리스트 페이지에서 상품을 눌렀을 때 해당 상품의 상세 페이지로 이동할 수 있게 하기위해 path parameter를 이용하여 backend와 api 통신을 했다.
 - ADD TO CART 누르면 장바구니 모당창이 켜지며 -와 +한 만큼의 상품이 추가된다. 이것 또한 path parameter를 이용하여 backend와 api 통신을 했으며 대신 POST로, body에 { quantity: orderQuantity }를 담아 전송했다. 
 - back에게 받은 데이터가 'SUCCESS' 일 때만 장바구니 모달창이 켜지며 'SUCCESS' 가 아니라면 alert를 띄워준 후 navigate로 로그인 창으로 이동하게 구현했다.
 #### 리뷰 기능
 - 호버, 클릭하면 별점이 채워지며 클릭을 해야지만 state가 변경한다. 이는 [...Array(5)].map으로 빈 별을 채워줬고 클릭하면 rating state가 바뀌어 index와 비교해서 작거나 같을 시 className으로 on을 줘서 별이 채워지도록 했다.
 - '리뷰등록' 버튼을 누르면 선택한 별점, 입력한 댓글, 아이디명이 등록된다. 이는 POST로 사용자가 해당 제품을 구매했는지 토큰으로 인가 후 rating, commentText를 담아 back에게 전송해주었다. 그리고 두번째 then에서 댓글이 추가되도록 구현했다.
- back에서 주는 rating은 '1.0', '2.0'과 같은 문자, 내가 별점을 누를 때는 rating이 1, 2와 같은 숫자인데 이는 Number(rating)으로 모조리 숫자로 바꿔줌으로 해결할 수 있었다.
 
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
  - 간단하기 html, scss로만 구현했다.
  - 푸터가 다른 페이지와 겹치지 않게 하기 위해 transform: translateY(-100%);를 적용했다.


-------

## 👀 프로젝트 협업 도구
### 1. Trello
- 기능 단위로 카드를 생성하여 프로젝트가 sprint 미팅대로 잘 이루어졌는지 파악하고 stand up 미팅 활용한 도구로 활용
<img width="666" src="https://user-images.githubusercontent.com/97422072/181877342-8c063ea9-3554-477b-b2b8-31b9fd5ba3bc.png">

### 2. Slack
- 팀원간의 실시간 소통 창구
<img width="666" src="https://user-images.githubusercontent.com/97422072/181877235-1fb94559-52a4-403c-a3f9-4daf4c8e7b0c.png">

### 3. Notion
 - 회의정리 기록, 오늘의 공유/질문 사항, 현재 진행 사항, blocker 공유, 기능 단위 페이지 셍성 후 공유 및 기록
<img width="1367" alt="스크린샷 2022-07-31 오후 1 10 50" src="https://user-images.githubusercontent.com/78889402/182009668-6eae4b48-6a83-4108-8bd5-4804c922e40b.png">
<img width="1367" alt="스크린샷 2022-07-31 오후 1 11 13" src="https://user-images.githubusercontent.com/78889402/182009676-f1ad22d5-6cc0-4696-9f16-eeb9fb5e3d80.png">
<img width="1367" alt="스크린샷 2022-07-31 오후 1 11 31" src="https://user-images.githubusercontent.com/78889402/182009685-15ed7167-ab01-40f6-9c9e-50b1d0dab04f.png">
<img width="1367" alt="스크린샷 2022-07-31 오후 1 11 47" src="https://user-images.githubusercontent.com/78889402/182009689-a6b7a855-8c35-4576-a473-566983dad21a.png"> 

----------

## ✍🏻 프로젝트 회고
- [노정은님 회고록(1) - 기능 구현에 대한 회고](https://jeongeuni.tistory.com/47)  <br />
- [노정은님 회고록(2) - 팀 프로젝트에 대한 회고](https://jeongeuni.tistory.com/48)  <br />

### 주원영
- 아쉬웠던 점
    - 팀원간의 정보공유  
        
        → 처음엔 trello와 구두를 이용해서만 정보를 교류하였다. 트렐로의 사용 체계가 잡혀 있지 않아 트렐로를 이용한 작업 진행 사항 공유가 원활하지 못했다. 이런 부분이 아쉬웠고 다음엔 팀원들이 트렐로를 적극적으로 활용하고 트렐로 사용체계가 확실히 잡혀있어 작업사항이 원활하게 업데이트 됐으면 좋겠다.
        
        → 중간발표 이후, 우리팀이 팀원간의 소통이나 정보공유가 가장 부족했다고 느꼈다. 다른 조들이 노션으로 API명세서나 작업구현한 사항을 트렐로 보다 세세하게 적어 공유하는 부분을 보고 많은 자극을 받았다. 
        
    - 미팅 준비
        
        → 데일리 스탠드업 미팅은 어제한일과 오늘 할일 그리고 블락커를 간단하게 공유하는 시간이긴 하지만, 이것도 사진이나 동영상 같은 시각자료 없이 구두로 진행하다 보니 아쉬운 부분이 있었다. 특히, 2차 스탠드업 미팅에서는 미팅에 대한 기본적인 준비가 매우 미흡했음을 느끼고 반성을 많이 했다.
        
    - PM으로서 역할
        
        → 팀원들이 스프린트 미팅에서 계획한대로 갈 수 있도록 방향성을 제시하거나, 기능 구현 등 어려움을 겪고 있을 때 도움을 준다거나, 스프린트 미팅같은 큰 미팅을 미리 준비하는 등 PM으로서 역할을 제대로 수행하지 못해 아쉽고 반성한다.
        
        → 너무 부끄럽고 아쉽지만, 이번 프로젝트를 통해 회고하고 피부로 느꼈으니 다음번에는 같은 실수를 반복하지 않는 개발자가 되겠다.
        
    - 미흡한 리팩토링
        
        → 사실, 초반에는 기능 구현을 하기에 급급해 효율적이고 깔끔한 코딩이 아닌 일단 돌아가면돼 라는 식의 코딩이 많았던 것 같다. 분명 나 혼자 구현한 코드에는 문제가 있었을 텐데 자기주도적으로 멘토님께 찾아가 코딩에 대해 리뷰를 받거나 팀원 혹은 다른 동기에게 조언을 구하지 못했다. 솔직하게 프로젝트를 경쟁적으로 바라본 것 같고, 그래서 남들에게 물어보는게 쉽지 않았던 것 같다. 또한 성격 상 부탁을 못하는 부분, 남의 조언을 잘 받아들이는 부분의 성향이 개발자로서 정말 안 좋은것 같다는 생각을 많이 했다.
        
        ⇒ 앞으로는 정보를 공유하는 개발자 문화를 인지하고 받아들여 동기들과 적극적인 소통을 해야겠다고 느꼈다.
        
    - 정리되지 않은 하루 일과
        
        → 데일리 스탠드업 미팅으로 오늘 할일에 대해 자각할 수 있었지만, 이에 대한 정리가 잘 이뤄지지 않았다. 기능의 어떤 부분에서 문제가 있었고, 그 문제를 해결했다면 어떻게 해결하였는지 체계적으로 정리하는 과정이 미흡했다. 다음 프로젝트에서는 기능 구현 중 문제가 생긴다면 팀원과 공유하고 기록해서 나의 개인블로그에도 추후에 정리하고 해결했다면 그것또한 기록하고 커밋에 남기고 팀원들과 공유하고 하는 일련의 프로세스를 잘 해내야겠다.
        
- 잘했던 점
    - 중간발표 이후 개선된 팀원간 소통
        
        → 2차 스프린트 미팅 이후 , 팀원들과 1주차 동안 아쉬웠던 점을 회고하였다. 특히, 팀원간의 소통이나 작업 진행 사항 공유등이 많이 부족했음을 느끼고 우리 팀 노션페이지를 만들어 각자 작업 진행 사항과 회의록, 공유하고 싶은 특이사항을 적어 교류하였다. 기능별로 페이지를 만들어 팀원들이 어떻게 코드를 구현했는지, 백엔드 개발자는 어떤 형식으로 데이터를 넘기는지 등 참고할 수 있어서 좋았다.
        
    - 유익한 데일리 미팅
        
        → 2차 스프린트 회고 이후, 미팅 준비에 있어서도 변화가 있었다. 트렐로와 노션 페이지에 각자 미팅 준비 자료를 간단하게 작성하였고, 그날 팀원들에게 보여줄만한 자료가 있다면 트렐로에 첨부하여 모든 팀원들이 시각적으로 보면서 회의를 진행하였다. 각자 따로 미팅에 대한 준비를 하고 진행한 스탠드업 미팅은 훨씬 압축적이면서도 유익했다.
        
### 노정은
- 아쉬웠던 점

    - 독립심이 부족했다.<br />
    -> 코드를 짜면서 막히는 부분이 있으면 스스로 해결하려고 최선의 노력을 했어야 했는데 동기들, 멘토님들이 계시니까 나 스스로 해결할 수 있는 부분까지도 도움을 받았던 것 같다. 2차 때는 혼자 고민하는 시간을 정해두고 그 시간이 넘었는데도 도무지 해결책이 나오지 않는다면 그때 최후의 수단으로 도움을 받아야겠다.
    - 내 자신에게 확신을 가지자.<br />
     -> 이번 프로젝트를 하면서 기능을 구현하기 전부터 내가 이걸 어떻게 구현해내지? 하며 겁부터 먹는 내 자신을 보았다. 예를 들어 메인페이지의 Carousel를 구현할 때 걱정부터 앞서서 해보지도 않고 해당 기술 관련 동영상보고, 벨로그를 보며 시간을 허비했다. 하지만 앞서 본 동영상과 벨로그는 내가 구현해야하는 Carousel과는 다른 기술이었고 그래서 적용시킬 수 없었다. 어쩔 수 없이(?) 내 능력으로 코드를 짜기 시작했는데 생각보다 술술 코드가 짜졌고 앞서 걱정하고 겁부터 먹던 내 자신을 반성하게 되었다. 내 자신을 믿고 확신을 가져야 겠다고 생각했다.
    - 구글링의 중요성 - stackoverflow<br />
    -> 사용자는 웹 사이트를 들어와서 메인페이지를 먼저 접한다. 즉 메인페이지가 이 웹사이트의 간판인 셈이다. 또한 발표할 때도 메인페이지를 먼저 보여줘야한다. 그런데 우리가 초반에 정한 바로는 메인페이지에 Carousel만 구현하기로 했어서 메인페이지를 맡은 나는 Carousel만 구현했었다. 이는 매우 흥미를 떨어트리는 메인페이지라고 내 스스로도 그렇게 생각했다. 그래서 하루만에 MainSectionMenu, MainSectionVideo를 추가했다. 원래는 구글링을 할 때 영어로 검색하는 것이 익숙치 않아 한글로 "이미지 슬라이드 하는 법", "동영상 자동재생 하기" 이렇게 검색했었는데 "how to~" 하여 검색하니 외국의 여러 예시가 많이 나와 뚝딱뚝딱 나만의 코드로 만들어 구현해 낼 수 있었다. stackoverflow이 얼마나 개발자에게 유용한 플랫폼인지 프로젝트가 끝나갈 막바지에 알아서 아쉽다. 2차 때는 더 활용을 잘 해보고 싶다. 
    
- 잘했던 점

    - 공유를 위한 노력<br />
    -> 팀 notion 만들기<br /> 
    우리팀은 원래 trello만을 이용하여 진행사항을 공유했다. trello는 한눈에 보기 쉽지만 서로가 지금 무슨 작업을 하는지 정확히 파악하고 다양한 정보를 공유하기에 부족했다. 하지만 처음 해보는 팀 프로젝트라 이 부분이 문제가 되고 있음을 인지하지 못했다. 중간발표를 통해 많은 팀들이 notion을 활용하여 적극적으로 소통하고, 정보 공유를 위해 힘쓰는 것을 알게되었다. 나는 왜 진작 notion을 활용할 생각을 못했을까? 하면서 적잖은 충격을 받았다. 그래서 바로 팀 notion을 만들어 팀원들을 초대하였고 notion 템플릿을 다운받아 적용하고 팀원들과 회의하여 우리는 기능단위의 페이지를 만들어 관리하자!라는 결론으로 기능단위의 페이지를 만들어 관리했다. 이후 우리는 전보다 훨씬 소통을 잘하는 팀이 될 수 있었고 결론적으로 만족스런 결과도 도출해 낼 수 있었다. 
    
    - 팀을 위한 노력<br />
     -> 최종발표 ppt 제작하기<br /> 
    최종발표를 위해 ppt를 제작해야했다. 대학교를 다니며 몇 번 만들어 본 경험은 있지만 잘 만드는 편은 아니었다. 팀에게 피해줄 수도 있으니 선뜻 만들겠다고 할 수 없었는데 모두가 나처럼 부담을 가지고 있는 것 같았다. 어쩌면 내가 만들어 본 경험이 제일 많을지도 모른다고 생각했고 그래서 내가 제작해 보겠다고 했다. 이 ppt를 통해 2주 동안의 노력과 결과를 전달해야하므로 책임감을 가지고 제작했다. ppt를 만들면서 다시한번 이 프로젝트에 대해 돌아볼 수 있었고 결과적으로도 우리팀이 전달하고자 하는 바를 모두 전달한 것 같아 뿌듯하다.<img width="1012" alt="스크린샷 2022-07-31 오후 12 44 37" src="https://user-images.githubusercontent.com/78889402/182008973-9bd414d1-2304-4550-8141-93bc406a1021.png"><img width="1012" alt="스크린샷 2022-07-31 오후 12 44 54" src="https://user-images.githubusercontent.com/78889402/182008981-cf526633-baaa-4731-aabb-e97188f69a26.png">



### 길현민
- 아쉬웠던 점

    - 미흡한 리팩토링    
    
        → 리엑트로 해보는 첫 프로젝트 중의 첫페이지라 기간내 최소한의 기능구현만 구현하고 나중에 기능추가를 염두에두고 작성한 코드입니다.기간내 필수구현사항을 마저 끝내고 추후 작성한 코드에 기능추가를 할려고 해보니 기능추가를 염두에 두지않은 코드를 리펙토링하는것보다 새로짜는게 더쉬운 문제많은 코드가 작성되어버렸습니다.아무리 급하다고해도 추후 추가기능 구현사항을 염두에 두고 코드를 구현해야한다는것을 알았습니다.
        
        ⇒ 코드를 짜기전에 생각을하고 전체적인 밑그림을 그리고 코드를 짜야겠다고 느꼈습니다.
        
    - 팀원간의 정보공유  
        
        → trello와 노션을 이용해서 정보를 교류하였습니다. 하지만 코드구현에 급급해 최소한 다른사람에게 피해를 주지 않아야한다는 강박관념에 사로잡혀 자신의 트렐로와 노션에는 노력하여 작성을 하였으나 다른사람의 작성한 내용을 읽어보지 못했습니다.최종 발표전 발표 준비를 하면서 팀원들의 진행상황을 정확하게 인지할수있게 되었습니다.
        
        ⇒ 평소에 더 부지런하게 다른사람의 작성된 노션을 읽어봐야겠다는걸 느꼈습니다.
         
- 잘했던 점  

    - 더 좋은 코드에 대한 고찰  
 
        → 체크박스의 전체 선택과 전체 선택 방법 취소에 관하여 여러사이트를 구글링한후 이해할수있는 쉽고 좋다고 생각하는 코드를 베이스로 클론해왔으나 리펙토리중 똑같이 클론코딩을 하기보다는 가지고있는 목데이터에 Key값에 Check항목을 주고 value로 true & false 값을 주었다면 따로 Set객체를 사용해서 새로운 객체를 만드는것보다는 기존 목데이터를 수정하는방법이 더 좋은 코드를 만들수있었을텐데 현재 코드 상황에 맞지않는 방법으로 구현한듯해서 아쉬움이 많이 남습니다. 코드를 짜기전에 더 계획적으로 접근했으면 좋았을걸..이라는 아쉬움이 개인적으로 많이 남습니다.하지만 그동안 몰랐던 Set객체와 인풋체크박스 상태관리하기에 대한 상세내용을 몰랐으나 해당 프로젝트를 하며 새로운 개념을 접해볼수있었습니다.또한 체크박스 전체삭제시 마지막 체크항목만 삭제가 되어 어떤문제인지 파악하던 도중 setState는 비동기로 동작한다는걸 알수있었습니다. updater함수를 사용하여 state를 인자로 받아 이값을 항상 최신값으로 보장해서 문제를 해결하였습니다.
                
        ⇒ 기존에 있는 객체를 재사용할수있다면 재사용해야한다는것을 인지하고있어야한다는것을 알았습니다
         
        
    - 최종 발표
        
        → 최종 발표전 팀들과 같이 발표 준비와 각자의 코드를 머지&송신을 해보면서 부족했던 서로의 문제점을 빠르게 인지할수있었습니다.
