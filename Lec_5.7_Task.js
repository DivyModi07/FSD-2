// To print query string of url on console as well as on file using ES6 callback.

fs = require('fs')
url = require('url')

addr = "http://localhost:8080/default.html?year=2025&month=Febuary"
data = url.parse(addr,false).query
console.log(data)
fs.writeFile('ab.txt',data,()=>{}) // if url.parse(addr,true) then do JSON.stringify(data)