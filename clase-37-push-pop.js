//push y pop modifican el arreglo original - MUTABILIDAD
// push() Añade uno o mas elementos al FINAL del array y regresa la lingitud del nuevo array
//pop() Elimina el ULTIMO elemento de un arreglo y lo devuelve

//1. push()
const pushMethod = [4, 18, 1, 62, 37];
pushMethod.push(27);
console.log(pushMethod);

const countries = ["Canada", "UK", "Japon"];
const newCountries = countries.push("Mexico", "Alemania");
console.log(countries);
console.log(newCountries);

//2. pop()
const popMethod = [17, 25, 13];
popMethod.pop();
console.log(popMethod);

const removeCountry = countries.pop();
console.log(countries);
console.log(removeCountry);
