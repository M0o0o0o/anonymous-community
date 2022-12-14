# ๐๋ชฉ์ฐจ

[Community Service](#-community-service)

[์๊ตฌ์ฌํญ ๋ถ์](#-์๊ตฌ์ฌํญ-๋ถ์)

[API ๋ฌธ์](#-api-๋ฌธ์)

[ํ์คํธ ์ผ์ด์ค](#-ํ์คํธ-์ผ์ด์ค)

[์ปจ๋ฒค์](#-์ปจ๋ฒค์)

[ERD](#-erd)

[ํด๋ ๊ตฌ์กฐ](#-ํด๋-๊ตฌ์กฐ)

[ํจํค์ง](#-ํจํค์ง)

[๊ธฐ์  ์คํ](#-๊ธฐ์ -์คํ)

[์ญํ ๋ถ๋ด ๋ฐ ํธ๋ฌ๋ธ ์ํ](#-์ญํ ๋ถ๋ด-๋ฐ-ํธ๋ฌ๋ธ-์ํ)

# ๐ฉ Anonymous Community Service

**์ต๋ช์ผ๋ก ์ด์ฉํ  ์ ์๋ ์ปค๋ฎค๋ํฐ ์๋น์ค์๋๋ค.**

### โ ๊ธฐ๋ฅ ์ค๋ช

- ๋น๋ฐ๋ฒํธ๋ฅผ ํจ๊ป ์๋ ฅํด ๊ฒ์๊ธ์ ์์ฑ์ด ๊ฐ๋ฅํฉ๋๋ค.
- ๊ฒ์๊ธ ์์ฑ ์ ์๋ ฅํ ๋น๋ฐ๋ฒํธ๋ฅผ ์๋ ฅํ์ฌ ๊ฒ์๊ธ ์์ ์ด ๊ฐ๋ฅํฉ๋๋ค.
- ๊ฒ์๊ธ ์ญ์  ์ ์๋ ฅํ ๋น๋ฐ๋ฒํธ๋ฅผ ์๋ ฅํ์ฌ ๊ฒ์๊ธ ์ญ์ ๊ฐ ๊ฐ๋ฅํฉ๋๋ค.
- ๊ฒ์๊ธ ์กฐํ ์ pagination์ ์ด์ฉํด ๋ฌดํ ์คํฌ๋กค์ด ๊ฐ๋ฅํ๋๋ก ๊ตฌํํ์ต๋๋ค.

# โ ์๊ตฌ์ฌํญ ๋ถ์

### โ ๊ฒ์ํ API ๊ฐ๋ฐ

- ๊ฒ์ํ ์์ฑ์ ๊ฒฝ์ฐ Table Schema๋๋ก express-validator๋ฅผ ์ด์ฉํด ๊ฒ์ฆ ์ฒ๋ฆฌ ํ์ต๋๋ค.
- ๋น๋ฐ๋ฒํธ๋ ์ํธํํ์ฌ ์ ์ฅํ์ต๋๋ค.

### โ ๋ ์จ API ๊ฐ๋ฐ

- ๊ธ ๋ฑ๋ก ์ ์ฌ์ฉ์์ ์์น์ ์ค์๊ฐ ๋ ์จ๋ฅผ ์ธ๋ถ API๋ฅผ ์ด์ฉํด ๊ธ๊ณผ ํจ๊ป ์ ์ฅํฉ๋๋ค.
- ํด๋น ๋ ์จ๋ ์ธ๋ถ API์์ ์ด๋ฏธ์ง url์ ๋ฐ์์ ํจ๊ป ์ ์ฅํ๋๋ก ๊ตฌํํ์ต๋๋ค.

# ๐ API ๋ฌธ์

1. npm start๋ก ์๋ฒ ๊ตฌ๋ -> localhost/{port}/api-docs

2. [Swagger PDF ํ์ผ](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/8eccf573-c06c-4fe8-8a77-4b0d733458fc/screencapture-localhost-8080-api-docs-2022-09-05-18_05_52.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220905%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220905T090835Z&X-Amz-Expires=86400&X-Amz-Signature=0c5831ded302797166c59ff652d9a15388e9717c037d4a96f45d5feb63743941&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22screencapture-localhost-8080-api-docs-2022-09-05-18_05_52.pdf%22&x-id=GetObject)

# ๐ ํ์คํธ ์ผ์ด์ค

- ํ์คํธ๋ mocha์ supertest๋ก ์งํํ์ต๋๋ค.
- ํ์ / ๊ฒ์ํ CRUD ํ์คํธ ์๋ฃํ์ต๋๋ค.

<img width="1608" alt="แแณแแณแแตแซแแฃแบ 2022-09-07 แแฉแแฎ 1 41 44" src="https://user-images.githubusercontent.com/68809337/188790312-8e9520ab-1d2d-48db-96b0-45ca81afc828.png">

# ๐ก ์ปจ๋ฒค์

### โ camelCase / PascalCase

- **ํ์ผ, ์์ฑ์, ๋ณ์, ๋ฉ์๋๋ช**์ **camelCase**๋ฅผ ์ฌ์ฉํฉ๋๋ค.
- **ํด๋์ค๋ช**์ **PascalCase**๋ฅผ ์ฌ์ฉํฉ๋๋ค.

### โ Lint ๊ท์น

| ๋ค์ฌ์ฐ๊ธฐ 2์นธ             | ํญ ์ฌ์ฉ x                    |
| ------------------------ | ---------------------------- |
| double quote ์ฌ์ฉ.       | commonJS ์ฌ์ฉ                |
| ๋ง์ง๋ง ์ฝค๋ง ์ฌ์ฉ         | ํ์ค ์ต๋ ๊ธ์์: 80         |
| var๋ ์ฌ์ฉํ์ง ์์ต๋๋ค. | ์ธ๋ฏธ ์ฝ๋ก  ์ฌ์ฉ์ ํ์ฉํฉ๋๋ค. |

### โ ๋ฉ์๋๋ช ๊ท์น

- ์ ์ฒด์กฐํ๋ ๋ณต์ํ์ผ๋ก ์์ฑํฉ๋๋ค.

| ์์ฒญ ๋ด์ฉ | service | example    | repo          | example     |
| --------- | ------- | ---------- | ------------- | ----------- |
| ์์ฑ      | add     | addPost    | create        | createPost  |
| ์กฐํ      | get     | getPost    | find์์ฒญ๊ฐ์ฒด  | findPost    |
| ์ ์ฒด์กฐํ  | get     | getPosts   | find์์ฒญ๊ฐ์ฒดs | findPosts   |
| ์์       | set     | setPost    | update        | updatePost  |
| ์ญ์       | delete  | deletePost | destroy       | destroyPost |

### โ ์ฃผ์

- ๋ฉ์๋ ๋ฐ ์ฝ๋ ์ค๋ช์ ์ฃผ์์ผ๋ก ๊ฐ๋จํ๊ฒ ์์ฑํฉ๋๋ค.

### โ Git commit

![image](https://user-images.githubusercontent.com/80232260/188366205-84d8a796-3c51-4eb0-bb29-3a61c96bb047.png)

[๊น ์ปค๋ฐ ์ปจ๋ฒค์ ์ฐธ๊ณ  ์ฌ์ดํธ](https://overcome-the-limits.tistory.com/entry/ํ์-ํ์์-์ํ-๊ธฐ๋ณธ์ ์ธ-git-์ปค๋ฐ์ปจ๋ฒค์-์ค์ ํ๊ธฐ)

# ๐ ERD

<img width="391" alt="แแณแแณแแตแซแแฃแบ 2022-09-07 แแฉแแฎ 2 26 29" src="https://user-images.githubusercontent.com/68809337/188795669-5fe4f957-82fb-4523-b5e4-f558b7566c9a.png">

# ๐ ํด๋ ๊ตฌ์กฐ

```

๐ฆanonymous-community
 โฃ ๐__test__
 โฃ ๐codes
 โฃ ๐controller
 โฃ ๐dao
 โฃ ๐database
 โ โฃ ๐models
 โฃ ๐middlewares
 โฃ ๐repository
 โฃ ๐routes
 โฃ ๐service
 โฃ ๐swagger
 โฃ ๐validator
 โฃ ๐weatherapi
 โ โ ๐index.js
 โฃ ๐.eslintrc.json
 โฃ ๐.gitignore
 โฃ ๐.prettierrc.json
 โฃ ๐LICENSE
 โฃ ๐app.js
 โฃ ๐package.json
 โ ๐server.js
```

# โ ํจํค์ง

```json
{
  "name": "anonymous-community",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "npx cross-env NODE_ENV=test mocha __test__/*.test.js",
    "start": "nodemon server.js"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/M0o0o0o/anonymous-community.git"
  },
  "author": "lee moo yeol",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/M0o0o0o/anonymous-community/issues"
  },
  "homepage": "https://github.com/M0o0o0o/anonymous-community#readme",
  "dependencies": {
    "axios": "^0.27.2",
    "bcrypt": "^5.0.1",
    "cookie-parser": "^1.4.6",
    "cors": "^2.8.5",
    "cross-env": "^7.0.3",
    "express": "^4.18.1",
    "express-validator": "^6.14.2",
    "jsonwebtoken": "^8.5.1",
    "moment": "^2.29.4",
    "morgan": "^1.10.0",
    "mysql2": "^2.3.3",
    "sequelize": "^6.21.4",
    "uuid": "^8.3.2"
  },
  "devDependencies": {
    "@babel/eslint-parser": "^7.18.9",
    "dotenv": "^16.0.2",
    "eslint": "^8.23.0",
    "eslint-config-prettier": "^8.5.0",
    "eslint-plugin-prettier": "^4.2.1",
    "mocha": "^10.0.0",
    "nodemon": "^2.0.19",
    "prettier": "^2.7.1",
    "sequelize-cli": "^6.4.1",
    "supertest": "^6.2.4",
    "swagger-jsdoc": "^6.2.5",
    "swagger-ui-express": "^4.5.0"
  }
}
```

# โก ๊ธฐ์  ์คํ

<img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"> <img src="https://img.shields.io/badge/express-FCC624?style=for-the-badge&logo=express&logoColor=white"> <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white">
<img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"> <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/Sequelize-007396?style=for-the-badge&logo=Sequelize&logoColor=white">
<img src="https://img.shields.io/badge/Swagger-61DAFB?style=for-the-badge&logo=Swagger&logoColor=white"> <img src="https://img.shields.io/badge/Mocha-F8DC75?style=for-the-badge&logo=Mocha&logoColor=white">

# โ ํธ๋ฌ๋ธ ์ํ

### โ weather API ์ ์ฉ

- ์๊ตฌ์ฌํญ ์ค ํ๋๊ฐ ์ฌ์ฉ์์ ๊ธ ๋ฑ๋ก ์ ํด๋น ์ง์ญ์ ์ค์๊ฐ ๋ ์จ ๊ฐ์ ์ธ๋ถ API๋ฅผ ํตํด ์๋ต๋ฐ์ ์ ์ฅํ๋ ๊ฒ์๋๋ค.
- ํด๋น ๊ธฐ๋ฅ ๊ตฌํ ์ค weather <b> API(์ธ๋ถ)์ด์ฉํด ์ค๋ฅ๊ฐ ๋ฐ์ </b>ํ๋ฉด ์ด๋ป๊ฒ ๋์ฒํด์ผํ  ์ง ๊ณ ๋ฏผ์ด ๋ง์ด ๋ค์์ต๋๋ค. ๋ฐ๋ผ์ ์ค๋ฅ๊ฐ ๋ฐ์ํ๋ฉด ํด๊ฒฐํ  ์ ์๋ ๋ช๊ฐ์ง ๋ฐฉ์์ ์๊ฐํด๋ดค์ต๋๋ค.
  - ์ฌ์์ฒญ ํน์ ๋ค๋ฅธ API๋ฅผ ์ฌ์ฉ
    - ๊ทธ๋ฐ๋ฐ ํด๋น ๋ฐฉ์์ ์ฌ์์ฒญ์ด๋ ๋ค๋ฅธ API๋ฅผ ์ฌ์ฉํด์ ํด๊ฒฐํ  ์ ์๋ ์ค๋ฅ์ผ ์๋ ์๊ณ , ๊ทผ๋ณธ์ ์ธ ๋ฌธ์ ๊ฐ ์ ์ ์๋ฒ์ผ ์๋ ์์ด์ ์ข์ ํด๊ฒฐ์ฑ์ด ์๋๋ผ ํ๋จํ์ต๋๋ค.
  - ์์ฒญ ์คํจ ์ ๋ ์จ๋ฅผ ์ ์ธํ ๊ธ ๋ฑ๋ก
    - ์ฌ๋ฌ ํด๊ฒฐ์ฑ์ ๊ณ ๋ฏผํ๋ค ๊ธ ๋ฑ๋ก ์ ๋ ์จ๋ฅผ ์ ์ฅํ๋ ๊ฒ์ API ์ฃผ ๋ชฉ์ ์ด ์๋๊ธฐ ๋๋ฌธ์ ์ฆ, ๊ธ ๋ฑ๋ก์ด ์ฃผ๊ฐ ๋์ด์ผ์ง ๋ ์จ API์์ ์ค๋ฅ๊ฐ ๋ฐ์ํด์ ๊ธ ๋ฑ๋ก์ ์คํจํ๊ฑฐ๋ ์ง์ฅ์ด ์์ผ๋ฉด ์๋๋ค๊ณ  ํ๋จํ์ต๋๋ค.

```
๊ฒฐ๊ตญ ์ค๋ฅ API์์ ์ค๋ฅ๊ฐ ๋ฐ์ํ๋ฉด ํด๋น ํ๋๋ฅผ ๋น์๋ ์ฑ ๊ธ ๋ฑ๋ก์ ํ  ์ ์๋๋ก ์ฒ๋ฆฌํ์ต๋๋ค.
```

- ์ฌ์ฉ์์ IP๋ฅผ ํตํด ์์น์ ๊ตฌํ  ๋, ํ๋ก์๋ฅผ ๊ฑฐ์ณ์ ์ค๋ฉด ์ฌ์ฉ์์ ์ ํํ ์์น๋ฅผ ๊ตฌํ  ์ ์๋ ๋ฌธ์ ๊ฐ ์์์ต๋๋ค.
  - ๊ตฌ๊ธ๋ง์ ํตํด NGINX์ ๊ฐ์ ํ๋ก์๋ฅผ ํตํด ์ฌ์ฉ์์ ์์ฒญ์ด ๋ค์ด์ค๋ฉด ์ฌ์ฉ์์ ์ ํํ ์์ดํผ๋ฅผ ๊ตฌํ  ์ ์๋ ๋ฐฉ๋ฒ์ ์ฐพ์์ ์ ์ฉํ์ต๋๋ค.
  - req.headers['x-forwarded-for'] || req.connection.remoteAddress;
