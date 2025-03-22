var fs = require('fs')
fs.writeFileSync('hello.txt',"How are you?")

var data = fs.readFileSync('hello.txt') //fs.readFileSync('hello.txt','utf-8')
console.log(data) // Its in form of Buffer(hexdecimal)
console.log(data.toString())