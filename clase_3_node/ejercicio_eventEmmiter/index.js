var eventEmitter = {
  eventos: {

  },
  on: function(evento, callback) {
    if (!this.eventos[evento]) {
      this.eventos[evento] = [callback]
    } else {
      this.eventos[evento].push(callback)
    }
  },
  emit: function(evento) {

    for (var i = 0; i < this.eventos[evento].length; i++) {
      console.log(this.eventos[evento][i]())
    }
  }
}

module.exports = eventEmitter
