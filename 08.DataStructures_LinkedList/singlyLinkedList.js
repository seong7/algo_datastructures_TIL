class Node {
  constructor(value) {
    this.node = {
      value,
      next: null,
    };
    return this.node;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    //   const newNode = {
    //     value: value,
    //     next: null
    //   }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this.printList();
  }
  prepend(value) {
    const newNode = new Node(value);
    //   const newNode = {
    //     value: value,
    //     next: null
    //   }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this.printList();
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  insert(index, value) {
    //Check for proper parameters;
    if (index >= this.length) {
      console.log("append");
      return this.append(value);
    }

    const newNode = new Node(value);
    //   const newNode = {
    //     value: value,
    //     next: null
    //   }
    const leader = this.traverseToIndex(index - 1); // 하나 전의 노드를 찾아야함
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }
  traverseToIndex(index) {
    //Check parameters
    // console.log("index", index);
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      // console.log(currentNode);
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  remove(index) {
    if(index === 0) {
      const holdingPointer = this.head;
      this.head = this.head.next
      holdingPointer.next = null;
      this.length--;
      return this.printList();
    }
    if(index >= this.length - 1){   // 길이보다 크면 tail 삭제로 구현함
      this.tail = this.traverseToIndex(this.length - 1); // tail 바로 앞
      this.tail.next = null; 
      this.length--;
      return this.printList();
    }
    let leader = this.traverseToIndex(index - 1);
    leader.next = leader.next.next;
    this.length--;
    return this.printList();
  }
  /* 중요 !!!  */
  reverse(){
    if(!this.head.next) {
      return this.head;
    }

    let first = this.head;
    let second = this.head.next;

    // 원래의 순서대로 도는 loop
    while(second) {  // tail 의 경우 second 가 null 이므로 while loop escape 됨
      const temp = second.next;
      second.next = first;
      first = second;  // 다음 loop 위해 first 에 다음 node (second) 부여 
      second = temp;   // 다음 loop 위해 second 에 다음 node (second.next __temp) 부여
    }

    this.tail = this.head; // tail 에 원래의 head 를 부여해줌
    this.head.next = null; // 원래의 head.next 에 null 부여 
    this.head = first;     // while 문의 종료 시점 즉, 원래 순서의 가장 마지막 node (원래 tail) 를 head 에 부여
    return this.printList();
  }
}

let myLinkedList = new LinkedList(10);
console.log(myLinkedList.append(5));
console.log(myLinkedList.append(16));
console.log(myLinkedList.prepend(1));
console.log(myLinkedList.insert(2, 99));
console.log(myLinkedList.remove(0));
console.log(myLinkedList.insert(20, 88));
console.log("length", myLinkedList.length);
console.log("tail", myLinkedList.tail);
console.log(myLinkedList.remove(30));
console.log(myLinkedList.insert(20, 2));
console.log(myLinkedList.reverse());
console.log(myLinkedList.head);
console.log(myLinkedList.tail);
