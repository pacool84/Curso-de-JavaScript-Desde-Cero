//Null
const snoopy = null;
console.log(snoopy); //El valor es Nulo
console.log(typeof snoopy); // Pero el tipo de dato es "object", este es uno de las oportunidades en javascript

//Undefined
//En la mayoria de los cosas NO se asigna una variable como UNDEFINED, no es comun
let nombre;
console.log(nombre); //javascript identifica que existe halgo pero no hay alguna asignacion a la variable
console.log(typeof nombre);

//Symbol - valores unicos y que no se pretende cambiarlos

const uniqueId = Symbol("id");
console.log(uniqueId);

//En el caso de que existan dos valores unicos iguales, la comparativa se identifica como FALSE
const valorUnico1 = Symbol(1);
const valorUnico2 = Symbol(1);

console.log(valorUnico1 === valorUnico2); //El resultado es false, si bien estamos diciendo que son iguales, javascript identifica que al ser valores unico estos no pueden ser iguales "FALSE"

//Symbols con objetos
const ID = Symbol("id");
let user = {};
user[ID] = "pacool84";
console.log(user);

//BigInt

const bigNumber = 9726374627324823748274827384728347287423n;
console.log(bigNumber);

const particlesInUniverse = 10000000000000000000000000000000000000000000n;
console.log(particlesInUniverse);
