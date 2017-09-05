var fs = require("fs")

var saludo = fs.readFileSync(__dirname+"/greet.txt","utf8")
var otroSaludo = fs.readFileSync(__dirname+"/greet.txt")

console.log(saludo)
console.log(otroSaludo)
