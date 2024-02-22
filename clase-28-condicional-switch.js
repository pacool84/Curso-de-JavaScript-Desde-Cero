/* La estructura de un condicional swits es la siguiente:

switch (expresion a evaluar) {
  case value1:
    Ejecutamos el codigo con base al valor del caso 1
    break; ==> Detiene la evaluacion del siguiente caso 

  case valu2:
    Ejecutamos el codigo con base al valor del caso 2
    break;

  default: ==> Ninguno de los valores evaluados en los casos previos es true
    break;
} */

let expresion = "Uvas";
// Aqui el switch hace un operador de comparacion estricto === en donde evalua el valor y el tipo de valor
switch (expresion) {
  case "Naranjas":
    console.log(`Las naranjas cuestan $20.00 el Kg`);
    break;

  case "Manzanas":
    console.log(`Las Manzanas cuestan $43.00 el Kg`);
    break;

  case "Platanos":
    console.log(`Los Platamos cuestan $30.00 el Kg`);
    break;

  case "Mangos": //==> Evaluacion de un caso doble
  case "Papayas":
    console.log(`Los mangos y las papayas cuestan $25.00 el KG`);
    break;

  default:
    console.log(`Lo siento NO contamos con ${expresion}`);
    break;
}

console.log("Hay algo mas en lo que te pueda ayudar?");
