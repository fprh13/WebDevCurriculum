# Quest 18-B. 서비스의 운영: 로깅과 모니터링

## Introduction

- 이번 퀘스트에서는 서비스의 운영을 위해 로그를 스트리밍하는 법에 대해 다루겠습니다.

## Topics

- ElasticSearch
- AWS ElasticSearch Service
- Grafana

## Resources

- [ElasticSearch](https://www.elastic.co/kr/what-is/elasticsearch)
- [ElasticSearch 101](https://www.elastic.co/kr/webinars/getting-started-elasticsearch)
- [Grafana Panels](https://grafana.com/docs/grafana/latest/panels/)

## Checklist

<br>

- **`ElasticSearch는 어떤 DB인가요? 기존의 RDB와 어떻게 다르고 어떤 장단점을 가지고 있나요?`**

<br>

### **💡ElasticSearch**

<br>

> Elasticsearch는 분산 검색 및 분석 엔진이며, 데이터를 검색, 분석 및 시각화하는 데 사용됩니다.

<br>

### **💡RDB와의 차이점과 장담점**

> Elasticsearch는 NoSQL 기술의 일종으로써, Schema-less 형태로 데이터를 저장합니다. 이러한 특징으로 인해 데이터 형식이 유연하고 다양한 형태로 저장이 가능합니다. 또한, Elasticsearch는 데이터의 색인화를 실시간으로 처리할 수 있으므로, 검색 엔진이 필요한 시스템에 적합합니다.

> Elasticsearch의 장점은 높은 확장성과 성능, 실시간 색인화와 검색 기능 등이 있습니다. 또한, 검색 및 집계, 분석 등을 지원하여 데이터 처리에 대한 유연성을 제공합니다. 반면에 단점으로는 복잡한 검색 쿼리 작성 시 어려움이 있을 수 있으며, 고가용성 및 보안 측면에서 추가적인 작업이 필요합니다.

<br>
<br>

- **`AWS의 ElasticSearch Service는 어떤 서비스인가요?    ElasticSearch를 직접 설치하거나 elastic.co에서 직접 제공하는 클라우드 서비스와 비교하여 어떤 장단점이 있을까요?`**

<br>

### **💡AWS ElasticSearch Service**

<br>

> AWS의 ElasticSearch Service는 AWS에서 제공하는 관리형 Elasticsearch 클라우드 서비스입니다. 이 서비스를 사용하면 Elasticsearch 클러스터를 쉽게 설정, 운영 및 확장할 수 있습니다.

<br>

### **💡ElasticSearch를 직접 설치하거나 elastic.co에서 직접 제공하는 클라우드 서비스와의 비교**

<br>

**_장점_**

> **간편한 설정 및 배포** : ElasticSearch Service를 사용하면 Elasticsearch 클러스터를 쉽게 설정, 운영 및 확장할 수 있습니다. 이를 위해 복잡한 설정 작업을 수행할 필요가 없습니다.

> **확장성** : ElasticSearch Service는 클러스터를 쉽게 확장할 수 있도록 설계되어 있습니다. 이를 통해 필요에 따라 클러스터의 용량을 늘리거나 줄일 수 있습니다.

> **안정성** : AWS의 ElasticSearch Service는 AWS 클라우드의 기술 및 인프라를 기반으로 구축되어 있어 안정성이 높습니다.

> **관리 및 모니터링** : ElasticSearch Service는 AWS 콘솔을 통해 간편하게 모니터링하고 관리할 수 있습니다.

<br>

**_단점_**

> **비용** : AWS의 ElasticSearch Service를 사용하면 클라우드에서 제공하는 서비스임에 따라 비용이 발생합니다. 따라서 일부 사용자에게는 비용이 부담스러울 수 있습니다.

> **제한 사항** : AWS의 ElasticSearch Service는 일부 기능이 비활성화되어 있거나 일부 기능이 제한적으로 제공됩니다. 이는 사용자가 ElasticSearch 클러스터를 완전히 제어하지 못하게 할 수 있습니다.

<br>

- **`Grafana의 Panel 형식에는 어떤 것이 있을까요? 로그를 보기에 적합한 판넬은 어떤 형태일까요?`**

<br>

### **💡Grafana Panel 형식**

<br>

> **Graph Panel** : 시계열 데이터를 시각화하는데 가장 많이 사용되는 Panel입니다. 여러 개의 데이터 소스와 쿼리를 조합해 시계열 그래프, 바 차트, 파이 차트 등을 생성할 수 있습니다.

> **Singlestat Panel** : 단일 값 또는 최근 값 하나만을 표시할 때 사용하는 Panel입니다. 대시보드의 상태를 한눈에 파악하기 쉽습니다.

> **Table Panel** : 데이터베이스에서 가져온 데이터를 테이블 형태로 표시하는 Panel입니다. 데이터베이스에서 검색하거나 필터링할 수 있는 기능도 제공합니다.

> **Text Panel** : HTML, Markdown, JSON 등의 형식으로 텍스트를 표시할 때 사용하는 Panel입니다.

<br>

### **💡로그 확인 Panel**

<br>

> **Log Panel** : 로그 데이터를 검색하고 필터링하여 시간 순서대로 표시합니다. 로그 데이터를 시각화하기에 적합한 형태는 아니지만, 대량의 로그 데이터를 빠르게 분석하는 데 유용합니다. Log Panel은 ElasticSearch와 같은 데이터베이스에서 로그 데이터를 가져오거나, Prometheus와 같은 모니터링 시스템에서 메트릭 데이터를 가져와서 표시할 수 있습니다.

<br>

## Quest

- 우리의 웹 서버가 stdout으로 적절한 로그를 남기도록 해 보세요.
- ElasticSearch Service 클러스터를 작은 사양으로 하나 만들고, 도커 컨테이너의 stdout으로 출력된 로그가 ElasticSearch로 스트리밍 되도록 해 보세요.
- Grafana를 이용해 ElasticSearch의 로그를 실시간으로 볼 수 있는 페이지를 만들어 보세요.

## Advanced

- ElasticSearch와 Grafana는 어떤 라이센스로 배포되고 있을까요? AWS와 같은 클라우드 제공자들이 이러한 오픈소스를 서비스화 하는 것을 둘러싼 논란은 어떤 논점일까요?
