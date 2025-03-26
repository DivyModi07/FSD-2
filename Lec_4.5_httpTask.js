// Create HTTP webpage on which home page display “Home page”, student page shows “Student page” and any other page shows “Page Not found”.    (Render Response & Routing)

http = require('http')
server = http.createServer((req,res)=>{
    if(req.url == '/'){
        res.writeHead(200,{"Content-type":'text/html'})
        res.write("<h1>Home Page</h1>")
        res.end()
    }
    else if(req.url == '/about'){
        res.write("You are on about page")
        res.end()
    }
    else{
        res.writeHead(404,{"Content-type":'text/html'})
        res.write('<h4>Page Not Found</h4>')
        res.end()
    }
})
server.listen(5008)
console.log("Connection Done")