http = require('http')
fs = require('fs')
server = http.createServer((req,res)=>{
    let a = fs.readFileSync("image4.png")
    res.writeHead(200,{"Content-type":"image/png"})
    res.write(a)
    res.end()
})
server.listen(6061)
