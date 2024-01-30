//Capacidades que tienen las funciones al igual que otros objetos

//1.- Pasar funciones como argumentos ==> CALLBACKS "Importante"

function a() {} //Tip, el nombrar a una funcion se le conoce como Declaracion de Funcion
function b(a) {}

b(a);

//Retornar Funciones

function a() {
  function b() {}
  return b; //El return tiene que estar fuera de la funcion b
}

//Asignar funciones a variables ==> Expresion de funcion

const a = function () {}; //Importante, ya no es necesario nombrar a la funcion ya que la variable toma esa referencia

// Tener propiedades y Metodos

function methodOption() {}

const obj = {};

methodOption.call(obj); //Es decir que la funcion methodOption tiene un metodo "call", es como array.push, array.pop etc

//Anidar funciones ==> Nested Function

function a() {
  function b() {
    function c() {}
    c();
  }
  b();
}
a();

//Almacenar funciones en objetos ==>Esto se le conoce como "METODO"

const rocket = {
  name: "falcon",
  launchMessage: function launchMessage() {
    console.log("Despeguen 🚀");
  },
};

rocket.launchMessage();
