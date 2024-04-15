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
  serie: {
    motor: 89374,
    pintura: 982837482932840,
  },
  venta() {
    console.log("El modelo de este auto es:", carro.modelo);
  },
};

console.log(carro);

//Consumiendo info del objeto
console.log(carro.marca);

//Consumiendo el METODO de un objeto
console.log(carro.venta());

//Modificando un objeto, agregando propiedad
carro.placas = "3L6T89";
console.log(carro);

//Agregando un METODO
carro.cierreVenta = () => {
  carro.precio = 3000;
};

console.log(carro.cierreVenta());
console.log(carro);

//Accediendo a los objetos anidados dentro de objetos

console.log(`El numero de serie del motor es ${carro.serie.motor}`);

//Eliminar propiedades del objeto
delete carro.serie.pintura;
console.log(carro);

//No es posible borrar metodos dentro de un objeto
