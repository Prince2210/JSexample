class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(element) {
    return this.queue.push(element);
  }
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    let item = this.queue.shift();
    return item;
  }
  peek() {
    return this.queue[0];
  }
  isEmpty() {
    return this.queue.length === 0;
  }
  size() {
    return this.queue.length;
  }
  clear() {
    this.queue = [];
  }
  print() {
    return this.queue.join(", ");
  }
}

let queue = new Queue();
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
console.log(queue.dequeue());
console.log(queue.peek());
