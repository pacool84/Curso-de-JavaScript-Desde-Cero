//Existen Lenguajes de Programacion de tipo Compilados e Interpretados
//Ejemplos de Lenguajes Compilados, El código es traducido ANTES de ejecutar el programa
//C, C++, Rust, Go, Swift

//Ejemplos de Lenguajes Interpretados, Se van traduciendo MIIENTRAS se va ejecutando el codigo
//JavaScript, Python, Ruby, PHP

//En Lenguajes Compilados existe el Chequeo estatico de tipos

//En Lenguajes Interpretados existe el Chequeo dinámico de tipos, no se dan cuenta del tipo de datos que se estan manejando hasta que se ejecuta el codigo

//Javascript hace conversion de tipos a su conveniencia / interpretacion propia

const numero = 2;
const boolean = true;
console.log(numero + boolean); // El resultado es 3

//Existen dos tipos de conversión, Implicita y Explicita

//Implicita es la que ejecuta el propio Javascript
const number = 2;
const iftrue = true;
console.log(number + iftrue);

//Explicita es la que ejecutamos como desarrolladores
String();
Number();
Boolean();

//EXPLICIT Type Casting (conversion explicita)

const string = "39";
const integer = parseInt(string);
console.log("integer: ", integer, typeof integer);

const stringDecimal = "3.14";
const float = parseFloat(stringDecimal);
console.log("float: ", float, typeof float);

const binary = "011010";
const decimal = parseInt(binary, 2); //El segundo parametro que pasamos en el metodo "parseInt" es la base a la que necesitamos tranformar
console.log("decimal: ", decimal, typeof decimal);

//IMPLICIT Type Casting (conversion implicita)

const sum = "5" + 3;
console.log("sum: ", sum); //El resultado es 53, lo que realiza en este caso javascript es una conversion del 3 a un dato de tipo STRING y por ende lo concatena

const sumWithBoolean = "5" + true;
console.log("sumWithBoolean: ", sumWithBoolean); //El resultado es 5true, de igual manera javascript hace una conversion de true a un dato de tipo STRING

const sumWithNumber = 3 + true;
console.log("sumWithNumber: ", sumWithNumber); //El resultado es 4, javascript ahora convierte true en numero, con un valor de 1 y realiza un operacion de suma

//Truco para identificar la conversion implicita

const stringValue = "10";
const numberValue = 10;
const booleanValue = true;

console.log(stringValue + stringValue);
console.log(stringValue + numberValue);
console.log(stringValue + booleanValue);

console.log(numberValue + stringValue);
console.log(numberValue + numberValue);
console.log(numberValue + booleanValue);

console.log(booleanValue + stringValue);
console.log(booleanValue + numberValue);
console.log(booleanValue + booleanValue);

//El truco es,

//SI HAY UN STRING -- CONCATENA
//SI NO HAY UN STRING -- SUMA
