/* Implementacion Juego de Cartas
Imagine que esta construyendo un juego de cartas simple. Usted tiene un array que representa un mazo o deck de cartas,
y quiere realizar las siguientes operaciones:
-Barajear el mazo o el deck de cartas, aleatoriamente reorganizar el orden de las cartas en el deck.
-Repartir un numero especifico de cartas a los jugadores desde el top o inicio del deck

Este ejercicio involucra utilizar el metodo splice() para reorganizar y repartir las cartas del deck
*/

const deck = [
  "♠️",
  "♣️",
  "♥️",
  "♦️",
  "♠️",
  "♣️",
  "♥️",
  "♦️",
  "♠️",
  "♣️",
  "♥️",
  "♦️",
];

//Se esta utilizando el algoritmo de "FISHER-YATES"
function shuffleDesk() {
  for (let index = deck.length - 1; index > 0; index--) {
    const j = Math.floor(Math.random() * (index + 1));
    [deck[index], deck[j]] = [deck[j], deck[index]];
  }
}

function dealCards(numCard) {
  const dealCards = deck.splice(0, numCard);
  return dealCards;
}

shuffleDesk();

const player1Hand = dealCards(3);
const player2Hand = dealCards(3);
const player3Hand = dealCards(3);

console.log("Jugador 1: ", player1Hand);
console.log("Jugador 2: ", player2Hand);
console.log("Jugador 3: ", player3Hand);
