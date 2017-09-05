var fs = require("fs")
var http = require("http")
var arr = fs.readdirSync("./")

var string = "<ul>"
for (var i = 0; i < arr.length; i++) {
  string += "<li><a href='./" + arr[i] + "'>" + arr[i] + "</a></li>"
}
string += "</ul>"

http.createServer(function(req, res) {
  index = arr.indexOf(req.url.replace("/", ""));
  if (req.url == "/") {
    var html = fs.readFileSync(__dirname + '/index.html', 'utf8')
    res.writeHead(200, {
      "Content-Type": "text/html"
    })
    html = html.replace('{*lista*}', string)
    res.end(html);
  } else if (index != -1) {
        var content = fs.readFileSync(__dirname + "/" + arr[index]);
        var template = fs.readFileSync(__dirname + "/template.html", "utf8");

              if (req.url.split(".").indexOf("jpg" !== -1)) {
                  res.writeHead(200, {"Content-Type": "text/html"})
                  template = template.replace("{*imagen*}", content);
                  res.end(template)
              } else {
                  res.writeHead(200, {"Content-Type": "text/html"})
                  template = template.replace("{*contenido*}", content);
                  res.end(template)
              }
  }
}).listen(3000, '127.0.0.1')
