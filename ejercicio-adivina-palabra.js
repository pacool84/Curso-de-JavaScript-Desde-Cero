/* 
Jugemos a Adivinar la palabra

El usuario tiene 3 intentos para adivinar la palabra oculta 

Requerimientos:

-El juego debe de tener una palabra oculta.
-El juego puede dar 1 pista de la palabra.
-El usuario debe de ingresar una suposicion.
-El juego debe de verificar si la suposición del usuario es correcta.
-El juego debe tener un número limitado de intentos.
-El juego debe terminar cuando el usuario adivine la palabra o se quede sin intentos
*/

const hiddenWord = "Sebastian";
const clueWord = "";
const userSuggestion = "sebastian";
let tries = 3;

while (tries != 0) {
  if (hiddenWord === userSuggestion) {
    console.log(`Felicidades, adivinaste la palabra oculta ${hiddenWord}`);
    break;
  } else if (hiddenWord != userSuggestion) {
    console.log(`Lo sentimos, ${userSuggestion} NO es la palabra oculta `);
    tries--;
  }
}

//Ejemplo de Resolución

let palabraOculta = "javascript";
let intentos = 3;

function verificarSuposicion(suposicion, palabraOculta) {
  if (suposicion.toLowerCase() === palabraOculta) {
    return true;
  }
  return false;
}

function jugarAdivinaLaPalabra() {
  alert("Bienvenido a jugar adivina la palabra oculta");
  alert("Tienes 3 intentos para adivinar la palabra");
  alert("-pista- la palabra oculta es un lenguaje de programaciÃ³n");
  while (intentos > 0) {
    let suposicion = prompt("Adivina la palabra: ");
    if (verificarSuposicion(suposicion, palabraOculta)) {
      alert("Â¡Correcto! Has adivinado la palabra.");
      break;
    } else {
      intentos--;
      if (intentos > 0) {
        alert(`Incorrecto, Aun tienes ${intentos} intento restantes`);
      } else {
        alert(`Agotaste tus intentos, la palarba oculta era ${palabraOculta}`);
      }
    }
  }
}

jugarAdivinaLaPalabra();
