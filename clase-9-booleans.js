const isActive = true; //Es importante tener en cuenta este tipo de conotacion para describir nuestras variables de tipo booleano
const hasPrifile = false;

//Conversion de Booleans implicitas

const result = 5 > 3;
console.log(result); // El mismo javascript se encarga de realizar la conversion

const name = "Platzi";
console.log(!!name);

//Conversion explicita, nosotros como desarrolladores realizamos la conversion
const value = 0;
const explicitBoolean = Boolean(value);
console.log(explicitBoolean); //El resultado sera "false", javascript toma el valor de 0 como falso y el resto de los numero los tomar como verdaderos

const newValue = -8;
const newBoolean = Boolean(newValue);
console.log(newBoolean);
console.log(typeof newBoolean, typeof newValue);
