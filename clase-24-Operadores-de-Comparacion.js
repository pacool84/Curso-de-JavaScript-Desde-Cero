//Operadores de Comparacion

//Operadores de Igualdad == sirve para comparar dos valores y === nos ayuda a comparar dos valores y compara a nivel tipo de valor

//Operador Diferente De != nos ayuda a comparar dos valores si son diferentes

//Operador Diferente de !== nos ayuda a comparar dos valores si son diferentes hasta el nivel de tipo de dato

//Operador Mayor Que y Menor Que > <

//Operador Mayor o Igual y Menor o Igual >= <=

const a = 10;
const b = 20;
const c = "10";

const operadorIgualdad = a == b;
console.log(operadorIgualdad); //Resultado en Consola "false"

const operadorIgualdadTipoValor = a === c;
console.log(operadorIgualdadTipoValor); //Resultado en Consola "false"

const operadorDiferenteDe = a != c;
console.log(operadorDiferenteDe); //Resultado en Consola "false"

const operadorDiferenteDeTipoDeValor = a !== c;
console.log(operadorDiferenteDeTipoDeValor); //Resultado en Consola "true"

const operadorMayorQue = a > b;
console.log(operadorMayorQue); //Resultado en Consola "false"

const operadorMenorQue = b < a;
console.log(operadorMenorQue); //Resultado en Consola "false"

const operadorMenorIgual = a <= b;
console.log(operadorMenorIgual); //Resultado en Consola "true"

const operadorMayorIgual = a >= b;
console.log(operadorMayorIgual); //Resultado en Consola "false"

const operadorMayorConString = a > c;
console.log(operadorMayorConString); //Resultado en Consola "false"
