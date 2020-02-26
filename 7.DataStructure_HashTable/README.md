# Hash Table

> 오늘날 가장 많이 쓰이는 data structure 중 하나 (array, hash table)

## - 언어 별 명칭

- Python : Dictionary
- JavaScript : Object / Map
- Java : Map
- Ruby : Hash

## - Hash Function

- 임의의 길이인 **input data** 에 대해 고정된 길이의 **Hash** 를 생성하는 **function**
- Hash Table 의 기본 동작 원리임
- Computer Science 전반에 사용됨<br/><br/>

  ### -- Hash Function 의 종류

  - **md5**
  - **SHA-1**
  - **SHA-256**

    > - 가장 복잡하게 동작하는 hash function
    > - hash 생성에 너무 많은 시간이 소요됨
    > - cryptography (암호화) 등에 사용됨

    <br/>

  ### -- Hash Function 의 특징

  - **one way**

    - hash value 로는 input 이 무엇인지 알 수 없음

  - **consistency (일관성)**

    - **동일한 input 값**에는 항상 **동일한 hash 값** 생성함
    - 수학에서 **[idempotent (멱등)](https://ko.dict.naver.com/#/entry/koko/4fcb3da5c4874aa8828a7e5ba763a86d)** 라고 부름

    <br/>

  ### -- Hash Table 에서 Hash Function 의 역할

  - input (key) 를 **Hash 로 변환**하여 value 를 저장할 또는 저장된 **memory 주소**로 **mapping** 한다.

    <br/>

  ### -- Hash Function 의 장점

  - **Fast Data Access**

    > 위의 역할을 매우 빠르게 수행하므로 **time-complexity O(1)** 으로 가정함

  - **간편함**

    > **언어 또는 프레임워크**에 이미 구현되어 있는 기능이므로 별다른 구현 코드 없이 **내장된 기능**에 맡긴다.

  ### -- Hash Function 의 단점

  - **Collision (충돌)**

    > - hash table 에서는 필할 수 없는 문제점임
    > - 발생 시 해당 메모리 주소의 값을 찾기 위해 모든 해당 주소에 충돌 저장된
    >   모든 값을 search 해야하므로  
    >   O(n/k) => **O(n) 의 시간 복잡도** 형성  
    >   (k : hash table 의 크기)

  - **해결책**
    - **Linked List** (대표적)
    - Separate Chaining
    - Open Addressing
    - Robinhood Hashing
