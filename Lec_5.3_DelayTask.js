// http = require('http')
// fs = require('fs')
// server = http.createServer((req,res)=>{
//     res.writeHead(200,{"Content-type":"text/html"})
//     res.write(`<p id="demo"></p>
//     <script>
//         setTimeout(function(){
//             document.getElementById('demo').innerHTML='HELLO'},2000)
//     </script> `)
//     res.end()
// })
// server.listen(6008)

// ==================================================================================================

http = require('http')
fs = require('fs')
server = http.createServer((req,res)=>{
    setTimeout(()=>{
        res.writeHead(200,{"Content-type":"text/html"})
        res.write('hello')
        res.end()
    },5000)
})
server.listen(6016)
