# Quest 04. OOP의 기본

## Introduction

- 이번 퀘스트에서는 바닐라 자바스크립트의 객체지향 프로그래밍에 대해 알아볼 예정입니다.

## Topics

- 객체지향 프로그래밍
  - 프로토타입 기반 객체지향 프로그래밍
  - 자바스크립트 클래스
    - 생성자
    - 멤버 함수
    - 멤버 변수
  - 정보의 은폐
  - 다형성
- 코드의 재사용

## Resources

- [MDN - Classes](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Classes)
- [MDN - Inheritance and the prototype chain](https://developer.mozilla.org/ko/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- [MDN - Inheritance](https://developer.mozilla.org/ko/docs/Learn/JavaScript/Objects/Inheritance)
- [Polymorphism](https://medium.com/@viktor.kukurba/object-oriented-programming-in-javascript-3-polymorphism-fb564c9f1ce8)
- [Class Composition](https://alligator.io/js/class-composition/)
- [Inheritance vs Composition](https://woowacourse.github.io/javable/post/2020-05-18-inheritance-vs-composition/)

## Checklist

---

- **`객체지향 프로그래밍은 무엇일까요?`**

> 객체지향 프로그래밍(Object-Oriented Programming, OOP)은 컴퓨터 프로그래밍 패러다임 중 하나로, 프로그램을 작성할 때 객체(Object)를 중심으로 개발하는 방법을 말합니다.

- `#`로 시작하는 프라이빗 필드는 왜 필요한 것일까요? 정보를 은폐(encapsulation)하면 어떤 장점이 있을까요?

> 1. 객체의 내부 데이터를 보호합니다.
> 2. 객체의 외부 인터페이스를 단순화 합니다.
> 3. 코드의 유지보수성을 높입니다.
> 4. 코드의 재사용성을 높입니다.

- `다형성이란 무엇인가요? 다형성은 어떻게 코드 구조의 정리를 도와주나요?`

> 다항성 : 객체나 메서드가 다양한 형태를 가질 수 있는 능력을 말합니다.

> => 1. 오버로딩(Overloading)과 오버라이딩(Overriding) 사용

> 2.  객체의 타입을 검사하지 않고도 메서드를 호출할 수 있으므로, if 문이나 switch 문 등을 사용하지 않아도 됩니다.

- `상속이란 무엇인가요? 상속을 할 때의 장점과 단점은 무엇인가요?`

_장점 =>_

> **코드 재사용성** : 상위 클래스에서 구현한 메서드와 변수를 하위 클래스에서 그대로 사용할 수 있기 때문에 코드를 재사용할 수 있습니다.

> **유지보수 용이성** : 상위 클래스에서 공통적인 코드를 관리하므로, 유지보수가 용이합니다.

> **다형성 구현** : 상속을 통해 다형성을 구현할 수 있습니다.

단점 =>

> **복잡성** : 클래스의 상속 관계가 복잡해질수록 코드의 복잡성도 증가합니다.

> **의존성** : 하위 클래스는 상위 클래스에 의존하므로, 상위 클래스의 변경이 하위 클래스에 영향을 미칠 수 있습니다.

> **가독성 저하** : 상속 관계가 복잡해지면 코드의 가독성이 저하될 수 있습니다.

- `OOP의 합성(Composition)이란 무엇인가요? 합성이 상속에 비해 가지는 장점은 무엇일까요?`

> **합성(Composition)** : 객체지향 프로그래밍에서 하나의 클래스가 다른 클래스를 구성 요소로 포함하는 것을 말합니다.

_장점 =>_

> **유연성** : 상속보다 더 유연한 코드 구조를 만들 수 있습니다. 클래스 간의 관계가 덜 복잡해지고, 의존성이 줄어듭니다.

> **재사용성** : 구성 요소 클래스는 독립적으로 존재할 수 있기 때문에, 여러 클래스에서 공유해서 사용할 수 있습니다.

> **더 작은 단위의 코드** : 상속보다 더 작은 단위의 코드를 만들 수 있습니다. 이는 가독성과 유지보수성을 높여줍니다.

---

- **`자바스크립트의 클래스는 어떻게 정의할까요?`**

> class를 선언하고 class 뒤에 class이름을 지정해줍니다.
> 그리고 class에 사용될 메소드를 정의 합니다.

- `프로토타입 기반의 객체지향 프로그래밍은 무엇일까요?`

> 프로토타입 기반의 객체지향 프로그래밍은 객체를 생성할 때 다른 객체를 기반으로 새로운 객체를 만드는 방식을 사용하는 객체지향 프로그래밍 패러다임입니다.
> 이 방식에서는 클래스가 없으며, 객체를 생성할 때 원형(prototype)이 되는 객체를 사용합니다. 원형 객체는 다른 객체들이 상속하여 사용할 수 있는 공통 속성과 메서드를 가지고 있습니다.

- `자바스크립트의 클래스는 이전의 프로토타입 기반의 객체지향 구현과 어떤 관계를 가지고 있나요?`

> 자바스크립트는 프로토타입 기반의 객체지향 프로그래밍 언어이기 떄문에 클래스를 사용하더라도 프로토타입 기반의 객체지향 프로그래밍을 이해하고 있어야지 자바스크립트를 잘 다룰 수 있습니다.

---

## Quest

- 웹 상에서 동작하는 간단한 바탕화면 시스템을 만들 예정입니다.
- 요구사항은 다음과 같습니다:
  - 아이콘은 폴더와 일반 아이콘, 두 가지의 종류가 있습니다.
  - 아이콘들을 드래그를 통해 움직일 수 있어야 합니다.
  - 폴더 아이콘은 더블클릭하면 해당 폴더가 창으로 열리며, 열린 폴더의 창 역시 드래그를 통해 움직일 수 있어야 합니다.
  - 바탕화면의 생성자를 통해 처음에 생겨날 아이콘과 폴더의 개수를 받을 수 있습니다.
  - 여러 개의 바탕화면을 각각 다른 DOM 엘리먼트에서 동시에 운영할 수 있습니다.
  - Drag & Drop API를 사용하지 말고, 실제 마우스 이벤트(mouseover, mousedown, mouseout 등)를 사용하여 구현해 보세요!

## Advanced

- 객체지향의 역사는 어떻게 될까요?
- Smalltalk, Java, Go, Kotlin 등의 언어들로 넘어오면서 객체지향 패러다임 측면에서 어떤 발전이 있었을까요?
