//Son pedazos de código que nos permitiran construir funcionalidades
//Ejemplo

//function es la palabra clave para decirle al programa que esto es una funcion
//suma es el nombre de la funcion, considerar camelCase para el nombrabiento de las funciones
//a,b son los PARAMETROS o INPUTS para nuestra funcion, pueden ser opcionales, no todas las funciones requieren de parametros
//Dentro de las llaves es el CUERPO de la función
//return es opcional, es para retornar algun valor o output de la funcion
//suma(10, 40) es el LLAMADO de la funcion para poder ejecutarla
//(10,40) dentro del llamado de la funcion se le conoce como ARGUMENTO
function suma(a, b) {
  return a + b;
}

suma(10, 40);

//Ejercicio, realiza una funcion para calcular el descuento de una prenda

function calculatePriceDisccount(price, discountPercentage) {
  const discount = (price * discountPercentage) / 100;
  const priceWithDiscount = price - discount;
  return priceWithDiscount;
}

const originalPrice = 100;
const discountPercentage = 20;
const finalPrice = calculatePriceDisccount(originalPrice, discountPercentage);

console.log("Precio Original: $" + originalPrice);
console.log("Descuento de Promoción: " + discountPercentage + "%");
console.log("El precio de tu prenda con descuento es: $" + finalPrice);
