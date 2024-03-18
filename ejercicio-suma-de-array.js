/* Crea un programa que tome los numeros de un array como entradas y calcule la suma de todos los elementos en ese array */

const numbers = [2, 4, 6, 8, 10];

let sum = 0;

const arraySum = numbers.forEach((numero) => {
  sum = sum + numero;
});

console.log("La suma de los numeros es: ", sum);
