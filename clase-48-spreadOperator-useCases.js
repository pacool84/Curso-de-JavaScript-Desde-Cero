//Casos de Uso

// 1. Copiado de arreglos

const originalArray = [1, 2, 3, 4, 5];
const copyArray = [...originalArray];

console.log(originalArray);
console.log(copyArray);

// 2. Combinar arreglos

const numbers = [1, 2, 3];
const moreNumbers = [4, 5, 6];

const combineArrays = [...numbers, ...moreNumbers];
console.log(combineArrays);

// 3. Crear arreglos con elementos adicionales

const colors = ["red", "green", "blue"];

const createAnotherArray = [...colors, "yellow", "purple"];

console.log(createAnotherArray);

// 4. Pasar parametros a una funcion

function sum(a, b, c) {
  return a + b + c;
}

const result = sum(...numbers);
console.log(result);
