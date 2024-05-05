// JavaScript: Tipos de Datos Primitivos y Complejos

// En JavaScript, existen 10 tipos de datos:
// Primitivos: String, Number, Boolean, null, undefined, Symbol, BigInt
// Complejos: Object, Array, Function

// Primitivos: Son inmutables y se pasan por valor
// Complejos: Son mutables y se pasan por referencia
// Inmutables: Los valores originales no pueden cambiar
// Mutables: Los valores originales pueden cambiar

// Ejemplo de tipo de dato primitivo - Inmutable
const numero = 23; // Usamos const porque el valor no cambiará
let tiempo = numero + 10; // La variable es reasignada, pero el valor original no cambia
console.log("Numero: ", numero);
console.log("Tiempo: ", tiempo);

let esVerdadero = false;
esVerdadero = true; // JavaScript asigna un nuevo valor, pero el valor original no cambia
console.log("esVerdadero: ", esVerdadero);

// Ejemplo de tipo de dato complejo - Mutable
let usuario = { nombre: "Sebas", edad: 8 }; // Usamos let porque el objeto puede cambiar
usuario.edad = 10; // Aquí el valor original muta, se sobrescribe y cambia el dato original
console.log("usuario: ", usuario);

let frutas = ["🍎", "🍐"];
frutas[0] = "🍌"; // Los arrays son mutables, podemos cambiar elementos individuales
console.log("frutas: ", frutas);

function cambiarNombre(objeto) {
  objeto.nombre = "Chevy";
}

let persona = { nombre: "Paco" };
cambiarNombre(persona); // Aquí estamos pasando el objeto por referencia, por lo que la función puede mutar el objeto
console.log("persona: ", persona);  
