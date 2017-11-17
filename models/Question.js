'use strict';

const db = require("../config/db")

class Question {
  static CreateTable {
    const sql = '
      CREATE TABLE IF NOT EXISTS questions (
          id INTEGER PRIMARY KEY,
          content TEXT,
      )'
  }
}


module.exports = Question;
