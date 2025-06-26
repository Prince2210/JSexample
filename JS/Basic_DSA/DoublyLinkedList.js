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
  insertAfter(node, data) {
    if (node == null) {
      return "Please provide valid node.";
    }
    let newNode = new Node(data, node.next, node);
    if (node.next !== null) {
      node.next.prev = newNode;
    }
    node.next = newNode;
    if (newNode.next == null) {
      this.tail = newNode;
    }
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
  removeTail() {
    if (this.tail == null) {
      return "no data";
    }
    let tail = this.tail;
    if (tail.prev.next) {
      tail.prev.next = null;
      this.tail = tail.prev;
    } else {
      this.tail = null;
      this.head = null;
    }
  }
  removeByValue(data) {
    let current = this.head;
    while (current !== null) {
      if (current.data == data) {
        if (current.prev == null) {
          this.removeHead();
        } else if (current.next == null) {
          this.removeTail();
        } else {
          current.prev.next = current.next;
          current.next.prev = current.prev;
        }
        return;
      }
      current = current.next;
    }
  }
  removeByIndex(index) {
    if (index < 0) {
      return "Invalid Index";
    }
    if (index == 0) {
      this.removeHead();
      return;
    }
    let i = 0;
    let current = this.head;
    while (current !== null && i < index) {
      current = current.next;
      i++;
    }
    if (current == null) {
      return "out of bound";
    }
    if (current.next == null) {
      this.removeTail();
      return;
    }
    current.next.prev = current.prev;
    current.prev.next = current.next;
    // optional to clear reference of detached node
    //current.next =null
    //current.prev =null
  }
  printForward() {
    let current = this.head;
    let str = "";
    while (current !== null) {
      if (current.next == null) {
        str = str + current.data;
      } else {
        str = str + current.data + " <--> ";
      }
      current = current.next;
    }
    return str;
  }
  printBackward() {
    let current = this.tail;
    let str = "";
    while (current !== null) {
      if (current.prev == null) {
        str = str + current.data;
      } else {
        str = str + current.data + " <--> ";
      }
      current = current.prev;
    }
    return str;
  }
  find(data) {
    let current = this.head;
    while (current !== null) {
      if (current.data == data) {
        return current;
      }
      current = current.next;
    }
    return null;
  }
  contains(data) {
    let current = this.head;
    while (current !== null) {
      if (current.data == data) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
  isEmpty() {
    if (this.head == null) {
      return true;
    }
    return false;
  }
  length() {
    let i = 0;
    let current = this.head;
    while (current !== null) {
      current = current.next;
      i++;
    }
    return i;
  }
  clear() {
    this.head = null;
    this.tail = null;
  }
  reverse() {
    let current = this.head;
    let temp = null;
    while (current !== null) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;
      current = current.prev;
    }
    if (temp != null) {
      this.tail = this.head;
      this.head = temp.prev;
    }
  }
}
let dobList = new DoublyLinkedList();
// dobList.insertAtHead(2);
// dobList.insertAtHead(4);
// dobList.insertAtHead(8);
// dobList.insertAtHead(12);
// dobList.insertAtTail(5);
// dobList.insertAtIndex(25, 1);
// dobList.removeHead();
// dobList.removeTail();
// dobList.removeByValue(12);
// dobList.removeByIndex(4);
// console.log(dobList.printBackward());
// console.log(dobList.find(2));
// console.log(dobList.contains(2));
// console.log(dobList.isEmpty());
// console.log(dobList.length());
// dobList.clear();
// dobList.reverse();
// let p = dobList.find(2);
// dobList.insertAfter(p, 10);
// console.log(dobList);

// 12 <-> 8 <-> 4 <-> 2 <-> 5
