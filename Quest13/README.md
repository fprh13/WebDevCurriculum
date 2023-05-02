# Quest 13. 웹 API의 응용과 GraphQL

## Introduction

- 이번 퀘스트에서는 차세대 웹 API의 대세로 각광받고 있는 GraphQL에 대해 알아보겠습니다.

## Topics

- GraphQL
  - Schema
  - Resolver
  - DataLoader
- Apollo

## Resources

- [GraphQL](https://graphql.org/)
- [GraphQL.js](http://graphql.org/graphql-js/)
- [DataLoader](https://github.com/facebook/dataloader)
- [Apollo](https://www.apollographql.com/)

## Checklist

- **`GraphQL API는 무엇인가요? REST의 어떤 단점을 보완해 주나요?`**

> GraphQl API : Facebook에서 개발한 데이터 쿼리 언어인 GraphQL을 이용하여 구현된 API입니다. REST API와는 다르게 클라이언트가 필요한 데이터를 직접 요청할 수 있는 유연한 데이터 쿼리 언어를 제공하며, 클라이언트는 필요한 데이터만 요청할 수 있습니다. 즉, REST API에서는 서버가 정해진 데이터만을 반환하지만, GraphQL API에서는 클라이언트가 요청하는 데이터만을 반환합니다.

_REST의 어떤 단점을 보완 하는가?_

> 1. Over-fetching과 Under-fetching 문제 해결

> 2. 단 하나의 엔드포인트 사용

> 3. Strong Typing 지원

> 4. Documentation 자동 생성

---

- **`GraphQL 스키마는 어떤 역할을 하며 어떤 식으로 정의되나요?`**

> GraphQL 스키마는 GraphQL API에서 사용되는 데이터 타입, 쿼리, 뮤테이션 등을 정의하는 일종의 계약서입니다. 스키마는 API 클라이언트에게 제공될 수 있는 데이터와 해당 데이터를 가져오는 데 사용될 수 있는 쿼리와 뮤테이션의 구조와 규칙을 제공합니다.

_스키마 구성 요소_

> 1. Object Type

> 2. Query Type

> 3. Mutation Type

---

- **`GraphQL 리졸버는 어떤 역할을 하며 어떤 식으로 정의되나요?`**

> GraphQL 리졸버는 GraphQL 쿼리에 의해 요청된 필드에 대한 실제 데이터를 제공하는 함수입니다. 즉, 클라이언트가 요청한 쿼리의 필드에 해당하는 데이터를 가져오는 작업을 수행합니다.

**정의**

> fieldName: 리졸버 함수가 제공하는 데이터의 필드 이름

> parent: 해당 필드의 부모 객체

> args: 쿼리에서 전달된 인수

> context: GraphQL 요청에 대한 컨텍스트 정보

> info: 현재 쿼리의 실행 정보

- `GraphQL 리졸버의 성능 향상을 위한 DataLoader는 무엇이고 어떻게 쓰나요?`

> DataLoader는 GraphQL API에서 데이터를 효율적으로 가져오기 위한 유틸리티 라이브러리입니다. DataLoader는 일괄 처리와 캐싱 기능을 사용하여 데이터를 로드하므로 데이터를 로드하는 방법을 최적화할 수 있습니다.

**사용법**

> DataLoader는 데이터를 로드하고 캐시하여 다중 요청에서 데이터를 중복으로 로드하지 않기 때문에 사용하려면 데이터를 로드하는 리졸버 함수를 변경하여 DataLoader를 사용하도록 감싸야 합니다. DataLoader는 리졸버 함수가 호출될 때 인수로 전달시키고 이 인수를 사용하여 데이터를 로드하고 캐시하여 리졸버 함수의 실행을 최적화해주도록 합니다..

---

- **`클라이언트 상에서 GraphQL 요청을 보내려면 어떻게 해야 할까요?`**

> HTTP POST 요청: GraphQL은 HTTP POST 요청을 사용하여 서버와 통신합니다. 클라이언트에서는 fetch()와 같은 HTTP 라이브러리를 사용하여 GraphQL 쿼리를 서버로 보냅니다. 이때 요청 본문은 JSON 형식으로 작성됩니다.

> GraphQL 클라이언트 라이브러리: GraphQL 클라이언트 라이브러리를 사용하면 GraphQL 요청을 간편하게 생성하고 보낼 수 있습니다. 대표적으로 Apollo Client, Relay 등이 있습니다.

> GraphQL Playground: GraphQL Playground는 GraphQL 요청을 테스트하고 디버깅하는 데 유용한 도구입니다. GraphQL Playground를 사용하면 클라이언트에서 GraphQL 쿼리를 직접 작성하고 서버로 보낼 수 있습니다.

> GraphiQL: GraphiQL은 GraphQL Playground와 비슷한 도구로, 클라이언트에서 GraphQL 요청을 작성하고 보내는 데 사용됩니다. 이 도구는 GraphQL 서버와 함께 제공되며, 대개는 개발용으로 사용됩니다.

- `Apollo 프레임워크(서버/클라이언트)의 장점은 무엇일까요?`

> 강력한 기능: Apollo 프레임워크는 GraphQL을 사용하여 데이터를 쿼리, 뮤테이션, 구독할 수 있으며, 캐시, 페이징, 오류 처리, 인증 등 다양한 기능을 제공합니다.

> 개발 생산성 향상: Apollo 프레임워크를 사용하면 GraphQL 스키마를 기반으로 클라이언트와 서버를 쉽게 개발할 수 있습니다. 또한, 클라이언트와 서버에서 공통적으로 사용되는 코드를 쉽게 공유할 수 있습니다.

> 확장성: Apollo 프레임워크는 GraphQL 스키마를 기반으로 동작하기 때문에, 스키마를 변경하거나 추가할 때, 코드를 수정할 필요 없이 쉽게 확장할 수 있습니다.

> 생태계 지원: Apollo 프레임워크는 다양한 개발자 커뮤니티에서 사용되고 있으며, GraphQL에 대한 지원 및 확장 기능도 매우 잘 제공됩니다.

> 유연성: Apollo 프레임워크는 다양한 환경에서 사용할 수 있습니다. 예를 들어, React, Vue, Angular 등 다양한 프론트엔드 프레임워크와 함께 사용할 수 있으며, Node.js 기반의 서버와도 쉽게 통합될 수 있습니다.

> 성능 최적화: Apollo 프레임워크는 GraphQL 쿼리를 최적화하여, 필요한 데이터만 가져오고 중복된 데이터를 줄여 성능을 최적화할 수 있습니다.

- `Apollo Client를 쓰지 않고 Vanilla JavaScript로 GraphQL 요청을 보내려면 어떻게 해야 할까요?`

> XMLHttpRequest (XHR) 객체 사용 :
> XMLHttpRequest(XHR) 객체를 사용하여 GraphQL 요청을 보낼 수 있습니다. XMLHttpRequest 객체를 생성하고, open() 메서드를 사용하여 요청을 설정하고, send() 메서드를 사용하여 요청을 보냅니다. 이때 요청 본문은 JSON.stringify() 메서드를 사용하여 JSON 형식으로 변환합니다.

> fetch() API 사용 :
> fetch() API를 사용하여 GraphQL 요청을 보낼 수 있습니다. fetch() 함수를 호출하고, 요청 설정 객체를 전달하여 요청을 보냅니다. 이때 요청 본문은 JSON.stringify() 메서드를 사용하여 JSON 형식으로 변환합니다.

---

- **`GraphQL 기반의 API를 만들 때 에러처리와 HTTP 상태코드 등은 어떻게 하는게 좋을까요?`**

> HTTP 상태코드 :
> GraphQL은 모든 응답을 HTTP 상태코드 200으로 반환합니다. 이는 GraphQL이 에러를 포함한 모든 응답을 JSON으로 반환하기 때문입니다. 따라서, HTTP 상태코드는 항상 200으로 반환됩니다. 그러나, 에러가 발생할 경우에는 응답 객체에 "errors" 속성이 포함됩니다. 따라서, 클라이언트는 "errors" 속성이 존재할 경우에는 에러가 발생했다는 것을 인지하고 처리해야 합니다.

> 에러처리 :
> GraphQL에서는 일반적으로 "errors" 속성을 사용하여 에러를 반환합니다. 에러는 다음과 같은 형식으로 반환됩니다.

---

## Quest

- 메모장의 서버와 클라이언트 부분을 GraphQL API로 수정해 보세요.

## Advanced

- GraphQL이 아직 제대로 수행하지 못하거나 불가능한 요구사항에는 어떤 것이 있을까요?
- GraphQL의 경쟁자에는 어떤 것이 있을까요?
