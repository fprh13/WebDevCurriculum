# Quest 07. node.js의 기초

## Introduction

- 이번 퀘스트에서는 node.js의 기본적인 구조와 개념에 대해 알아 보겠습니다.

## Topics

- node.js
- npm
- CommonJS와 ES Modules

## Resources

- [About node.js](https://nodejs.org/ko/about/)
- [Node.js의 아키텍쳐](https://edu.goorm.io/learn/lecture/557/%ED%95%9C-%EB%88%88%EC%97%90-%EB%81%9D%EB%82%B4%EB%8A%94-node-js/lesson/174356/node-js%EC%9D%98-%EC%95%84%ED%82%A4%ED%85%8D%EC%B3%90)
- [npm](https://docs.npmjs.com/about-npm)
- [npm CLI commands](https://docs.npmjs.com/cli/v7/commands)
- [npm - package.json](https://docs.npmjs.com/cli/v7/configuring-npm/package-json)
- [How NodeJS Require works!](https://www.thirdrocktechkno.com/blog/how-nodejs-require-works)
- [MDN - JavaScript Modules](https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Modules)
- [ES modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/)
- [require vs import](https://www.geeksforgeeks.org/difference-between-node-js-require-and-es6-import-and-export/)

## Checklist

- **`node.js는 무엇인가요? node.js의 내부는 어떻게 구성되어 있을까요?`**

> node.js : node.js는 JavaScript 런타임입니다. JavaScript를 서버 사이드에서 실행할 수 있게 해주는 오픈 소스 플랫폼입니다.

> node.js 내부 구성 =>
>
> 1. V8 JavaScript 엔진: Node.js의 핵심이 되는 엔진입니다. JavaScript 코드를 컴파일하고 실행합니다.
> 2. libuv: Node.js가 비동기 I/O 처리 및 이벤트 기반 프로그래밍을 가능하게 만드는 라이브러리입니다. libuv는 I/O, 네트워킹, 타이머 등을 처리하는 기능을 제공합니다.
> 3. 코어 라이브러리: Node.js는 JavaScript에서 주로 사용되는 기능을 포함하는 코어 라이브러리를 제공합니다. 이러한 기능에는 파일 시스템 액세스, HTTP 요청 및 응답 처리, 쿠키 및 세션 관리 등이 포함됩니다.
> 4. 바인딩: Node.js는 C/C++ 등의 언어로 작성된 바이너리 파일과 상호작용할 수 있는 바인딩 인터페이스를 제공합니다. 이를 통해 Node.js는 다른 프로그래밍 언어로 작성된 모듈도 사용할 수 있습니다.
> 5. 모듈: Node.js는 모듈을 사용하여 JavaScript 코드를 구성합니다. 모듈은 특정 기능을 수행하는 JavaScript 코드의 묶음입니다. Node.js는 내장 모듈과 외부 모듈을 모두 지원합니다.

---

- **npm이 무엇인가요? `package.json` 파일은 어떤 필드들로 구성되어 있나요?**

> npm은 Node.js 패키지 매니저로, Node.js 어플리케이션에서 사용되는 다양한 패키지를 설치하고 관리할 수 있습니다.

> package.json 필드 구성 =>

> name: 패키지의 이름을 정의합니다. 이 이름은 고유해야 합니다.

> version: 패키지의 버전을 정의합니다. 버전은 major.minor.patch 형식으로 작성되며, 의미에 따라 적절한 숫자가 증가합니다.

> description: 패키지의 간단한 설명을 작성합니다.

> keywords: 패키지를 검색할 때 사용되는 키워드를 배열로 작성합니다.

> main: 패키지의 메인 파일을 지정합니다.

> dependencies: 패키지가 의존하는 라이브러리를 작성합니다. 버전은 major.minor.patch 형식으로 작성됩니다.

> devDependencies: 패키지를 개발할 때 필요한 의존 라이브러리를 작성합니다. 이 라이브러리는 배포할 때는 포함되지 않습니다.

> scripts: 패키지에서 사용할 수 있는 script 명령어를 작성합니다. npm run [script name] 명령어로 실행할 수 있습니다.

> repository: 패키지의 소스 코드 저장소 정보를 작성합니다.

> author: 패키지의 작성자 정보를 작성합니다.

> license: 패키지의 라이선스 정보를 작성합니다.

---

- **npx는 어떤 명령인가요? npm 패키지를 `-g` 옵션을 통해 글로벌로 저장하는 것과 그렇지 않은 것은 어떻게 다른가요?**

> npm install 명령어를 통해 패키지를 설치할 때, -g 옵션을 주게 되면 글로벌하게 패키지가 설치됩니다. 즉, 해당 패키지는 컴퓨터의 모든 디렉토리에서 사용할 수 있습니다. 반면, -g 옵션 없이 패키지를 설치하면 로컬 디렉토리에 패키지가 설치됩니다. 이 경우 해당 디렉토리에서만 패키지를 사용할 수 있습니다.

> npx는 로컬 디렉토리에 설치된 패키지를 실행할 수 있기 때문에, 글로벌하게 패키지를 설치할 필요 없이 즉시 실행이 필요한 경우 npx를 사용하여 패키지를 실행할 수 있습니다. 이를 통해 불필요한 글로벌 패키지 설치를 줄일 수 있습니다.

---

- **`자바스크립트 코드에서 다른 파일의 코드를 부르는 시도들은 지금까지 어떤 것이 있었을까요? CommonJS 대신 ES Modules가 등장한 이유는 무엇일까요?`**

> 자바스크립트 코드에서 script 태그를 사용하여 HTML 문서 내에서 다른 자바스크립트 파일을 불러오는 방법입니다.

> CommonJS는 Node.js에서 모듈 시스템을 구현하는 방식으로, require 함수와 module.exports 객체를 사용하여 모듈을 정의하고 불러오는 방식입니다.

> ES Modules는 ES6(ECMAScript 2015)에서 도입된 모듈 시스템입니다. ES Modules는 import와 export 키워드를 사용하여 모듈을 정의하고 불러오는 방식으로, 모듈 로딩이 비동기적으로 처리되기 때문에 더욱 효율적으로 모듈을 로딩할 수 있습니다. 또한, ES Modules는 모듈 로딩이 정적으로 처리되기 때문에, 코드를 더욱 예측 가능하고 안정적으로 만들어 줍니다. (등장 이유)

---

- **ES Modules는 기존의 `require()`와 동작상에 어떤 차이가 있을까요? CommonJS는 할 수 있으나 ES Modules가 할 수 없는 일에는 어떤 것이 있을까요?**

> Import/Export 방식과 require() 방식의 차이: CommonJS에서는 require() 함수를 사용하여 모듈을 불러왔지만, ES Modules에서는 import 키워드와 export 키워드를 사용하여 모듈을 불러오고 내보내는 방식입니다.

> 동기/비동기 방식의 차이: CommonJS에서는 require() 함수를 동기 방식으로 사용하는 경우가 많았습니다. 반면, ES Modules에서는 import를 비동기 방식으로 처리합니다.

> 호출 시점의 차이: CommonJS에서는 require() 함수가 실행될 때 모듈 코드가 로드되고 실행됩니다. 반면, ES Modules에서는 import 구문이 선언된 곳이 실행될 때 모듈 코드가 로드되고 실행됩니다.

> 정적 분석의 가능성: ES Modules에서는 import 구문이 모듈의 최상위에 위치하고, 상대 경로 또는 절대 경로를 사용합니다. 이러한 특징 때문에 정적 분석이 가능하고, 타입 체킹, 코드 자동완성 등의 혜택을 누릴 수 있습니다.

---

- **`node.js에서 ES Modules를 사용하려면 어떻게 해야 할까요? ES Modules 기반의 코드에서 CommonJS 기반의 패키지를 불러오려면 어떻게 해야 할까요? 그 반대는 어떻게 될까요?`**

> node.js에서 ES Modules를 사용하려면, 파일 확장자를 .mjs로 바꾸거나 package.json 파일에 "type": "module"을 추가해야 합니다.

> ES Modules 기반의 코드에서 CommonJS 기반의 패키지를 불러오려면 import 대신 require를 사용하면 됩니다. require로 불러온 모듈은 자동으로 CommonJS 모듈로 인식됩니다.

> CommonJS 기반의 코드에서 ES Modules 기반의 패키지를 불러오려면, import 대신 require를 사용하면 됩니다. require로 불러온 모듈은 .default 프로퍼티를 통해 접근할 수 있습니다.

---

## Quest

- 스켈레톤 코드에는 다음과 같은 네 개의 패키지가 있으며, 용도는 다음과 같습니다:
  - `cjs-package`: CommonJS 기반의 패키지입니다. 다른 코드가 이 패키지의 함수와 내용을 참조하게 됩니다.
  - `esm-package`: ES Modules 기반의 패키지입니다. 다른 코드가 이 패키지의 함수와 내용을 참조하게 됩니다.
  - `cjs-my-project`: `cjs-package`와 `esm-package`에 모두 의존하는, CommonJS 기반의 프로젝트입니다.
  - `esm-my-project`: `cjs-package`와 `esm-package`에 모두 의존하는, ES Modules 기반의 프로젝트입니다.
- 각각의 패키지의 `package.json`과 `index.js` 또는 `index.mjs` 파일을 수정하여, 각각의 `*-my-project`들이 `*-package`에 노출된 함수와 클래스를 활용할 수 있도록 만들어 보세요.

## Advanced

- node.js 외의 자바스크립트 런타임에는 어떤 것이 있을까요?
