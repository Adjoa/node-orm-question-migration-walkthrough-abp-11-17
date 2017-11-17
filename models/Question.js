'use strict';

const db = require("../config/db")

class Question {
  static CreateTable {
    const sql = `
      CREATE TABLE IF NOT EXISTS questions (
        id INTEGER PRIMARY KEY,
        content TEXT,
      )`

    console.log('Preparing to create questions table...')
  }
}


module.exports = Question;
