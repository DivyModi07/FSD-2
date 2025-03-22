// 1. Write a Nodejs script to take "0 1 -9 20 33 -44 50" elements separated by white space in .txt file. Print sorted array of these 5 elements on Node Js server.

// var fs = require('fs')

// // fs.writeFileSync('Task1.txt',"0 1 -9 20 33 -44 50")
// value = fs.readFileSync('Task1.txt','utf-8')
// value = value.split(" ").sort()
// console.log(value) // ans in string

// for (let i=0;i<value.length;i++){
//     value[i] = parseInt(value[i])
// }
// console.log(value) // ans in int

// ---------------------------------------------------------------------------------------------------------------------------------------

// 2. Defining an array of object with properties name and age. Write this object in a file named student.txt then read the file and display the object on console.

var fs = require('fs')

obj = [
    {'Divy':20},
    {'Meet':20}
]

// fs.writeFileSync('student1.txt',JSON.stringify(obj))
console.log(fs.readFileSync('student1.txt','utf-8'))