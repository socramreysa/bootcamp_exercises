function torreDeHanoi(val){

  var t1 = [],
    t2 = [],
    t3 = [];

  for(var i=val; i>0; i--){
    t1.push(i);
  }

  print();

  hanoi(val, t1, t3, t2);

  print();

  function hanoi(alt, inicial, final, aux) {

    if (alt === 1) {
      final.push(inicial.pop())
      print()
      return
    }

    hanoi(alt-1, inicial, aux, final)

    final.push(inicial.pop())
    print()
    hanoi(alt-1, aux, final, inicial )
  }

  function print(){
    console.log('TORRES\n')
    console.log('--------------');
    console.log('t1:',t1);
    console.log('--------------');
    console.log('t2:',t2);
    console.log('--------------');
    console.log('t3:',t3);
    console.log('--------------\n');
  }
}