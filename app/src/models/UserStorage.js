"use strict";

class UserStorage {
  static #users = {
    id: ["daniel", "patrick", "kiana"],
    pw: ["d123", "p123", "k123"],
    name: ["다니엘", "패트릭", "키아나"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});

    return newUsers;
  }
}

module.exports = UserStorage;
