let mensaje;

const edad = 39;

/* if (edad >= 18) {
  mensaje = "Es mayor de Edad, puede pasar";
} else {
  mensaje = "No es mayor de Edad, no puede pasar ";
}

console.log(mensaje); */

//Mismo escenario pero ahora con el condicional ternario
//Estructura de un condicional ternario ==> condicion ? true : false

edad >= 18
  ? (mensaje = "Es mayor de Edad, puede pasar")
  : (mensaje = "No es mayor de Edad, no puede pasar ");

console.log(mensaje);
