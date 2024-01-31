//This es el entorno de ejecución de una funcion u objeto
//Esto tambien se conoce como Enlace Implicito - Implicit Binding
const house = {
  dogName: "Fido",
  dogGreeting: function () {
    console.log(`Hi, I'm ${this.dogName}`); //Accedemos a propiedades de este mismo objeto
  },
};
house.dogGreeting();
function dogGreeting() {
  console.log(`Hi, I'm ${this.dogName}`); //Este this ya no apunta al objeto que hace alusion
}

//Otro ejemplo enlace explcito - Explicit Binding
const newHouse = { dogName: "Coconut" };
dogGreeting.call(newHouse);
function newDogGreeting(owner, address) {
  console.log(`Hi, I'm ${this.dogName} and I live with ${owner} on ${address}`);
}
const owner = "Lucy";
const address = "Avenue 123";
newDogGreeting.call(newHouse, owner, address); //El metodo call nos permite vincular el objeto con la funcion, this hace alusion al nvo objeto newHouse
