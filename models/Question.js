'use strict';

const db = require("../config/db")

class Question {
  static CreateTable() {
    // const sql = `
    //   CREATE TABLE questions (
    //     id INTEGER PRIMARY KEY,
    //     content TEXT,
    //   )
    //   `
    CREATE TABLE questions (id INTEGER PRIMARY KEY)

    //console.log("Preparing to create questions table...")

    return new Promise(function(resolve){
      db.run(sql, function(){
        //console.log("...questions table created!")
        resolve("Created questions table!")
      })
    })
  }
}


module.exports = Question;
