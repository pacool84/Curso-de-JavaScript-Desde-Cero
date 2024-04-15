/* 
La estructura de una funcion constructora de objetos es 

function Persona(nombre, apellido, edad){
  codigo....
}
*/

function Persona(name, lastName, age) {
  this.nombre = name;
  this.apellido = lastName;
  this.edad = age;
}

const persona1 = new Persona("Sebastian", "Lopez", 8); //Esta es la instancia
const persona2 = new Persona("Brenda", "Rosales", 33); //Esta es otra instancia

console.log(persona1);
console.log(persona2);

//Agregando una propiedad a la instancia
persona1.nacionalidad = "Mexicano";

console.log(persona1);

//Otra forma de agregar propiedad a la funcion constructora ===> FORMA COOL / PRO

Persona.prototype.agregarPropiedad = function () {
  console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
};

persona1.agregarPropiedad();
persona2.agregarPropiedad();
