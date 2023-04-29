# Quest 08. 웹 API의 기초

## Introduction

- 이번 퀘스트에서는 웹 API 서버의 기초를 알아보겠습니다.

## Topics

- HTTP Method
- node.js `http` module
  - `req`와 `res` 객체

## Resources

- [MDN - Content-Type Header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type)
- [MDN - HTTP Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
- [MDN - MIME Type](https://developer.mozilla.org/en-US/docs/Glossary/MIME_type)
- [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop)
- [HTTP Node.js Manual & Documentation](https://nodejs.org/api/http.html)

## Checklist

- **`HTTP의 GET과 POST 메소드는 어떻게 다른가요?`**

> GET 메소드는 서버로부터 리소스를 가져오는데 사용됩니다. 이 메소드를 사용하면 URL을 통해 데이터를 전송하며, URL의 끝에 '?'를 사용하여 데이터를 쿼리 문자열(query string)에 포함시킵니다.

> POST 메소드는 서버로 데이터를 제출하기 위해 사용됩니다. 이 메소드를 사용하면 요청 본문(request body)에 데이터를 포함시키며, 데이터는 이름과 값의 쌍으로 구성됩니다. POST 요청은 GET 요청과 달리 URL에 데이터가 노출되지 않기 때문에, 민감한 정보(예: 로그인 정보)를 전송하는 데 사용됩니다.

- `다른 HTTP 메소드에는 무엇이 있나요?`

> PUT, DELETE, HEAD, OPTIONS, CONNET, TRACE, PATCH

---

- **`HTTP 서버에 GET과 POST를 통해 데이터를 보내려면 어떻게 해야 하나요?`**

> GET: URL 끝에 "?"를 붙이고 파라미터를 추가합니다. 각각의 파라미터는 "&"로 구분합니다.

> POST: POST 요청은 HTTP 요청 본문에 데이터를 담아서 보냅니다.
> HTML form 태그에서 "method" 속성을 "post"로 설정하고, "action" 속성에 서버의 URL을 지정합니다. 그리고 폼 필드를 추가하고, 이를 서버로 전송합니다.

- HTTP 요청의 `Content-Type` 헤더는 무엇인가요?

> HTTP 요청 본문의 데이터 타입을 나타내며, MIME 타입 중 하나를 사용하여 지정합니다. MIME 타입은 데이터의 종류를 표현하기 위해 사용하는 표준이며, 클라이언트와 서버 간의 데이터 통신에서 매우 중요한 역할을 합니다.

- Postman에서 POST 요청을 보내는 여러 가지 방법(`form-data`, `x-www-form-urlencoded`, `raw`, `binary`) 각각은 어떤 용도를 가지고 있나요?

> form-data: 멀티파트 데이터를 보낼 때 사용합니다. 이 방식은 파일 업로드와 같이 파일 데이터를 전송할 때 사용됩니다.

> x-www-form-urlencoded: 폼 데이터를 보낼 때 사용합니다. 이 방식은 HTML 폼과 유사하게 동작하며, 이름과 값으로 구성된 데이터를 전송할 때 사용됩니다.

> raw: 요청 본문에 직접 데이터를 입력할 때 사용합니다. 이 방식은 JSON, XML 등과 같이 구조화된 데이터를 전송할 때 주로 사용됩니다.

> binary: 바이너리 데이터를 보낼 때 사용합니다. 이 방식은 이미지나 동영상과 같은 바이너리 데이터를 전송할 때 사용됩니다.

---

- **node.js의 `http` 모듈을 통해 HTTP 요청을 처리할 때**

  - `req`와 `res` 객체에는 어떤 정보가 담겨있을까요?

  **req 객체의 정보**👇

  > headers: HTTP 요청 헤더에 대한 정보를 담은 객체입니다.

  > method: HTTP 요청 메서드 (GET, POST, PUT, DELETE 등)입니다.

  > url: HTTP 요청 URL입니다.

  > httpVersion: HTTP 프로토콜 버전입니다.

  > body: HTTP 요청 본문에 담긴 데이터입니다.

  **res 객체의 정보**👇

  > statusCode: HTTP 응답 상태 코드입니다.

  > headers: HTTP 응답 헤더에 대한 정보를 담은 객체입니다.

  > writeHead(): HTTP 응답 헤더를 설정하는 메서드입니다.

  > write(): HTTP 응답 본문을 작성하는 메서드입니다.

  > end(): HTTP 응답을 종료하는 메서드입니다.

  - `GET과 POST에 대한 처리 형태가 달라지는 이유는 무엇인가요?`

  **두 메서드의 목적과 특성이 다르기 때문!**

  > GET 요청은 서버로부터 정보를 요청하기 위한 메서드입니다. 따라서 GET 요청의 처리는 주로 서버에서 데이터를 검색하고 반환하는 데 사용됩니다.

  > POST 요청은 클라이언트에서 서버로 데이터를 보내기 위한 메서드입니다. POST 요청은 주로 데이터를 생성하거나 변경하기 위한 데 사용됩니다. POST 요청의 처리는 주로 서버에서 데이터를 생성, 변경, 저장하는 데 사용됩니다. (사용자의 입력을 받아 데이터베이스에 저장하는 등의 작업에서 사용됩니다.)

---

- **만약 API 엔드포인트(URL)가 아주 많다고 한다면, HTTP POST 요청의 `Content-Type` 헤더에 따라 다른 방식으로 동작하는 서버를 어떻게 정리하면 좋을까요?**

1. **라우팅 및 컨트롤러 분리**

> 서버에서 API 엔드포인트(URL)가 아주 많은 경우, 먼저 라우팅 및 컨트롤러를 분리하는 것이 좋습니다. 라우팅은 URL에 따라 요청을 분배하는 역할을 하고, 컨트롤러는 실제로 요청을 처리하는 비즈니스 로직을 담당합니다. 이렇게 분리된 라우팅과 컨트롤러를 적절히 조합하여, 각각의 API 엔드포인트를 처리하는 방식을 결정할 수 있습니다.

2. **미들웨어 사용**

> HTTP POST 요청의 Content-Type 헤더에 따라 다른 방식으로 동작하는 서버를 정리하는 또 다른 방법은, 미들웨어를 사용하는 것입니다. 미들웨어는 서버의 요청 처리 과정 중간에 실행되는 함수로, 요청에 대한 처리를 변경하거나 추가 기능을 제공합니다. 이를 이용하여, HTTP POST 요청의 Content-Type 헤더에 따라 다른 방식으로 동작하는 미들웨어를 작성하고, 각각의 API 엔드포인트에 적용할 수 있습니다.

- `그 밖에 서버가 요청들에 따라 공통적으로 처리하는 일에는 무엇이 있을까요? 이를 어떻게 정리하면 좋을까요?`

> `인증과 권한 부여`: 클라이언트가 보내는 요청에 대해 인증이 필요한 경우, 서버는 인증 과정을 거친 후 요청을 처리합니다. 또한, 서버는 사용자의 권한을 확인하여 해당 요청이 허용되는지 검사합니다.

> `요청 처리`: 서버는 클라이언트가 보낸 요청에 대해 적절한 처리를 수행합니다. 이때, 요청에 따라 데이터를 조회, 생성, 수정, 삭제하거나 외부 API와의 통신 등을 수행할 수 있습니다.

> `오류 처리`: 서버는 요청을 처리하는 과정에서 오류가 발생할 수 있습니다. 이때, 서버는 적절한 오류 코드와 함께 오류 메시지를 클라이언트에 반환합니다.

> `로깅`: 서버는 클라이언트의 요청과 응답에 대한 로그를 기록합니다. 이를 통해 서버 동작을 추적하고, 문제가 발생한 경우 디버깅에 도움을 줄 수 있습니다.

> `보안`: 서버는 클라이언트의 요청과 응답에 대해 보안적인 검사를 수행합니다. 이를 통해 악의적인 공격을 방어하고, 보안 취약점을 방지합니다.

---

## Quest

- 다음의 동작을 하는 서버를 만들어 보세요.
  - 브라우저의 주소창에 `http://localhost:8080`을 치면 `Hello World!`를 응답하여 브라우저에 출력합니다.
  - 서버의 `/foo` URL에 `bar` 변수로 임의의 문자열을 GET 메소드로 보내면, `Hello, [문자열]`을 출력합니다.
  - 서버의 `/foo` URL에 `bar` 키에 임의의 문자열 값을 갖는 JSON 객체를 POST 메소드로 보내면, `Hello, [문자열]`을 출력합니다.
  - 서버의 `/pic/upload` URL에 그림 파일을 POST 하면 서버에 보안상 적절한 방법으로 파일이 업로드 됩니다.
  - 서버의 `/pic/show` URL을 GET 하면 브라우저에 위에 업로드한 그림이 뜹니다.
  - 서버의 `/pic/download` URL을 GET 하면 브라우저에 위에 업로드한 그림이 `pic.jpg`라는 이름으로 다운로드 됩니다.
- expressJS와 같은 외부 프레임워크를 사용하지 않고, node.js의 기본 모듈만을 사용해서 만들어 보세요.
- 처리하는 요청의 종류에 따라 공통적으로 나타나는 코드를 정리해 보세요.

## Advanced

- 서버가 파일 업로드를 지원할 때 보안상 주의할 점에는 무엇이 있을까요?
