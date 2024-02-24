//For of lo utilizaremos en objetos iterables como arrays o strings y solo funciona con este tipo de objetos
//Su estructura es la siguiente:
/* 
for(variable of objeto) {
  codigo a ejecutar
}
*/

let canasta = ["manzana", "pera", "naranja", "uva"];

for (fruta of canasta) {
  console.log(fruta);
}
//El codigo anterior se debe de entender como "Por cada fruta de la canasta imprime que fruta es"
