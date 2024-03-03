//En un do while el codigo siempre se va a ejecutar primero antes de validar la condicion
//En un while la condición siempre se validara primera antes de ejecutar el codigo
//La diferencia entre while y do while es que el codigo a ejecutar se escribe primero
//LA estructura de un do while es la siguiente

/* 
do {
  Codigo a Ejecutar
} while (condicion)
*/

let contador = 0;

do {
  console.log(contador);
  contador++;
} while (contador <= 10);
