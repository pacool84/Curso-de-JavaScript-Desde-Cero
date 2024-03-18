//El metodo "map" permite aplicar una funcion a cada elemento de un array y construir un nuevo array con los resultados
//Este metodo ITERA sobre cada elemento del array
//Este metodo no modifica el array original - Inmutabilidad

const numbers = [1, 2, 3, 4, 5];

const squaredNumbers = numbers.map((num) => num * num); //Hacemos que cada numero se eleve al cuadrado

console.log(numbers);
console.log(squaredNumbers);

//El metodo "forEach" itera sobre cada elemento de un array y ejecuta una funcion proporcionada para cada elemento sin crear un nuevo array
//Lo que regresa este metodo no esta en forma de un array
//Nos devuelve el valor de cada elemento o valor dentro del array

const colors = ["red", "pink", "blue"];

const iteratedColors = colors.forEach((color) => console.log(color));

console.log("Estos son los colors: ", colors);
console.log("Estos son los iteratedColors: ", iteratedColors);
