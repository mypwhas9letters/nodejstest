console.log("hello world");
const fs = require('fs');

const notes = require('./notes.js')
const _ = require('lodash')
const yargs = require('yargs')

let unique = _.uniq(["hi",1,3,2,3,1,2,"hi"])

var command = process.argv[2]

if (command === 'add'){
  console.log("adding new note");
}else if (command === 'list'){
  console.log("listing");
}else if(command === 'read'){
  console.log("read");
}else if(command === "remove"){
  console.log("removing");
}else{
  console.log("not recognize");
}
