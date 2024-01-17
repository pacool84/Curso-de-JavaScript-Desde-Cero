//Tipo de dato complejo - Paso por referencia
//Ejemplo utilizando un objeto

let frutas = {
  naranja: "🍊",
};

let vegetales = frutas;

vegetales.naranja = "🥦";
console.log(frutas); //El resultado sería 🥦
//El concepto es el mismo de la clase pasada, la variable frutas y vegetales apuntan a la misma direccion de memoria
//Al modificar la variable vegetales estamos de igual manera modificando la variable frutas

//Ejercicio 2

let ropa = {
  blusa: "👚",
};

ropa.pantalon = "👖"; //Aqui estamos modificando la variable ropa, agregando un nuevo objeto

console.log(ropa); //El resultado sería  blusa: '👚', pantalon: '👖' } sin embargo el concepto importante es que se agrega una nueva dirección de memoria
//Otro punto importante a considerar es que ahora ya no podemos acceder por medio de nuestro codigo a la primer direccion de memoria creada al principio en done solo existía 👚, Pero sigue existiendo
//Considerar el concepto de GARBAGE COLLECTOR, despues de ejecutar este proceso ahora la primer direccion de memoria DEJA DE EXISTIR
