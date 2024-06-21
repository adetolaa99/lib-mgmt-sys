const UserController = require("./controllers/UserController.js");
const BookController = require("./controllers/BookController.js");
const LibraryController = require("./controllers/LibraryController.js");

const userController = new UserController();
const bookController = new BookController();
const libraryController = new LibraryController();

const library = libraryController.createLibrary();

const book1 = bookController.createBook(
  "Harry Potter",
  "J.K. Rowling",
  "1234567890"
);
const book2 = bookController.createBook(
  "The Hobbit",
  "J.R.R. Tolkien",
  "0987654321"
);
const book3 = bookController.createBook("1984", "George Orwell", "1122334455");
const book4 = bookController.createBook(
  "To Kill a Mockingbird",
  "Harper Lee",
  "5566778899"
);

library.addNewBook(book1);
library.addNewBook(book2);
library.addNewBook(book3);
library.addNewBook(book4);

const user1 = userController.createUser("John Doe", "u001");
library.registerMember(user1);

library.borrowBook(user1, "1234567890");
library.borrowBook(user1, "0987654321");
library.borrowBook(user1, "1122334455");

console.log(user1.borrowedBooks);

library.borrowBook(user1, "5566778899"); 

user1.returnBook("1234567890");
library.borrowBook(user1, "5566778899"); 

console.log(user1.borrowedBooks);
