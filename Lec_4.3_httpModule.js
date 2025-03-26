http = require('http')
data={'name':'Divy','age':20}
server = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":'application/json'})
    // res.write("Hello")
    res.write(JSON.stringify(data))
    // res.write("<h1>How are u ? </h1>")
    res.end()
})
server.listen(5006)