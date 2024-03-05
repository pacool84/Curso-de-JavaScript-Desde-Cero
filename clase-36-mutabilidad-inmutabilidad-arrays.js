// Mutabilidad de Arreglos

const frutas = ["manzana", "melon", "pera"];
frutas.push("sandia"); // Agrega al final de arreglo y hace que MUTE el arreglo
console.log(frutas);

//Inmutabilidad de Arreglos

const moreFruits = frutas.concat("uvas", "kiwi");
console.log(frutas);
console.log(moreFruits);

//Revisando si un array es un array

const esArreglo = Array.isArray(frutas);
console.log(esArreglo); //Resultado en consola es true

//Ejercicio Practico
//Suma todos los elementos de un array

const numbersArray = [10, 20, 30, 40, 50];
let sum = 0;

for (let i = 0; i < numbersArray.length; i++) {
  console.log("El valor de i es: ", i);
  sum += numbersArray[i];
  console.log("El valor de sum es: ", sum);
}

console.log("La suma de todos los valores es: ", sum);
