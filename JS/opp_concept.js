class Book {
  constructor(title, author, isAvailable = true) {
    this.title = title;
    this.author = author;
    this.isAvailable = isAvailable;
  }
  borrow() {
    this.isAvailable = false;
    return this.isAvailable;
  }
  returnBook() {
    this.isAvailable = true;
    return this.isAvailable;
  }
}
class User {
  constructor(name, noOfBooks = []) {
    this.name = name;
    this.noOfBooks = noOfBooks;
  }
  borrowBook(book) {
    if (book.isAvailable) {
      this.noOfBooks.push(book.title);
      book.borrow();
    }
  }
  returnBook(book) {
    this.noOfBooks = this.noOfBooks.filter((title) => title != book.title);
    book.returnBook();
    return this.noOfBooks;
  }
}
class Librarian extends User {
  addBook(library, book) {
    library.books.push(book);
  }
  removeBook(library, bookTitle) {
    library.book.filter((book) => book.title !== bookTitle);
  }
}
class Library {
  constructor(books = []) {
    this.books = books;
  }
  listAvailableBooks() {
    let availableBooks = [];
    this.books.forEach((book) => {
      if (book.isAvailable) {
        availableBooks.push(book);
      }
    });
    return availableBooks;
  }
}
const books = [
  new Book("Book A", "Author 1"),
  new Book("Book B", "Author 2"),
  new Book("Book C", "Author 3"),
  new Book("Math", "Ram"),
  new Book("Science", "Shyam"),
  new Book("History", "Geeta"),
];

const libOne = new Library(books);

const riya = new Librarian("Riya");

const user1 = new User("Prince");

const user2 = new User("Atul");

const libraranJyoti = new Librarian("Jyoti", books);

user1.borrowBook(books[3]);
user2.borrowBook(books[4]);

user1.returnBook(books[3]);

libraranJyoti.addBook(libOne, new Book("physics", "Prince"));

console.log(books);
