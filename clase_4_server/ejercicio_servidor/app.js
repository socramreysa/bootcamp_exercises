var http = require("http")
var fs = require("fs")

http.createServer( function(req,res){
  if(req.url=== "/doge"){
    res.writeHead(200,{"Content-Type":"image/jpeg"})
    var img = fs.readFileSync(__dirname +'/dogeDog.jpg');
		res.end(img)
  }else if(req.url==="/about"){
    res.writeHead(200,{"Content-Type":"text/html"})
    res.end("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
  }else if(req.url === (""||"/")){
    res.writeHead(200,{"Content-Type":"text/html"})
    res.end("<h1>Hello World</h1>")
  }else{
    res.writeHead(404,{"Content-Type":"text/html"})
    res.end("<h1>ERROR 404</h1><br><p>Esto no anda ;=)</p>" )
  }

}).listen(3000, '127.0.0.1')
