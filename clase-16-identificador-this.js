//This es el entorno de ejecución de una funcion u objeto
//Esto tambien se conoce como Enlace Implicito - Implicit Binding
const house = {
  dogName: "Nagginie",
  dogGreeting: function () {
    console.log(`Hi, I´m ${this.dogName}`); //Accedemos a propiedades de este mismo objeto
  },
};

house.dogGreeting();

function dogGreeting() {
  console.log(`Hi, I´m ${this.dogName}`);
}

//Otro Ejemplo

const house1 = {
  dogName: "Firulais",
  dogAge: 3,
};

function dogGreeting() {
  console.log(`Hi, I´m ${this.dogName}`); //Este this ya no apunta al objeto que hace alusion
}

house1.dogGreeting();

//Otro ejemplo enlace explcito - Explicit Binding
const newHouse = {
  dogName: "Misha",
};

dogGreeting.call(newHouse); //El metodo call nos permite vincular el objeto con la funcion, this hace alusion al nvo objeto newHouse
