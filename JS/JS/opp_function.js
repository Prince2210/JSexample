function Book(title, isAvailable) {
  this.title = title;
  this.isAvailable = isAvailable;
  this.showTitle = function () {
    return this.title;
  };
}
const books = [
  new Book("Book A", "Author 1"),
  new Book("Book B", "Author 2"),
  new Book("Book C", "Author 3"),
  new Book("Math", "Ram"),
  new Book("Science", "Shyam"),
  new Book("History", "Geeta"),
];

Book.prototype.getBookName = function () {
  console.log(this.showTitle());
};
let arr = [];

Array.prototype.Neha = function () {
  console.log("NEHA JI");
};

arr.Neha();
