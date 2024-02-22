const numeroSecreto = Math.floor(Math.random() * 10 + 1); //Delimitamos un numero aleatorio entre el 10 y el 1

const numeroJugador = parseInt(
  prompt("Adivina el número secreto entre el 1 al 10")
);

console.log(`Este es el número con el que juegas ${numeroJugador}`);

if (numeroJugador === numeroSecreto) {
  console.log("!Felicidades, adivinaste el numero secreto");
} else if (numeroJugador < numeroSecreto) {
  console.log("El número es demasiado bajo, intenta de nuevo ");
} else {
  console.log("El número es muy alto, intente de nuevo");
}
