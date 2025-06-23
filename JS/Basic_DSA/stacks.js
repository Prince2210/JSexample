class Stack {
  constructor() {
    this.stack = [];
  }
  push(element) {
    this.stack.push(element);
  }
  pop() {
    this.stack.pop();
  }
  peek() {
    return this.stack[this.stack.length - 1];
  }
  isEmpty() {
    return this.stack.length === 0;
  }
  size() {
    return this.stack.length;
  }
  clear() {
    this.stack = [];
  }
  contains(element) {
    return this.stack.includes(element);
  }
  reverse() {
    return this.stack.reverse();
  }
  print() {
    return this.stack.join(",");
  }
  getMin() {
    let min = Infinity;
    for (let i of this.stack) {
      if (i < min) {
        min = i;
      }
    }
    return min;
  }
  //   getMin() {
  //     return Math.min(...this.stack);
  //   }
  //   getMax() {
  //     return Math.max(...this.stack);
  //   }
  getMax() {
    let max = -Infinity;
    for (let i of this.stack) {
      if (i > max) {
        max = i;
      }
    }
    return max;
  }
}
const stack = new Stack();

stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
// console.log(stack.peek());

// console.log(stack.contains(1));
// console.log(stack.print());
console.log(stack.getMin());
console.log(stack.getMax());
