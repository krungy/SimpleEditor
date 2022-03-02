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
  - 입력이 일정 시간 이상 지속되지 않으면, Storage에 자동 저장하는 기능 구현

<!-- ### 트러블 슈팅

#### API 및 배포

&nbsp;API 데이터를 가져오는데 CORS 문제로 인해 데이터를 불러올 수 없었습니다. 개발 시에는 package.json의 proxy를 이용해서 개발을 진행했지만, netlify를 통해 배포를 하려고 했을때 데이터를 읽어오지 못하는 오류가 발생했습니다. redirect를 이용해서 해결해보려고 했지만, 실패했습니다. 화면을 보여주는게 우선이라고 생각해서 MOCK_DATA를 통해서 우선 배포를 진행했습니다.
- 해결완료!
  - Proxy 설정으로 문제를 해결해였습니다.

#### 이미지 로드가 되지 않는 문제

&nbsp;확장자가 svg인 포함된 이미지들이 모두 불러와지지 않는 오류가 있었습니다. img태그의 onerror 이벤트를 이용해서 하려고 했지만, 그럼에도 403오류가 발생했기 때문에 확장자가 svg인 이미지들은 모두 default.svg로 대체하기로 했습니다. 

#### 리액트 라우터 문제

&nbsp;클릭되면 이동해야할 태그들이 table 구조로 되어 있어서 react-router-dom v6의 Link 태그로 감쌀 수 없는 문제가 있었습니다. table row에 onClick이벤트를 통해서 상세 페이지로 navigate시켜주는 것으로 해결했지만, 에러 페이지가 로드 되지않는 오류가 발생했습니다. 
&nbsp;상세 페이지 안에서 유효한 링크의 key가 들어왔는지 판별하고 제대로 된 key라면 페이지를 보여주고, 아니라면 에러페이지가 로드되게 만들어서 해결할 수 있었습니다. 
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
