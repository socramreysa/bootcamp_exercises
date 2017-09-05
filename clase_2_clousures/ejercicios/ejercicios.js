

var nodes = document.getElementsByTagName('button');
for (var i = 0; i < nodes.length; i++) {
   nodes[i].addEventListener('click', function(j) {
     return function(){console.log('You clicked element #' + j)}
   }(i))
}
//////
var fullname = 'Juan Perez';
var that
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
		that = this
         return this.fullname;
      }
   }
};


var test = obj.prop.getFullname;

console.log(test.apply(obj.prop));

//////////

var repeatify = function (cant_rep){
var word = ""
if(!cant_rep){
return ""
}else{
for(i=0; i < cant_rep; i++){
word+=this
}
return word
}}

String.prototype.repeatify = repeatify

///////

class Shape{
	constructor (type){
		this.type = type
    }
  getType(){
    return this.type
	}
}
class Triangle extends Shape{
  constructor(a,b,c){
	super("triangle")
    this.a = a,
    this.b = b,
    this.c = c
  }
getPerimeter(){
  return this.a + this.b + this.c
}
getArea(){
  var s = (this.a + this.b + this.c)/2
  return Math.sqrt(s*(s-this.a)*(s-this.b)*(s-this.c))
}
}

class Circle extends Shape{
  constructor(r){
	super("circle")
    this.r = r
  }
getPerimeter(){
  return 2 * Math.PI * this.r
}
getArea(){
  return Math.pow(this.h,2)
}
}

class Square extends Shape{
  constructor(h){
	super("Square")
    this.h = h
  }
getArea(){
  return Math.pow(this.h,2)
}
}
