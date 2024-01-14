// Existen Datos Primitivos y Complejos
//En javascript existen 10 tipos de Datos

//Primitivos
/* 
String
Number
Boolean
null
undefined
symbol
bignit .- Alojar numeros MUY grandes
*/

//Complejos
/* 
object 
array
function
*/

//Primitivos .- Son inmutables y Se pasan por valor

//Complejos .- Son mutables y Se pasan por referencia

//Inmutables .- Los valores y datos originales NO pueden cambiar

//Mutables .- Los valores y datos originales SI pueden cambiar

//Ejemplo de tipo de dato primitivo - Inmutable

let numero = 23;
tiempo = numero + 10;
console.log("Numero: ", numero);
console.log("Tiempo: ", tiempo);

let esVerdadero = false;
esVerdadero = true;
console.log("esVerdadero: ", esVerdadero); // javascript asigna un nuevo valor PERO el valor original no se cambia

//Ejemplo de tipo de dato complejo - Mutable

let usuario = { nombre: "Sebas", edad: 8 };
usuario.edad = 10; //Aqui si el valor original MUTA, se sobrescribe y cambia el valor o dato original
console.log("usuario: ", usuario);

let frutas = ["🍎", "🍐"];
frutas[0] = "🍌";
console.log("frutas: ", frutas);

function cambiarNombre(objeto) {
  objeto.nombre = "Chevy";
}

let persona = { nombre: "Paco" };
cambiarNombre(persona);
console.log("persona: ", persona);
