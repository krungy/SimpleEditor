# notion_clone

## 🚀 배포

🔗 netlify: 
<br />

## 🪄 프로젝트 실행 방법

1. git clone하여 프로젝트를 내려받습니다.
   ```bash
   git clone https://github.com/krungy/notion_clone.git
   ```
2. 아래 커맨드로 패키지를 설치합니다.
   ```bash
   yarn install
   ```
3. 아래 커맨드로 프로젝트를 실행합니다.
   ```bash
   yarn start
   ```

<br>

## 🧰 기술 스택 및 구현 사항

![](https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=Webpack&logoColor=white) ![](https://img.shields.io/badge/Babel-F9DC3E?style=for-the-badge&logo=babel&logoColor=white) ![](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)

### 구현 사항
  - Notion 을 모방한 텍스트 편집기입니다.
  - LocalStorage 저장소를 사용하여 문서를 저장합니다.
  - 문서를 생성하고, 삭제할 수 있습니다.
  - 입력이 일정 시간 이상 지속되지 않으면, Storage에 자동 저장하는 기능을 구현했습니다.

<!-- ### 트러블 슈팅

 -->

## 📂 디렉토리 구조
```bash
.
├── assets
│   └── css
├── modules
│   ├── MainContainer
│   │   ├── DefaultContainer.js
│   │   ├── Editor.js
│   │   └── MainContainer.js
│   └── SideMenu
│       ├── DocumentList.js
│       └── SideMenu.js
└── utils
```
