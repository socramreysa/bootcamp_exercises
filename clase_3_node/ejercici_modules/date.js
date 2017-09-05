var formula = {
  fechas: {
    navidad: "12-25",
    carnaval: "02-15",
    cumpleVolpa: "01-03"
  },
  diasPara: function(fecha) {
    var d = new Date()
    var esteAno = this.fechas[fecha]
    esteAno += "-2017"
    var r = Math.ceil((new Date(esteAno) - new Date()) / (1000 * 60 * 60 * 24))
    if (r < 0) {
      var nextAno = this.fechas[fecha]
      nextAno += "-" + (d.getFullYear() +1)
      r = Math.ceil((new Date(nextAno) - new Date()) / (1000 * 60 * 60 * 24))
      return r
    }else{
      return r
    }
  }
}
module.exports = formula
