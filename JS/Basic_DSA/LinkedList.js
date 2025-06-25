class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertAtHead(data) {
    const node = new Node(data);
    node.next = this.head;
    this.head = node;
  }
  insertAtTail(data) {
    let node = new Node(data);
    if (!this.head) {
      this.head = node;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }

  insertAt(data, index) {
    if (index < 0) {
      return "Please Provide Valid index";
    }
    if (index == 0) {
      this.insertAtHead(data);
      return;
    }
    let newNode = new Node(data);
    let current = this.head;
    let i = 0;
    let prev = null;
    while (current !== null && i < index) {
      prev = current;
      current = current.next;
      i++;
    }
    if (i !== index) {
      return "Index out of bounds";
    }
    prev.next = newNode;
    newNode.next = current;
  }
  insertAtPrevNode(prevNode, data) {
    let newNode = new Node(data);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
  }
  deleteHead() {
    if (!this.head) {
      console.log("List is already empty");
      return;
    }
    this.head = this.head.next;
  }
  deleteTail() {
    if (!this.head) {
      console.log("List is already empty");
      return;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let current = this.head;
    let prev = null;
    while (current !== null) {
      if (current.next === null) {
        prev.next = null;
      }
      prev = current;
      current = current.next;
    }
  }
  deleteAt(index) {
    if (index < 0) {
      return "Invalid index";
    }

    if (!this.head) {
      console.log("List is empty");
      return;
    }
    if (index === 0) {
      this.deleteHead();
      return;
    }
    let i = 0;
    let currentNode = this.head;
    let prevNode = null;
    while (currentNode !== null && i < index) {
      prevNode = currentNode;
      currentNode = currentNode.next;
      i++;
    }
    if (!currentNode) {
      console.log("Index out of bounds");
      return;
    }
    prevNode.next = currentNode.next;
  }
  searchData(data) {
    let current = this.head;
    while (current !== null) {
      if (current.data === data) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
  traverse() {
    let str = "";
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.next == null) {
        str = str + currentNode.data;
      } else {
        str = str + currentNode.data + "->";
      }
      currentNode = currentNode.next;
    }
    return str;
  }
  reverse() {
    let prev = null;
    let current = this.head;

    while (current !== null) {
      let next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }
  length() {
    let length = 0;
    let current = this.head;
    while (current !== null) {
      length++;
      current = current.next;
    }
    return length;
  }
}

let list = new LinkedList();
list.insertAtHead(2);
list.insertAtHead(3);
list.insertAtHead(5);
list.insertAtHead(6);
list.insertAtTail(4);
list.insertAt(8, 2);
// list.deleteAt(2);
list.searchData(8);
console.log(list.traverse());
list.reverse();
console.log(list.traverse());
// console.log(list);
console.log(list.length());
