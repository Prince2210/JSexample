class Book {
  constructor(title, author) {
    this.title = title;
  }
  hello() {
    return `${this.title}`;
  }
}
let b1 = new Book("Prince", "PC");
let b2 = new Book("LIFE", "CE");
console.log(b1.hello());
// console.log(b);/
