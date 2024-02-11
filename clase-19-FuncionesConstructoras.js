//Funciones Constructoras
//Por convencion estas funciones se nombran con la primera letra en Mayusculas

function Rocket(name, ownMessage) {
  this.name = name; //Creamos sus propiedades utilizando this
  this.launchMessage = function () {
    console.log(ownMessage);
  };
}

const falcon9Rocket = new Rocket("Falcon 9", "🔥🔥Launching Falcon🔥🔥"); //con "new" indicamos que es una instancia de ese objeto
const falconHeavyRocket = new Rocket("Falcon Heavy", "🔥🔥Launching Heavy🔥🔥");

console.log(falcon9Rocket.name);
console.log(falcon9Rocket.launchMessage());

console.log(falconHeavyRocket.name);
console.log(falconHeavyRocket.launchMessage());

//Ahora utilizando funciones flechas dentro de la funcion constructora

function EnhanceRocket(newName, byeMessage) {
  this.name = newName;
  this.launchMessage = () => byeMessage; //Esta es la arrow function
}

const improveRocket = new EnhanceRocket(
  "Enhance Rocket",
  "🚀🚀Good Bye My Friends🚀🚀"
);

console.log(improveRocket.name);
console.log(improveRocket.launchMessage());

//Pasando arrow functions a funciones constructoras

const personilizedMessage = () =>
  "🌕🌕🌕This Rocket will be the one to land by there self🌕🌕🌕";

function XRocket(xName, LaunchingMessage) {
  this.name = xName;
  this.xLaunchMessage = () => LaunchingMessage;
}

const XnewRocket = new XRocket("X Rocket", personilizedMessage()); // Aqui es donde pasamos nuestra Arrow Function a la funcion Constructora

console.log(XnewRocket.name);
console.log(XnewRocket.xLaunchMessage());

//Funciones constructoras con ARROW FUNCTIONS

const RocketWithArrowFunction = (name, byeMessage) => ({
  //Atencion con la forma o esquema del RETURN ({})
  name: name,
  launchMessage: byeMessage,
});

const messageForArrowFunction = () => "Good Bye Arrow Function";

const rocketLast = RocketWithArrowFunction(
  //Aqui ya no usamos "new"
  "Chevy Rocket",
  messageForArrowFunction
);

console.log(rocketLast.name);
console.log(rocketLast.launchMessage());
