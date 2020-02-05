# ADMIN-BACKEND

참고사이트
https://backend-intro.vlpt.us/1/02.html

webframework 설치
`yarn add koa`

nodemon 설치
`yarn add --dev nodemon`

환경변수를 위한 모듈 설치
`yarn add dotenv`

라우터 설정
`yarn add koa-router`

### Routes 관리
 /src/index.js
 * `/...`
 * `/api/...`

 /src/api/index.js
 * `/api/...`
 * `/api/v1.0`

 /src/api/v1.0/index.js
 * `/api/v1.0/...`
 * `/api/v1.0/auth`
 * `/api/v1.0/maintain` --> 아직 미설정
 + /src/api/v1.0/auth/index.js
    * `/api/v1.0/auth/...`
    * `/api/v1.0/auth/`
 + /src/api/v1.0/maintain/index.js
    * `/api/v1.0/maintain/...` --> 아직 미설정
    * `/api/v1.0/maintain/` --> 아직 미설정