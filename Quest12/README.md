# Quest 12. 보안의 기초

## Introduction

- 이번 퀘스트에서는 가장 기초적인 웹 서비스 보안에 대해 알아보겠습니다.

## Topics

- XSS, CSRF, SQL Injection
- HTTPS, TLS

## Resources

- [The Basics of Web Application Security](https://martinfowler.com/articles/web-security-basics.html)
- [Website Security 101](https://spyrestudios.com/web-security-101/)
- [Web Security Fundamentals](https://www.shopify.com.ng/partners/blog/web-security-2018)
- [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/)
- [Wikipedia - TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security)

## Checklist

- **`입력 데이터의 Validation을 웹 프론트엔드에서 했더라도 서버에서 또 해야 할까요? 그 이유는 무엇일까요?`**

> 보안상의 문제 때문에 서버에서도 데이터 validation을 수행하여 데이터의 형식, 크기, 길이, 범위 등을 검사해야 합니다.
> 또한, 웹 프론트엔드에서의 validation은 사용자 경험을 개선하기 위한 것으로, 이를 수행하지 않은 경우 사용자가 입력한 데이터가 올바른 형식인지 서버에서 검사하고 에러 메시지를 반환해야 합니다.

- `서버로부터 받은 HTML 내용을 그대로 검증 없이 프론트엔드에 innerHTML 등을 통해 적용하면 어떤 문제점이 있을까요?`

> 1. SQL Injection
> 2. 인증 및 세션 관련 취약점
> 3. 파일 업로드 취약점
> 4. HTTP Response Splitting
> 5. 경로 조작 및 디렉토리 리스팅 취약점
> 6. CSRF(Cross-site request forgery)

- `XSS(Cross-site scripting)이란 어떤 공격기법일까요?`

> 스크립트 코드를 삽입하고, 이를 다른 사용자가 실행하게 함으로써 사용자 정보를 탈취하거나 공격자의 의도에 따라 웹 페이지를 조작할 수 있는 공격입니다.

- `CSRF(Cross-site request forgery)이란 어떤 공격기법일까요?`

> 인증된 사용자가 악의적인 웹사이트에서 의도하지 않은 요청을 보내도록 유도하는 공격입니다.

- `SQL Injection이란 어떤 공격기법일까요?`

> 입력 폼 등에서 입력값에 SQL 쿼리를 삽입하여, 데이터베이스 서버를 공격하는 기법입니다.

---

- **`대부분의 최신 브라우저에서는 HTTP 대신 HTTPS가 권장됩니다. 이유가 무엇일까요?`**

> SSL ,TLS 와 같은 보안 프로토콜을 이용하여, 데이터를 암호화하여 전송하므로 중간자 공격, 도청, 데이터 변조 등의 공격으로부터 데이터를 보호합니다.

- `HTTPS와 TLS는 어떤 식으로 동작하나요? HTTPS는 어떤 역사를 가지고 있나요?`

> HTTPS는 Hyper Text Transfer Protocol Secure의 약자로, HTTP 프로토콜 위에 SSL/TLS 보안 프로토콜을 덧붙여 안전한 통신을 가능하게 하는 프로토콜입니다. HTTPS는 클라이언트와 서버 간의 통신 과정에서 데이터를 암호화하여 중간에 제3자가 정보를 탈취하거나 조작하는 것을 방지합니다.

> TLS(Transport Layer Security)는 SSL(Secure Sockets Layer)을 대체하기 위해 개발된 보안 프로토콜입니다. SSL과 TLS는 클라이언트와 서버 간의 통신에서 데이터를 암호화하고, 상호 인증을 수행하여 보안성을 제공합니다. HTTPS에서는 TLS를 사용하여 데이터를 암호화하고 안전한 통신을 지원합니다.

> HTTPS의 역사는 1994년 Netscape에서 처음 소개되었습니다. 당시에는 SSL을 사용하여 보안 접속을 제공하였습니다. 이후 1999년에는 TLS 1.0이 발표되어 SSL 대체용으로 사용되기 시작했습니다. 이후 버전인 TLS 1.1, TLS 1.2, TLS 1.3이 순차적으로 발표되어 현재는 TLS 1.3이 가장 많이 사용되고 있습니다.

- `HTTPS의 서비스 과정에서 인증서는 어떤 역할을 할까요? 인증서는 어떤 체계로 되어 있을까요?`

> HTTPS의 서비스 과정에서 인증서는 클라이언트와 서버 간의 상호 인증과 데이터 암호화에 사용됩니다. 인증서는 서버의 공개키를 포함하며, 클라이언트가 서버와 통신을 시작하기 전에 서버가 정식인지를 인증하고, 데이터를 안전하게 암호화하기 위해 사용됩니다.

> 인증서는 보통 인증 기관(CA, Certificate Authority)에 의해 발급되며, 인증 기관은 서버의 도메인 이름을 확인하고 서버가 해당 도메인의 소유자임을 인증합니다. 인증 기관은 인증서를 발급한 후, 해당 인증서를 인증서 목록(Certificate Revocation List, CRL)에 등록하고, 이를 사용하여 만료된 인증서 또는 무효화된 인증서를 체크합니다.

**구성 요소**

> 주체 이름: 인증서를 발급받은 조직 또는 개인의 이름

> 발행자 이름: 인증서를 발급한 인증 기관의 이름

> 유효 기간: 인증서의 유효 기간

> 공개키: 암호화에 사용되는 공개키

> 서명: 인증 기관의 개인키로 인증서에 대한 서명

---

## Quest

- 메모장의 서버와 클라이언트에 대해, 로컬에서 발행한 인증서를 통해 HTTPS 서비스를 해 보세요.

## Advanced

- TLS의 인증서에 쓰이는 암호화 알고리즘은 어떤 종류가 있을까요?
- HTTP/3은 기존 버전과 어떻게 다를까요? HTTP의 버전 3이 나오게 된 이유는 무엇일까요?
