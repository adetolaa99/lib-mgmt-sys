const Book = require("../models/Book.js");

class BookController {
  createBook(title, author, ISBN) {
    return new Book(title, author, ISBN);
  }
}

module.exports = BookController;
