/* 
Las clases son MOLDES para crear nuevos objetos
Se utilizan de manera mandatoria las palabras reservadas "class" y "constructor"
*/

class Persona {
  constructor(name, age) {
    this.nombre = name;
    this.edad = age;
  }
  saludar() {
    this.edad >= 2
      ? console.log(
          `Hola mi nombre es ${this.nombre} y tengo ${this.edad} años de edad`
        )
      : console.log(
          `Hola mi nombre es ${this.nombre} y tengo ${this.edad} año de edad`
        );
  }
}
const persona1 = new Persona("Sebastian", 8); //Esta es la instancia

persona1.saludar();
