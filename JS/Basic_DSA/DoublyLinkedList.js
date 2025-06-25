class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertAtHead(data) {
    let node = new Node(data, this.head, null);
    if (this.head !== null) {
      this.head.prev = node;
    }
    this.head = node;
    if (this.tail === null) {
      this.tail = node;
    }
  }
  insertAtTail(data) {
    let node = new Node(data, null, this.tail);

    if (this.tail !== null) {
      this.tail.next = node;
    }

    this.tail = node;

    if (this.head === null) {
      this.head = node;
    }
  }
  insertAtIndex(data, index) {
    if (index < 0) {
      return "Please provide ";
    }
    if (index == 0) {
      this.insertAtHead(data);
      return;
    }
    let newNode = new Node(data);
    let current = this.head;
    let i = 0;
    while (current && i < index) {
      i++;
      current = current.next;
    }
    if (current == null) {
      this.insertAtTail(data);
      return;
    }
    newNode.next = current;
    newNode.prev = current.prev;
    if (current.prev) {
      current.prev.next = newNode;
    }
    current.prev = newNode;
  }
  removeHead() {
    if (this.head === null) {
      return "No data exists";
    }
    let node = this.head.next;
    if (node) {
      node.prev = null;
    } else {
      this.tail = null;
    }
    this.head = node;
  }
}
let dobList = new DoublyLinkedList();
dobList.insertAtHead(2);
dobList.insertAtHead(4);
dobList.insertAtHead(8);
dobList.insertAtHead(12);
dobList.insertAtTail(5);
// dobList.insertAtIndex(25, 1);
dobList.removeHead();
console.log(dobList);
// 12 <-> 8 <-> 4 <-> 2 <-> 5
