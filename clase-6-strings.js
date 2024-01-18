//Creacion de Strings
const primeraOpcion = "Comillas Simples";
const segundaOpcion = "Comillas Dobles";
const terceraOpcion = `Template Literals`;

// 1 Concatenación: Opcion +

const direccion = "Calle falsa 123";
const ciudad = "Sprinfield";

const direccionCompleta = "Mi direcion completa es: " + direccion + ciudad; //Aqui se tiene un detalle en donde no toma espacios entre las concatenaciones
console.log(direccionCompleta);

const direccionCompletaConEspacio =
  "Mi direccion completa es: " + direccion + " " + ciudad;
console.log(direccionCompletaConEspacio);

// 2. Concatenación: Template Literals

const nombre = "Paco";
const pais = "🇲🇽";

const presentacion = `Hola, soy ${nombre} y soy de ${pais}`;
console.log(presentacion);

// 3. Concatenación: Join()

const primeraParte = "Me encanta";
const segundaParte = "La comida";
const terceraParte = "Japonesa";

const pensamiento = [primeraParte, segundaParte, terceraParte];
console.log(pensamiento.join(" ")); //Se debe de entender como "vamos a juntarlos" y agregamos un espacio " "

//4. Concatenación: concat()

const hobbie1 = "Programar";
const hobbie2 = "Estudiar";
const hobbie3 = "Ver Animes";

const hobbies = "Mis hobbies son: ".concat(
  hobbie1,
  ", ",
  hobbie2,
  ", ",
  hobbie3,
  "."
);
console.log(hobbies);

//Caracteres de Escape

//const whatDoIdo = 'I'm a software Engineer' --> Esto marcaria un error por que la comilla simple se utiliza como apostrofe pero es reconocida como una opcion para escribir strings

//1. Escape Alternativo

const escapeAlternativo = "I'm a Software Engineer"; // --> Cambiamos las comillas simples por las comillas dobles y asi podemos utilizar como texto una sola comilla simple

//2. Barra Invertida

// const barraInvertida = 'I\'m Software Enginner'; --> El ejemplo se debe de realizar con comillas simples

//3. Template Literals

const escapeComillaInvertida = `I'm a Software Enginner`;

//Escritura de Strings Largos
/* 
Las rosas son rojas,
Las violetas son azules,
Caracter Inesperado,
En la línea 86
*/

const poema =
  "Las rosas son rojas, \n" +
  "Las violetas son azules,\n" +
  "Caracter Inesperado, \n" +
  "En la línea 86";

console.log(poema);

//Otra forma de hacer el ejemplo anterior

const poema2 =
  "Las rosas son rojas,\n\
Las violetas son azules,\n\
Caracter inesperado,\n\
En la lÃ­nea 86.";

console.log(poema2);

//Una forma mas de hacer el ejemplo anterior

const poema3 = `Las rosas son rojas,
Las violeta son azules,
Caracter Inesperado,
En la línea 86.`;

console.log(poema3);

//Tip importante, cuando se utilizan comillas simples, dobles o template literals y estamos posicionados en el codigo se les conoce como STRING LITERALS
//Pero cuando ya vemos un resultado en pantalla o consola de esos strings se les conoce como STRING VALUES
