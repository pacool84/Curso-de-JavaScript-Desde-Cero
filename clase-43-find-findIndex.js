//El metodo "find" devuelve el valor del primer elemento del array que cumple con la condicion proporcionada
//Este metodo no modifica el arreglo original

const numbers = [2, 4, 6, 8, 10, 3, 5, 7, 9, 12, 13, 14];

const firstNumberGreaterThanTen = numbers.find((number) => number > 10);

console.log(numbers);
console.log(
  "El primer número encontrado mayor a diez es: ",
  firstNumberGreaterThanTen
);

//El metodo "findIndex" devuelve el indice del primer elemento de un array que cumple con la condicion porcionada
//Si no encuentra algun elemento que cumpla con la condicion proporcionada retornara un -1

const randomNumbers = [5, 10, 14, 19, 20, 25, 30, 80];
const indexNumber = randomNumbers.findIndex((number) => number > 20);

console.log(randomNumbers);
console.log("El indice encontrado es el: ", indexNumber);
