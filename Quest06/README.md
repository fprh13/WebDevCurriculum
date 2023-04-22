# Quest 06. 인터넷의 이해

## Introduction

- 이번 퀘스트에서는 인터넷이 어떻게 동작하며, 서버와 클라이언트, 웹 브라우저 등의 역할은 무엇인지 알아보겠습니다.

## Topics

- 서버와 클라이언트, 그리고 웹 브라우저
- 인터넷을 구성하는 여러 가지 프로토콜
  - IP
  - TCP
  - HTTP
- DNS

## Resources

- [OSI 모형](https://ko.wikipedia.org/wiki/OSI_%EB%AA%A8%ED%98%95)
- [IP](https://ko.wikipedia.org/wiki/%EC%9D%B8%ED%84%B0%EB%84%B7_%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C)
  - [Online service Traceroute](http://ping.eu/traceroute/)
- [TCP](https://ko.wikipedia.org/wiki/%EC%A0%84%EC%86%A1_%EC%A0%9C%EC%96%B4_%ED%94%84%EB%A1%9C%ED%86%A0%EC%BD%9C)
  - [Wireshark](https://www.wireshark.org/download.html)
- [HTTP](https://ko.wikipedia.org/wiki/HTTP)
  - Chrome developer tool, Network tab
- [DNS](https://ko.wikipedia.org/wiki/%EB%8F%84%EB%A9%94%EC%9D%B8_%EB%84%A4%EC%9E%84_%EC%8B%9C%EC%8A%A4%ED%85%9C)
  - [Web-based Dig](http://networking.ringofsaturn.com/Tools/dig.php)

## Checklist

---

- **`인터넷은 어떻게 동작하나요? Internet Protocol Suite의 레이어 모델에 입각하여 설명해 보세요.`**

> 인터넷은 데이터를 전송하는 데에 인터넷 프로토콜 스위트라는 계층 모델을 사용합니다. 이 모델은 링크, 인터넷, 전송, 응용 프로그램 레이어로 구성되며, 데이터는 각 레이어를 통해 처리되고 전송됩니다. 이를 통해 다른 컴퓨터와 통신하고 데이터를 주고받을 수 있습니다.

- `근거리에서 서로 떨어진 두 전자기기가 유선/무선으로 서로 통신하는 프로토콜은 어떻게 동작할까요?`

> 유선 통신 : 물리적인 케이블을 통해서 데이터를 보내며 통신합니다.
> 무선통신 블루투스, 와이파이 NFC와 같은 무선 프로토콜을 사용합니다.

- `근거리에 있는 여러 대의 전자기기가 서로 통신하는 프로토콜은 어떻게 동작할까요?`

> 무선 통신 프로토콜은 주파수 대역을 이용하여 데이터를 전송하며, 전송되는 데이터는 패킷으로 나누어져 전송됩니다. 각 패킷은 헤더와 페이로드로 구성되며, 헤더는 패킷의 송수신 정보 및 전송 방법을 기술하고, 페이로드는 실제 전송할 데이터를 포함합니다.

- `아주 멀리 떨어져 있는 두 전자기기가 유선/무선으로 서로 통신하는 프로토콜은 어떻게 동작할까요?`

> TCP/IP프로토콜을 사용합니다.
> 데이터를 패킷 단위로 분할하고, 패킷에 IP 주소를 부여한 후, 라우팅을 거쳐 목적지에 전송됩니다. 이렇게 전송된 데이터는 수신 측에서는 패킷을 재조립하여 원래의 데이터로 복원합니다.

- `두 전자기기가 신뢰성을 가지고 통신할 수 있도록 하기 위한 프로토콜은 어떻게 동작할까요?`

> 수신 측에서는 패킷을 수신하면, 패킷에 포함된 시퀀스 번호를 확인하여 순서를 보장하고, 정확한 패킷이 도착했는지 검사합니다. 만약, 패킷에 에러가 발생한 경우 수신 측에서는 ACK (Acknowledgment) 패킷을 송신 측에 보내 에러가 발생한 패킷을 재전송하도록 요청합니다.

- `HTTP는 어떻게 동작할까요?`

> 1. 클라이언트는 서버에 요청을 보냅니다.
> 2. 서버는 응답을 생성하여 클라이언트에게 보냅니다.
> 3. 클라이언트는 서버가 보낸 응답을 받은 뒤 메시지 바디에 포함된 데이터를 해석하여 표시합니다.

---

- **`우리가 브라우저의 주소 창에 www.knowre.com 을 쳤을 때, 어떤 과정을 통해 서버의 IP 주소를 알게 될까요?`**

> DNS서버에 knowre이라는 이름을 가진 도메인을 찾아서 등록된 IP주소로 요청을 보낸뒤 그 서버에서 클라이언트에게 응답을 줍니다.

---

## Quest

- tracert(Windows가 아닌 경우 traceroute) 명령을 통해 www.google.com 까지 가는 경로를 찾아 보세요.
  - 어떤 IP주소들이 있나요?
  - 그 IP주소들은 어디에 위치해 있나요?
- Wireshark를 통해 www.google.com 으로 요청을 날렸을 떄 어떤 TCP 패킷이 오가는지 확인해 보세요
  - TCP 패킷을 주고받는 과정은 어떻게 되나요?
  - 각각의 패킷에 어떤 정보들이 담겨 있나요?
- telnet 명령을 통해 http://www.google.com/ URL에 HTTP 요청을 날려 보세요.
  - 어떤 헤더들이 있나요?
  - 그 헤더들은 어떤 역할을 하나요?

## Advanced

- HTTP의 최신 버전인 HTTP/3는 어떤 식으로 구성되어 있을까요?
- TCP/IP 외에 전세계적인 네트워크를 구성하기 위한 다른 방식도 제안된 바 있을까요?
