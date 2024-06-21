class Library {
  constructor() {
    this.books = [];
    this.users = [];
  }

  registerMember(user) {
    this.users.push(user);
  }

  addNewBook(book) {
    this.books.push(book);
  }

  borrowBook(user, ISBN) {
    if (user.borrowedBooks.length >= 3) {
      console.log(`${user.name} has already borrowed 3 books.`);
      return false;
    }
    const book = this.books.find((book) => book.ISBN === ISBN);
    if (!book) {
      console.log(`No book with ISBN: ${ISBN} found in the library.`);
      return false;
    }
    if (book.isBorrowed()) {
      console.log(`The book "${book.title}" is already borrowed.`);
      return false;
    }
    user.borrowBook(book);
    return true;
  }
}

module.exports = Library;
