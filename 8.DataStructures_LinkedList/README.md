# Linked List

## Trade Off
- Array
  - size (메모리) 를 늘릴 때 O(N) 의 시간효율이 든다.
  - 특히 끝자리 요소 외의 요소를 추가하거나 삽입할 때 매우 안좋은 효율 가짐

- HashTable
  - 메모리를 신경쓰지 않고 많은 값을 넣을 수 있다.
  - 하지만 순서가 없다.

- Linked List
  - 순서를 가진다.
  - HashTable 의 collision 에 대한 해결책으로 한 Hash 값 주소에 Linked List 를 저장해 충돌이 발생한 값들을 모두 저장할 수 있다.

## 구성요소
 - head : 첫 node
 - tail : 마지막 node (null 을 pointing 함)
 - **pointer** : 객체를 참조하는 링크
     - 어떠한 객체가 참조를 받고 있지 않을 때 메모리에서 삭제하는 것이 Garbage collection 이다.
 - append : tail 에 새로운 node 추가
 - prepend : head 에 새로운 node 추가
 - insert : 중간에 새로운 node 추가

## Singly Linked List
 - memory 를 더 적게 쓴다.
 - prev 속성을 변화해주지 않아도 되므로 remove 나 insert 작업이 조금 더 빠르다.
 - reverse search(traverse) 를 하지 못한다.
 - **memory 가 제한적이고 search 가 많이 없으며 remove, insert 에 집중할 때 사용하기 좋다.**

## Doubly Linked List
 - previous node 에 link 가 연결되어 있다.
 - 거꾸로도 traverse 가 가능해진다. : 양쪽 search 는 조금 더 효율적임
 - 단점은 메모리가 좀 더 많이 소비된다. 

