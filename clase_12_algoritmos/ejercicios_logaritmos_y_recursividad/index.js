const test = require('tape');


////////////////////////////////////// FACTORES

function factor(n, array, i){
  if(array === undefined) array = [];
  if(i === undefined) i = 2 ;
  if(n === 1) {
    return array;
  } else {
    if (n%i === 0) {
      array.push(i)
      n = (n/i)
    } else {
      i++
    }
    return factor(n, array, i);
  }
}

// test('Factores', (t) => {
//   t.deepEqual(factor(12), [2, 2, 3], 'Factores de 12');
//   t.deepEqual(factor(5), [5], 'Factores de 5');
//   t.deepEqual(factor(8), [2, 2, 2], 'Factores de 8');
//   t.deepEqual(factor(33), [3, 11], 'Factores de 33');
//   t.deepEqual(factor(65), [5, 13], 'Factores de 65');
//   t.deepEqual(factor(99), [3, 3, 11], 'Factores de 99');
//   t.deepEqual(factor(133), [7, 19], 'Factores de 133');
//   t.deepEqual(factor(7), [7], 'Factores de 7 - Primo');
//   t.deepEqual(factor(11), [11], 'Factores de 11 - Primo');
//   t.end();
// });

/////////////////////////////////////////////// bubbleSort

function bubbleSort (array){
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length-i; j++) {
      if(array[j] > array[j+1]){
        var temp = array[j];
          array[j] = array[j+1];
          array[j+1] = temp;
      }
    }
  }
  return array
}



// test('Bubble Sort - Menor a Mayor', (t) => {
//   t.equal(Array.isArray(bubbleSort([1])), true, 'Devuelve un arreglo');
//   t.deepEqual(bubbleSort([3, 2, 1]), [1, 2, 3], 'Devuelve el Arreglo ordenado');
//   t.deepEqual(bubbleSort([3, 6, 2, 6, 1, 21, 1]), [1, 1, 2, 3, 6, 6, 21], 'Test #3');
//   t.deepEqual(bubbleSort([2]), [2], 'Unico Elemento.');
//   t.deepEqual(bubbleSort([3, 3, 3, 3, 3, 3]), [3, 3, 3, 3, 3, 3], 'Todos elementos iguales');
//   t.deepEqual(bubbleSort(['toni', 'angel', 'guille', 'barbara', 'casio']), ['angel', 'barbara', 'casio', 'guille', 'toni'], 'Ordena Strings.');
//   t.deepEqual(bubbleSort([9, 1, 3, 5, 7]), [1, 3, 5, 7, 9], 'Random Numbers 1');
//   t.deepEqual(bubbleSort([64, 25, 12, 22, 11]), [11, 12, 22, 25, 64], 'Random Numbers 2');
//   const orederdArr = [3, 4, 5, 8, 10, 13, 14, 15, 19, 20, 22, 23, 26, 27, 28, 29, 32, 33,
//     34, 35, 37, 38, 41, 42, 44, 45, 46, 49, 50, 54, 55, 58, 60, 61, 64, 65, 68, 71, 73,
//     75, 78, 79, 80, 81, 85, 86, 88, 94, 95, 97, 98, 99, 100];
//   const randomArr = [32, 3, 19, 88, 61, 33, 81, 68, 38, 46, 75, 71, 23, 42, 94, 37, 49, 50,
//     29, 15, 22, 98, 54, 97, 58, 45, 85, 35, 10, 8, 64, 26, 60, 5, 34, 78, 79, 95, 20, 27, 73,
//     41, 44, 65, 80, 28, 4, 13, 55, 14, 99, 86, 100];
//   t.deepEqual(bubbleSort(randomArr), orederdArr, 'Random Numbers 5');
//   t.end();
// });

////////////////////////////////////////////// insertionSort


function insertionSort (array){
  for (var j = 1; j < array.length; j++) {
    for (var i = j; i > 0; i--) {
      while(array[i] < array[i-1] && i>0) {
            var temp = array[i];
            array[i] = array[i-1];
            array[i-1] = temp;
        }
      }
    }
  return array
}



//
// test('Insertion Sort - Menor a Mayor', (t) => {
//   t.equal(Array.isArray(insertionSort([1])), true, 'Devuelve un arreglo');
//   t.deepEqual(insertionSort([3, 2, 1]), [1, 2, 3], 'Devuelve el Arreglo ordenado');
//   t.deepEqual(insertionSort([3, 6, 2, 6, 1, 21, 1]), [1, 1, 2, 3, 6, 6, 21], 'Test #3');
//   t.deepEqual(insertionSort([2]), [2], 'Unico Elemento.');
//   t.deepEqual(insertionSort([3, 3, 3, 3, 3, 3]), [3, 3, 3, 3, 3, 3], 'Todos elementos iguales');
//   t.deepEqual(insertionSort(['toni', 'angel', 'guille', 'barbara', 'casio']), ['angel', 'barbara', 'casio', 'guille', 'toni'], 'Ordena Strings.');
//   t.deepEqual(insertionSort([9, 1, 3, 5, 7]), [1, 3, 5, 7, 9], 'Random Numbers 1');
//   t.deepEqual(insertionSort([64, 25, 12, 22, 11]), [11, 12, 22, 25, 64], 'Random Numbers 2');
//   const orederdArr = [3, 4, 5, 8, 10, 13, 14, 15, 19, 20, 22, 23, 26, 27, 28, 29, 32, 33,
//     34, 35, 37, 38, 41, 42, 44, 45, 46, 49, 50, 54, 55, 58, 60, 61, 64, 65, 68, 71, 73,
//     75, 78, 79, 80, 81, 85, 86, 88, 94, 95, 97, 98, 99, 100];
//   const randomArr = [32, 3, 19, 88, 61, 33, 81, 68, 38, 46, 75, 71, 23, 42, 94, 37, 49, 50,
//     29, 15, 22, 98, 54, 97, 58, 45, 85, 35, 10, 8, 64, 26, 60, 5, 34, 78, 79, 95, 20, 27, 73,
//     41, 44, 65, 80, 28, 4, 13, 55, 14, 99, 86, 100];
//   t.deepEqual(insertionSort(randomArr), orederdArr, 'Random Numbers 5');
//   t.end();
// });


/////////////////////////////////// selectionSort

function minimo(array){
  var minimo = array[0]
  for (var i in array) {
    if (array[i] < minimo) {
      minimo = array[i]
    }
  } return minimo
}

function selectionSort(array){
  var array1 = []
  var tamano = array.length
    while(array.length > 0) {
     var x = array.splice(array.indexOf(minimo(array)),1)
        array1.push(x[0])
    }
  array = array1;
  return array
}

// test('Selection Sort - Menor a Mayor', (t) => {
//   t.equal(Array.isArray(selectionSort([1])), true, 'Devuelve un arreglo');
//   t.deepEqual(selectionSort([3, 2, 1]), [1, 2, 3], 'Devuelve el Arreglo ordenado');
//   t.deepEqual(selectionSort([3, 6, 2, 6, 1, 21, 1]), [1, 1, 2, 3, 6, 6, 21], 'Test #3');
//   t.deepEqual(selectionSort([2]), [2], 'Unico Elemento.');
//   t.deepEqual(selectionSort([3, 3, 3, 3, 3, 3]), [3, 3, 3, 3, 3, 3], 'Todos elementos iguales');
//   t.deepEqual(selectionSort(['toni', 'angel', 'guille', 'barbara', 'casio']), ['angel', 'barbara', 'casio', 'guille', 'toni'], 'Ordena Strings.');
//   t.deepEqual(selectionSort([9, 1, 3, 5, 7]), [1, 3, 5, 7, 9], 'Random Numbers 1');
//   t.deepEqual(selectionSort([64, 25, 12, 22, 11]), [11, 12, 22, 25, 64], 'Random Numbers 2');
//   const orederdArr = [3, 4, 5, 8, 10, 13, 14, 15, 19, 20, 22, 23, 26, 27, 28, 29, 32, 33,
//     34, 35, 37, 38, 41, 42, 44, 45, 46, 49, 50, 54, 55, 58, 60, 61, 64, 65, 68, 71, 73,
//     75, 78, 79, 80, 81, 85, 86, 88, 94, 95, 97, 98, 99, 100];
//   const randomArr = [32, 3, 19, 88, 61, 33, 81, 68, 38, 46, 75, 71, 23, 42, 94, 37, 49, 50,
//     29, 15, 22, 98, 54, 97, 58, 45, 85, 35, 10, 8, 64, 26, 60, 5, 34, 78, 79, 95, 20, 27, 73,
//     41, 44, 65, 80, 28, 4, 13, 55, 14, 99, 86, 100];
//   t.deepEqual(selectionSort(randomArr), orederdArr, 'Random Numbers 5');
//   t.end();
// });


//////////////////////////////////////////// quickSort

// function quickSort(array){
//   if (true) {
//     caso base
//     }
//     var pivot = array[Math.floor(array[array.length/2])],
//     selectorR = array[array.lenght-1],
//     selectorL = array[0]
//   for (var i = 0; i < array.length; i++) {
//     while (selectorL >= pivot) {
//       selectorL = array[i]
//     }
//   }
//   for (var i = array.length-1; i = 0 ; i--) {
//     while (selectorR <= pivot) {
//       selectorR = array[i]
//     }
//   }
//   if (selectorL <= selectorR) {
//     var valorR = array[array.indexOf(selectorR)],
//       valorL = array[array.indexOf(selectorR)];
//     var temp = valorL
//       valorL = valorR
//       valorR = temp
//   }
// }
//

function quickSort(array){
  if (array.length <= 2) {
console.log("return array : ", array)
    return array
  }else{
    var pivot = array[Math.floor(array.length/2)],
      selectorR = array[array.length-1],
      selectorL = array[0]
console.log("pivot:", pivot)
    while (array.indexOf(selectorL) < array.indexOf(selectorR)) {
      while (selectorL < pivot) {
        var i = array.indexOf(selectorL)
        i++
        selectorL = array[i]
      }
      while (selectorR > pivot) {
        var j = array.indexOf(selectorR)
        j--
        selectorR = array[j]
      }
      if (selectorL > selectorR) {
 console.log("swap1:", array)
        var temp = array[array.indexOf(selectorR)]
          array[array.indexOf(selectorR)] = array[array.indexOf(selectorL)]
          array[array.indexOf(selectorL)] = temp
 console.log("swap2:",array)
    }
      arrayL = array.slice(0, array.indexOf(pivot))
      arrayR = array.slice(array.indexOf(pivot)+1, array.length)
console.log("L: ",arrayL);
console.log("R: ",arrayR)
      arrayR = quickSort(arrayR)
      arrayL = quickSort(arrayL)
      return arrayL.concat(pivot ,arrayR)
    }
  }
}

var array =  [1,6,3,2,5,8,4,7,9]
console.log("Resultado: ", quickSort(array))


// test('Quick Sort - Menor a Mayor', (t) => {
//   t.equal(Array.isArray(quickSort([1])), true, 'Devuelve un arreglo');
//   t.deepEqual(quickSort([3, 2, 1]), [1, 2, 3], 'Devuelve el Arreglo ordenado');
//   t.deepEqual(quickSort([3, 6, 2, 6, 1, 21, 1]), [1, 1, 2, 3, 6, 6, 21], 'Test #3');
//   t.deepEqual(quickSort([2]), [2], 'Unico Elemento.');
//   t.deepEqual(quickSort([3, 3, 3, 3, 3, 3]), [3, 3, 3, 3, 3, 3], 'Todos elementos iguales');
//   t.deepEqual(quickSort(['toni', 'angel', 'guille', 'barbara', 'casio']), ['angel', 'barbara', 'casio', 'guille', 'toni'], 'Ordena Strings.');
//   t.deepEqual(quickSort([9, 1, 3, 5, 7]), [1, 3, 5, 7, 9], 'Random Numbers 1');
//   t.deepEqual(quickSort([64, 25, 12, 22, 11]), [11, 12, 22, 25, 64], 'Random Numbers 2');
//   const orederdArr = [3, 4, 5, 8, 10, 13, 14, 15, 19, 20, 22, 23, 26, 27, 28, 29, 32, 33,
//     34, 35, 37, 38, 41, 42, 44, 45, 46, 49, 50, 54, 55, 58, 60, 61, 64, 65, 68, 71, 73,
//     75, 78, 79, 80, 81, 85, 86, 88, 94, 95, 97, 98, 99, 100];
//   const randomArr = [32, 3, 19, 88, 61, 33, 81, 68, 38, 46, 75, 71, 23, 42, 94, 37, 49, 50,
//     29, 15, 22, 98, 54, 97, 58, 45, 85, 35, 10, 8, 64, 26, 60, 5, 34, 78, 79, 95, 20, 27, 73,
//     41, 44, 65, 80, 28, 4, 13, 55, 14, 99, 86, 100];
//   t.deepEqual(quickSort(randomArr), orederdArr, 'Random Numbers 5');
//   t.end();
// });
