url = require('url')
addr = "http://localhost:8080/default.html?year=2025&month=March "
data = url.parse(addr,true)
console.log(data)
// console.log(data.query.year)
let x = data.query.year
if (x%4 == 0){
    console.log('Leap Year')
}
else{
    console.log('Not a leap year')
}