class Gladiador {
  constructor(nombre,arma){
    if(arma === "Tridente" || arma === "Garrote" || arma ==="Lanza"){
      this.arma = arma
    }else{
      function(){
        if (!Gladiador.arma){
          alert("elije un arma de las disponibles")
        }
      }()
    }
  this.nombre = nombre
  }
}

function(){
  if (!Gladiador.arma){
    alert("elije un arma de las disponibles")
  }
}()

var max = new Gladiador("Maximus", "Tridente");
console.log(max.nombre)
console.log(max.arma)

/////////////////SOLUCION!!!!!!!
class Arena {
  constructor (name){
    this.nombre = name.charAt(0).toUpperCase()+name.slice(1)
    this.gladiadores=[]
  }
  agregarGladiador(gladiador) {
    if (this.gladiadores.length<2){
    this.gladiadores.push(gladiador)
    }
    if (this.gladiadores.length=2){
      pelear()
    }
  }
  // pelear () {
  //   if (gladiador[0].arma===gladiador[1].arma) {
  //     alert('Gladiadores eliminados')
  //   }
  // }
}
class Gladiador extends Arena {
  constructor(nombre,arma){
    super ('Arena')
    if(arma === "Tridente" || arma === "Garrote" || arma ==="Lanza"){
      this.nombre=nombre,
      this.arma = arma
    } else {
      alert("Arma no disponible")
    }
  }
}
var max = new Gladiador("Maximus", "Tridente");
var titus = new Gladiador("Titus", "Lanza");
var andronicus = new Gladiador("Andronicus", "Lanza");
console.log(max.nombre)
console.log(max.arma)
var coliseo = new Arena("coliseo");
console.log(coliseo.nombre)
coliseo.agregarGladiador(max);
console.log(coliseo.gladiadores)
coliseo.agregarGladiador(titus);
coliseo.agregarGladiador(andronicus);
console.log(coliseo.gladiadores.length);
