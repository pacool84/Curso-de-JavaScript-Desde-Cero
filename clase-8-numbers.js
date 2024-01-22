//1. Tipo de numeros enteros y decimal
const entero = 13;
const decimal = 3.1416;

console.log(typeof entero, typeof decimal); //El resultado en consola es number para ambos, no importa que sean enteros o decimal los identificaremos de igual manera

//2. Notacion Cientifica
const cientifico = 5e3;
console.log(cientifico, typeof cientifico); //De igual manera se identificara como number

//3. Infinitos y Nan(not a number)
const infinito = Infinity;
const noEsUnNumero = NaN;

console.log(typeof infinito, typeof noEsUnNumero); //De igual manera se identificara como number

//Operaciones Aritmeticas
//1. Suma, Resta, Multiplicacion, Division

const suma = 8 + 39;
const resta = 39 - 8;
const multiplicacion = 4 * 3;
const division = 16 / 4;

//2. Modulo Y Exponenciacion o Potencia

const modulo = 15 % 8;
console.log(modulo);

const exponenciacion = 2 ** 3;
console.log(exponenciacion);

//Particularidades o Excepciones en Javascript
const resultado = 0.1 + 0.2;
console.log(resultado); // El resultado en consola es 0.3000000000004
console.log(resultado.toFixed(1)); //El parametro que recive la funcion toFixed es cuantos valores queremos considerar despues del 0

console.log(resultado === 0.3); //El resultado es false

//Operaciones Avanzadas

const raizCuadrada = Math.sqrt(16);
console.log(raizCuadrada);

const valorAbsoluto = Math.abs(-39);
console.log(valorAbsoluto);

const numeroAleatorio = Math.random();
console.log(numeroAleatorio);
