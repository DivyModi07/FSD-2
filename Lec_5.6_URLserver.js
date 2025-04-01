// http = require('http')
// url = require('url')
// addr = "http://localhost:8080/default.html?year=2025&month=Febuary"
// server = http.createServer((req,res)=>{
//     data = url.parse(addr,true).query
//     res.write(data.year+" "+data.month)
//     res.end()
// })
// server.listen(5000)

// =========================================================================================================

// URL=http://localhost:5006/?year=2025
http = require('http')
url = require('url')
server = http.createServer((req,res)=>{
    data = url.parse(req.url,true).query
    res.writeHead(200,{"Content-type":"text/html"})
    res.write(data.year)
    res.end()
})
server.listen(5006)
