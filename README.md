<img width="2165" height="726" src="https://github.com/user-attachments/assets/cf8956fb-2fea-48e9-a6aa-adcfd1982d34" />

<br>

# The Rough Sketch on the Ground <img width="100" align="left" src="https://github.com/user-attachments/assets/0b27b072-bead-4717-87fb-5f2c1820257e" />
덕성여자대학교 시각디자인전공 제60회 온라인 졸업전시회

<br>

## 👩🏻‍💻 FE Developer

| <a href="https://github.com/pookey1104"><img src="https://avatars.githubusercontent.com/u/90364700?v=4" width="120px;" alt=""/></a> | <a href="https://github.com/mogg22"><img src="https://avatars.githubusercontent.com/u/126389940?v=4" width="120px;" alt=""/></a> |
| --- | --- |
| 김서윤 | 목소연 |

<br>

## 🛠 Stack

| **역할** | **종류** |
| --- | --- |
| Framework | <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=white" /> |
| Programming Language | <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" /> |
| Routing | <img src="https://img.shields.io/badge/APP%20ROUTER-000000?style=for-the-badge" /> |
| Styling | <img src="https://img.shields.io/badge/EMOTION-D36AC2?style=for-the-badge" /> |
| Formatting | <img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" /> <img src="https://img.shields.io/badge/prettier-000000?style=for-the-badge&logo=prettier&logoColor=F7B93E" /> |
| Package Manager | <img src="https://img.shields.io/badge/pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white" /> |
| Bundler | <img src="https://img.shields.io/badge/webpack-black?style=for-the-badge&logo=webpack&logoColor=8DD6F9" /> |
| Deployment | <img src="https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" />  |

<br>

## 🔗 Git Convention
### 💫 Git Flow

```
- main ← 배포 브랜치
- develop ← 개발 브랜치
- feat/#이슈번호/기능명 ← 작업 브랜치
```

<br>

### 🔥 Commit Message

```
- 🎉 Init: 프로젝트 세팅
- ✨ Feat: 새로운 기능 추가
- 🐛 Fix : 버그 수정
- 💄 Design : UI(CSS) 수정
- ✏️ Style : 기능 수정 없는 코드 스타일 변경
- 📝 Docs : 문서 수정
- 🚚 Mod : 폴더 구조 이동
- 💡 Add : 파일 추가
- 🔥 Del : 파일 삭제
- ♻️ Refactor : 코드 리펙토링

→  커밋유형: 설명 (#이슈번호)
```

<br>

## 📝 Comments

파일 최상단에 TSDoc 스타일 주석 작성
  
```
/**
 * @function [함수명]              // 함수 또는 훅일 경우에 사용
 * @component [컴포넌트명]         // 컴포넌트일 경우에 사용
 *
 * @param {[타입]} [파라미터명] - [파라미터에 대한 설명]
 *
 * @returns {[타입]} [리턴값에 대한 설명]
 *
 * @example [사용 예시]
 *
 * @note [참고 사항]
 *
 * @author [작성자 이름]
 */
```

<br>

## 📂 프로젝트 구조

```
📦vcd60_fe
 ┣ 📂.github
 ┣ 📂.next
 ┣ 📂.vscode
 ┃ ┗ 📜settings.json
 ┣ 📂public
 ┃ ┣ 📂favicons
 ┃ ┗ 📂fonts
 ┣ 📂src
 ┃ ┣ 📂app
 ┃ ┃ ┣ 📂api ← 서버 라우트 api
 ┃ ┃ ┣ 📂components ← 공통 컴포넌트
 ┃ ┃ ┣ 📂designers
 ┃ ┃ ┃ ┣ 📂[id]
 ┃ ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┃ ┣ 📜page.tsx
 ┃ ┃ ┃ ┃ ┗ 📜pageStyle.ts
 ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📜page.tsx
 ┃ ┃ ┃ ┗ 📜pageStyle.ts
 ┃ ┃ ┣ 📂guestbook
 ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📜page.tsx
 ┃ ┃ ┃ ┗ 📜pageStyle.ts
 ┃ ┃ ┣ 📂projects
 ┃ ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📜page.tsx
 ┃ ┃ ┃ ┗ 📜pageStyle.ts
 ┃ ┃ ┣ 📂providers
 ┃ ┃ ┃ ┗ 📜Provider.tsx
 ┃ ┃ ┣ 📜layout.tsx
 ┃ ┃ ┣ 📜page.tsx
 ┃ ┃ ┗ 📜pageStyle.ts
 ┃ ┣ 📂assets
 ┃ ┣ 📂data ← 정적 데이터
 ┃ ┣ 📂lib ← 글로벌 함수 및 훅 또는 외부 api 호출 유틸(lib/api)
 ┃ ┗ 📂styles ← 글로벌 스타일
 ┣ 📜.babelrc
 ┣ 📜.gitignore
 ┣ 📜eslint.config.mjs
 ┣ 📜next-env.d.ts
 ┣ 📜next.config.ts
 ┣ 📜package.json
 ┣ 📜pnpm-lock.yaml
 ┣ 📜prettier.config.cjs
 ┣ 📜README.md
 ┗ 📜tsconfig.json
```