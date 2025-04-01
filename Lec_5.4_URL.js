url = require('url')
addr = "http://localhost:8080/default.html?Name='Rahul'&Age=50#sir "
data = url.parse(addr,true)
console.log(data)
console.log(data.pathname)
console.log(data.querry)
console.log(data.host)