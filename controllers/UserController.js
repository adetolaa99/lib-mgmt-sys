const User = require("../models/User.js");

class UserController {
  createUser(name, id) {
    return new User(name, id);
  }
}

module.exports = UserController;
