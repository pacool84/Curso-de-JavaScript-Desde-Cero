/* Crear un programa que tome un arreglo con temperaturas in Fahrenheit como entradas y lo convierta a grados celcius utilizando
la siguiente formula:
C = 5/9 * (F -32)
*/

const fahrenheitTemperatures = [60, 65, 70, 75];

const celciusTemperature = fahrenheitTemperatures.map(
  (fah) => (5 / 9) * (fah - 32)
);

console.log("Temperatura en grados CELCIUS: ", celciusTemperature);
