## 📋개요

📆연차 및 당직 관리 웹 서비스 구현 미니프로젝트 팀 Repo.

## 🔖데모

[데모사이트 가기](http://devcastle.s3-website.ap-northeast-2.amazonaws.com/)

일반 계정

> 가입하고 로그인

관리자 계정

> ID : admin  
> PW : @chan123

## ⚙️실행

```
git clone https://github.com/growing-every-day/work-schedule-management-frontend.git
cd work_schedule_management
npm i
npm start
```

## 💾브랜치 분리 방식

feature/기능이름

```
예시)
feature/login
feature/calendar
```

## 🖧 json-server 가동

목업데이터는 api/mockup/db.json에 기입 후 아래와 같이 작동

```
npm i -g json-server
npm run server
```

서버가 잘 가동되었는지 확인 후,  
터미널 하나 더 열어서 클라이언트 열어서 이상없는지 확인

## 📁폴더구조

```
├── public
│   ├── index.html
│   └── favicon
├── src
│   ├── index.js
│   ├── GlobalStyle.js  // reset.css 및 공용 스타일링
│   ├── App.js // 라우팅 세팅
│   ├── 🗀api  // 서버 데이터 관리 폴더
│   │   └── 🗀mockup  // 테스트용 더미 데이터 저장 폴더
│   ├── 🗀components  // 재사용하는 컴포넌트 저장 폴더
│   │   └── 🗀example  // 컴포넌트별로 폴더 구조 생성 예시
│   │       ├── index.jsx
│   │       └── style.js  //css-in-js 분리.
│   ├── 🗀pages  // 각 roustes의 페이지 저장 폴더
│   │   ├── 🗀LogIN  // 로그인 페이지
│   │   ├── 🗀Main  // 메인페이지(캘린더 표시 화면)
│   │   ├── 🗀MyInfo  // 마이페이지(개인정보)
│   │   ├── 🗀NotFound
│   │   └── 🗀SignUp  // 회원가입 페이지
│   ├── 🗀store  // 클라이언트 전역 상태 관리 폴더
│   │   └── index.js
│   └── 🗀util  // 유틸 함수 저장 폴더
│       └── 🗀hooks  // 재사용하는 커스텀 훅 저장 폴더
└── ...
```

## 📚사용 라이브러리

- **axios** : api 호출
- **json-server** : 테스트용 서버
- **react-big-calendar** : 일정 이벤트 표시, 등록, 수정, 삭제 상호작용
- **react-bootstrap** : css 디자인
- **react-cookie** : 쿠키 관리
- **react-query** : 서버측 데이터 상태 관리
- **styled-components** : css-in-js
- **zustand** : 클라이언트측 데이터 상태 관리
