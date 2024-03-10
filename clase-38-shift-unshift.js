//El metodo shift elimina el primer elemento de un array y lo devuelve, este metodo modifica el arreglo original

const colors = ["yellow", "blue", "red"];
const removeColor = colors.shift();

console.log(colors); //Resultado en consola ['blue, 'red']
console.log(removeColor); //Resultado en consola yellow

//El metodo unshift agrega uno o mas elemento al inicio del array y devuelve el tamano en como queda el array

const moreColors = ["brown", "green", "orange"];
const addColors = moreColors.unshift("blue", "black");

console.log(moreColors); //Resultado en consola [ 'blue', 'black', 'brown', 'green', 'orange' ]
console.log(addColors); //Resultado en consola 5
