//El metodo includes determina si un array incluye un determinado elemento, devuelve true o false segun corresponda

const numbers = [9, 33, 40, 42, , 50, 83];

const evalNumbers = numbers.includes(40);
console.log(evalNumbers); //El resultado en consola es true

const evalNumbers2 = numbers.includes(81);
console.log(evalNumbers2); //El resultado en consola es false

//El metodo indexOf retorna el primer indice en el que se puede encontrar un elemento dado en el array, ó retorna -1 si el elemento no esta presente

const fruits = ["apple", "cherry", "mango"];

const evalIndex = fruits.indexOf("mango");
console.log(evalIndex); //El resulrado en consola es 2

const evalIndex2 = fruits.indexOf("avocado");
console.log(evalIndex2); //El resultado en consola es -1, por que no se encuentra en el array

//El metodo lastIndexOf retorna el ultimo indice en caso de encontrar un elemento dado en el arreglo
//En caso de que no se encuentre el elemento dado en el arreglo retorna un -1

const moreNumbers = [2, 4, 6, 8, 10, 8, 9, 13, 44];

const evalLastIndex = moreNumbers.lastIndexOf(8);
console.log("La evaluacion de lastIndexOf es: ", evalLastIndex); //El resultado en consola es 5

const evalLastIndex2 = moreNumbers.lastIndexOf(93);
console.log(evalLastIndex2); //El resultado en consola es -1, ya que 93 no forma parte del arreglo moreNUmbers
