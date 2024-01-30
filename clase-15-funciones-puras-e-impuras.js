//Funciones Puras
//Tienen como caracteristica
//Dada una misma entrada siempre obtendremos la misma salida
//No producen efectos secundarios, side effects

//Side Effects ocacionan lo sig... todo lo siguiente hacen que nuestra funcion pura se convierta en impura
//1. Modificar variables globales
//2. Modificar parametros de una funcion
//3. Solicitudes HTTP, o llamados a API´s
//4. Imprimir mensajes en pantalla o consola
//5. Manipulacion del DOM
//6. Acceder a la Hora, Dia etc

function sum(a, b) {
  //Esto es una funcion pura, recibe siempre los mismos parametros y tiene la misma salida
  return a + b;
}

//Ahora...

function sum2(a, b) {
  console.log("Valor de b: ", b); //El console.log() vuelve a esta funcion IMPURA
  return a + b;
}

//Otro ejemplo muy comun es ...

let total = 0;

function editGlobalVariable(a) {
  total += a; //Aqui volvemos impura la funcion ya que estamos modificando una variable global
  return total;
}

editGlobalVariable(10);
console.log("Nvo valor de total: ", total);

//Ejemplo de funcion pura

function square(x) {
  return x * x; //El parametro NO se modifica, siempre es la misma entrada con la misma salida
}

function addTen(y) {
  return y + 10; //De igual manera es Pura por que no se modifica el parametro de la funcion
}

//Ejemplo interesante

const number = 5;

const finalResult = addTen(square(number)); //Sigue siendo una funcion PURA

console.log(finalResult);
