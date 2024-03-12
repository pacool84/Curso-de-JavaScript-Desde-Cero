//El metodo "splice" cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos
//Este metodo modifica el arreglo original - mutabilidad
//Su estructura es la siguiente:
//splice(indice en donde comenzara a borrar, cantidad a borrar, elemento para agregar)

const vegetables = ["onion", "carrot", "brocoli"];
const newVegetables = vegetables.splice(1, 1, "cucumber", "avocado"); //Estamos eliminando carrot por que esta en el incide 1 y eliminamos un solo elemento a partir de ese indice

console.log(vegetables);
console.log(newVegetables);

//El metodo "reverse" invierte el orden de los elementos en un array in place.
//El primer elemento pasa a ser el ultimo y el ultimo para a ser el primero
//Este metodo tambien modificia el array original

const numbers = [1, 2, 3, 4, 5];
const reverseNumbers = numbers.reverse();

console.log(numbers);
console.log(reverseNumbers);

//El metodo "sort" ordena los elementos de un array localmente y devuelve el array ordenado
//El metodo "sort" se puede usar tanto con numeros como con strings
//Este metodo pasa los numeros a strings, javascript revisa el unicode order, hace un ordenamiento por strings

const unsortedNumbers = [4, 18, 1, 62, 34];
const sortedNumbers = unsortedNumbers.sort();

console.log(unsortedNumbers);
console.log(sortedNumbers);

const sortExampleWithNumbers = [39, 21, 8, 5, 83, 42, 50];
const numerosOrdenados = sortExampleWithNumbers.sort((a, b) => a - b);
//39 - 21 = 18 >>>>> Numeros positivos implica que no estan ordenados y los cambia
//5 - 83 = -78 >>>>> Numeros negativos implica que estan bien ordenados de menor a mayor
//Lo anterior lo hace con todas las combinaciones del arreglo hasta que todos den negativo

console.log(sortExampleWithNumbers);
console.log(numerosOrdenados);

//Ejemplo de sort con strings

const cities = ["New York", "Paris", "Tokio", "Londres"]; //sort revisa con base al UTF-16 el ordenamiento de los strings
const sortCities = cities.sort();

console.log(cities);
console.log(sortCities);
