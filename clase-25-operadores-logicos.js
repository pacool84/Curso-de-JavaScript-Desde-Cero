//Operadores Logicos
// AND && TODAS se deben de cumplir para que de un True
// OR || Alguna  se deben de cumplir para que sea True
// NOT !

const a = 10;
const b = 20;
const c = "10";

const operadorAnd = a != b && a !== c;
console.log(operadorAnd); //Resultado en Consola "false"

const operadorOr = a != b || a === c;
console.log(operadorOr); //Resultado en Consola "true"

const operadorNot = !(a === c);
console.log(operadorNot); //Resultado en Consola "true"  ==> Esto es por que el resultado de a===c es false pero al aplicar el operador NOT este niega o "invierte" el resultado
