//Este metodo une dos o mas arrays
//Este metodo NO modifica el arreglo original

const fruits = ["🍏", "🍐", "🍋"];
const moreFruits = ["🍎", "🍉", "🍊"];

const fruitsComplete = fruits.concat(moreFruits);

console.log(fruitsComplete);

//Otra forma de utilizar el metodo concat
//Los ... son como si estuvieramos abriendo o expandiendo el arreglo

const secondExample = [].concat(fruits, moreFruits);
console.log(secondExample);

//SPREAD OPERATOR

function combineArrays(firstArray, secondArray) {
  return [...firstArray, ...secondArray];
}

const spreadOperator = combineArrays(fruits, moreFruits);

console.log("Es el resultado de spreadOperator: ", spreadOperator);

//Combinando arreglos con numeros y con strings usando SPREAD OPERATOR

const numbers = [8, 33, 40];
const string = "Sebas";

const arregloCombinado = combineArrays(numbers, string);
console.log(
  "Este es el resultado de combinar arreglos con numeros y strings: ",
  arregloCombinado
); //El resultado en consola muestra una separacion por cada una de las letras que componen la variable string

//El metodo join concatena todos los elementos de una array en una cadena de texto, separados por un delimitador especifico

const letters = ["H", "o", "l", "a", ",", "M", "u", "n", "d", "o"];

const joinString = letters.join("");
console.log(joinString);

//Utilizando un delimitador -

const jointStringDelimit = letters.join(" - ");
console.log(jointStringDelimit);
