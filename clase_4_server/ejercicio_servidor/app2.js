var http = require("http")
var fs = require("fs")

http.createServer( function(req,res){
  if(req.url === (""||"/")){
    res.writeHead(200,{"Content-Type":"text/html"})
    res.end("<h1>Hello World</h1>")
  }else{
    res.writeHead(404,{"Content-Type":"text/html"})
    res.end("<h1>ERROR 404</h1><br><p>Esto no anda ;=)</p>" )
  }

}).listen(3000, '127.0.0.1')
