//Metodos para manipular el contexto de ejecucion para una funcion
const owner = "Sebastian";
const address = "Avenue 1234";

function dogGreeting(owner, address) {
  console.log(
    `Hi, I´m ${this.dogName}, my owner is ${owner} and I live in ${address}`
  );
}

const newHouse = {
  dogName: "Naginie",
};

dogGreeting.call(newHouse, owner, address);

//Ahora utilizaremos el metodo apply
//La diferencia es que con este metodo los parametros se pasan en forma de array

const necessaryValues = [owner, address];

dogGreeting.apply(newHouse, necessaryValues);

//Ahora utilizaremos el metodo bind
//Con este metodo hacemos que se ejecute un funcion totalmente diferente
const bindMethod = dogGreeting.bind(newHouse, owner, address);
bindMethod();
console.log(bindMethod); //El resultado en consola es [Function: bound dogGreeting]
