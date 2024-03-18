//El metodo "filter" crea un nuevo array con elementos que cumplen una condicion/criterio dado por una funcion
//Este metodo itera sobre cada elemento del arreglo
//Este metodo no modifica el arreglo original - INMUTABILIDAD

const numbers = [1, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter(
  (number) => number % 2 === 0 //Filtrando los numeros pares, si el modulo % es cero entonces es par
);

console.log(numbers);
console.log("Numeros pares: ", evenNumbers);

//El metodo "reduce" ejecuta una funcion reductora sobre cada elemento de un array, devolviendo como resultado un único valor
//El metodo "reduce" recibe dos parametros, un acumulador y un valor actual

const newNumbers = [2, 4, 6, 8, 10];

const arraySum = newNumbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0 // 0 Es el initial value
);

console.log(newNumbers);
console.log("La suma del arreglo es: ", arraySum);

//reduce tambien nos sirve para encontrar que tanto se repite una palabra en un array

const words = [
  "apple",
  "banana",
  "Hello",
  "bye",
  "natalia",
  "sebastian",
  "sebastiam",
  "sebastian",
];

const wordsFrecuency = words.reduce((accumulator, currentValue) => {
  if (accumulator[currentValue]) {
    accumulator[currentValue]++;
  } else {
    accumulator[currentValue] = 1;
  }
  return accumulator;
}, {});

console.log("La palabra se repite: ", wordsFrecuency);
