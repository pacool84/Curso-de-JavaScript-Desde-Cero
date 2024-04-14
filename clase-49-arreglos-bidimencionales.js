let array1D = [1, 2, 3]; //Unidimensional, 1 fila con 3 columnas

let array2D = [
  //Bidimensional 3 filas con 3 columnas
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

//Para cambiar un valor de un arreglo Bidimensional, Decir que fila y que columna necesitamos el nuevo valor
//Vamos a cambiar el numero 6 por el 10, por lo que la fila es 1 y la columna es 2
//Tener en consideracion que la cuenta inicia desde el CERO 0

array2D[1][2] = 10;
console.log(array2D);

//Para poder saber el dato deseado de un array bidimensional lo hacemos de la siguiente manera

let value = array2D[1][2];
console.log(value); //El valor en consola es 10

//Operaciones comunes en arreglos bidimencionales

//Recorrer cada uno de los valores de un arreglo bidimensional
//En este ciclo for las filas son representadas por "i" y las columnas por "j"
for (let i = 0; i < array2D.length; i++) {
  for (let j = 0; j < array2D.length; j++) {
    console.log(array2D[i][j]);
  }
}

//Buscar elementos especificos

function findElement(array2D, element) {
  for (let i = 0; i < array2D.length; i++) {
    for (let j = 0; j < array2D[i].length; j++) {
      if (array2D[i][j] === element) {
        return true;
      }
    }
  }
  return false;
}

console.log(findElement(array2D, 5)); //El resultado en consola es "true" debido a que 5 si forma parte del del arreglo bidimensional

//Duplicar valores de un arreglo bidimensional

function duplicateValues(array2D) {
  let arrayDuplicated = [];

  for (let index = 0; index < array2D.length; index++) {
    arrayDuplicated[index] = [...array2D[index]];
  }
  return arrayDuplicated;
}

console.log(duplicateValues(array2D)); //El resultado en consola es [ [ 1, 2, 3 ], [ 4, 5, 10 ], [ 7, 8, 9 ] ]
