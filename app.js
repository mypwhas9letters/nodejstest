console.log("hello world");
const fs = require('fs');
const os = require('os');
const notes = require('./notes.js')

var user = os.userInfo();
console.log(notes.addNote(6,7))

// fs.appendFile('greeting.txt', `Hello, ${user.username}! test ${notes.number}`, err => {
//   if(err) throw err;
//   console.log("It works")
// })
