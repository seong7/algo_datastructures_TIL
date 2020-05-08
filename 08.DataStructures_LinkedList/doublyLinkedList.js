class Node {
  constructor(value) {
    this.node = {
      value,
      next: null,
      prev: null,
    };
    return this.node;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
    return this.printList();
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length++;
    return this.printList();
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    for (let i = 0; i < this.length; i++) {
      // console.log(currentNode);
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  insert(index, value) {
    if (index >= this.length) {
      console.log("append");
      return this.append(value);
    }
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1); // 하나 전의 노드를 찾아야함
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = holdingPointer;
    holdingPointer.prev = newNode;
    this.length++;
    return this.printList();
  }
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  remove(index) {
    if (index === 0) {
      const holdingPointer = this.head;
      this.head = this.head.next;
      this.head.prev = null;
      holdingPointer.next = null;
      this.length--;
      return this.printList();
    }
    if (index >= this.length - 1) {
      const holdingPointer = this.tail;
      this.tail = holdingPointer.prev;
      holdingPointer.preve = null;
      this.tail.next = null;
      this.length--;
      return this.printList();
    }
    let leader = this.traverseToIndex(index - 1);
    let holdingPointer = leader.next.next;
    leader.next = holdingPointer;
    holdingPointer.prev = leader;
    this.length--;
    return this.printList();
  }
}

let myLinkedList = new DoublyLinkedList(10);
console.log(myLinkedList.append(5));
console.log(myLinkedList.append(16));
console.log(myLinkedList.remove(0));
console.log(myLinkedList.prepend(1));
console.log(myLinkedList.remove(1));
console.log(myLinkedList.insert(2, 99));
console.log(myLinkedList.remove(30));
console.log(myLinkedList.insert(20, 3));
