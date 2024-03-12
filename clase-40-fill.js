//El metodo fill cambia todos los elementos de un array por un valor estatico desde el indice start (por defecto 0) hasta el indice end (por defecto array.length)

const arrayNumbers = [4, 18, 1, 62, 34];
const fillArrayNumbers = arrayNumbers.fill("🍊", 1, 3); //Esto se interpreta como "Llena con 🍊 desde la posicion 1 hasta la posicion 3-1"

console.log(fillArrayNumbers);

console.log(arrayNumbers.fill("🍎", 1)); //Llena con manzanas desde la posicion 1 hasta el final del array

console.log(arrayNumbers.fill("🥑")); //Llena con ahuacates todo el array
