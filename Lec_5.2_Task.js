// home page => json
// gallery page => Image
// login page => Form
// else => Page not found

http = require('http')
fs = require('fs')
server = http.createServer((req,res)=>{
    if(req.url == '/'){
        data={'name':'Divy','age':20}
        res.writeHead(200,{"Content-type":'application/json'})
        res.write(JSON.stringify(data))
        res.end()
    }
    else if(req.url == '/gallery'){
        let a = fs.readFileSync("image4.png")
        res.writeHead(200,{"Content-type":"image/png"})
        res.write(a)
        res.end()
    }
    else if(req.url == '/login'){
        res.writeHead(404,{"Content-type":'text/html'})
        res.write(`<form>
            Username:<input type='text'><br>
            Password:<input type='password'><br>
            <input type='submit'><br>
            </form>`)
        res.end()
    }
    else{
        res.writeHead(404,{"Content-type":'text/html'})
        res.write('<h4>Page Not Found</h4>')
        res.end()
    }
})
server.listen(5010)
console.log("Connection Done")