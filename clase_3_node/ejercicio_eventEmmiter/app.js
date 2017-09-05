var evento = require("./index.js")

evento.on("click", function(){return 1})
evento.emit("click")

evento.on("enter", function(){return 2})
evento.emit("enter")

evento.on("scroll", function(){return 3})
evento.emit("scroll")

evento.on("click", function(){return 4})
evento.emit("click")
evento.on("click", function(){return 5})
evento.emit("click")
evento.on("click", function(){return 6})
evento.emit("click")

console.log(evento.eventos)
