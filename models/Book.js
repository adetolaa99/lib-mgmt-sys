class Book {
  constructor(title, author, ISBN) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.borrowed = false;
  }

  isBorrowed() {
    return this.borrowed;
  }

  borrow() {
    if (this.borrowed) {
      console.log(`The book "${this.title}" is already borrowed.`);
      return false;
    }
    this.borrowed = true;
    return true;
  }

  return() {
    if (!this.borrowed) {
      console.log(`The book "${this.title}" was not borrowed.`);
      return false;
    }
    this.borrowed = false;
    return true;
  }
}

module.exports = Book;
