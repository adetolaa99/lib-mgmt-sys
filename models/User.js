class User {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.borrowedBooks = [];
  }

  borrowBook(book) {
    if (this.borrowedBooks.length >= 3) {
      console.log(`${this.name} has already borrowed 3 books.`);
      return false;
    }
    if (book.isBorrowed()) {
      console.log(`The book "${book.title}" is already borrowed.`);
      return false;
    }
    this.borrowedBooks.push(book);
    book.borrow();
    return true;
  }

  returnBook(ISBN) {
    const bookIndex = this.borrowedBooks.findIndex(
      (book) => book.ISBN === ISBN
    );
    if (bookIndex === -1) {
      console.log(`${this.name} has not borrowed a book with ISBN: ${ISBN}`);
      return false;
    }
    const book = this.borrowedBooks[bookIndex];
    book.return();
    this.borrowedBooks.splice(bookIndex, 1);
    return true;
  }

  peekBook(ISBN) {
    return this.borrowedBooks.find((book) => book.ISBN === ISBN);
  }
}

module.exports = User;
