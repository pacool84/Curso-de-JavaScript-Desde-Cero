//En un array podemos guardar varios valores,
//Existen dos formas de crear arreglos
//1. new Array() --- Array()

const fruits = Array("apple", "banana", "orange");
console.log(fruits);

//Con esta forma no podemos trabajar con un arreglo de un solo numero, SI funciona con varios numeros
const justOneNumber = Array(12);
console.log(justOneNumber); // Resultado en consola [ <12 empty items> ]

//2. Array literal syntax

const oneNumber = [13]; //Aqui si podemos tener arreglos con un solo numero
console.log(oneNumber);

const emptyArray = [];
console.log(emptyArray); //Resultado en consolab []

const sports = ["soccer", "tennis", "rugby"];
console.log(sports);

//Se pueden crear arreglos MIXTOS

const recipeIngredients = [
  "Harina",
  true,
  2,
  { ingredient: "milk", quantity: 13 },
];
console.log(recipeIngredients);

//Formas de acceder a los arreglos por su indice

const languages = ["Español", "English", "French"];
console.log(languages[0]);
console.log(languages[1]);
console.log(languages[2]);

//Accediendo a la ultima posicion

const lastArrayPosition = languages.length;
console.log(lastArrayPosition);
