/* 
Los objetos son una estructura de datos 
Ayudan a guardar informacion con cierta estructura
KEY / VALUE 
Que la interpretacion es Propiedad y Valor

Los objetos tambien pueden albergar METODOS
Los metodos son FUNCIONES que estan dentro de los metodos
*/

//Ejercicio .- Genera un carro mediante un objeto en javascript

const carro = {
  marca: "Renault",
  modelo: 2023,
  color: "Rojo",
  kilometraje: 30000,
  venta() {
    console.log("El modelo de este auto es:", carro.modelo);
  },
};
