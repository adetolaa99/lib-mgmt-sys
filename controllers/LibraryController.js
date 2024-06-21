const Library = require("../models/Library.js");

class LibraryController {
  createLibrary() {
    return new Library();
  }
}

module.exports = LibraryController;
