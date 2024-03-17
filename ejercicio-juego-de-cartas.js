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

// Utilizamos el algoritmo de "Fisher-Yates" para barajar el mazo
function shuffleDeck() {
  for (let index = deck.length - 1; index > 0; index--) {
    const j = Math.floor(Math.random() * (index + 1));
    [deck[index], deck[j]] = [deck[j], deck[index]];
  }
}

// Función para repartir cartas
function dealCards(numCards) {
  const dealtCards = deck.splice(0, numCards);
  return dealtCards;
}

// Barajamos el mazo antes de repartir
shuffleDeck();

// Constante para el número de cartas a repartir
const NUM_CARDS_TO_DEAL = 3;

// Repartimos cartas a los jugadores
const player1Hand = dealCards(NUM_CARDS_TO_DEAL);
const player2Hand = dealCards(NUM_CARDS_TO_DEAL);
const player3Hand = dealCards(NUM_CARDS_TO_DEAL);

// Mostramos las manos de los jugadores
console.log("Jugador 1: ", player1Hand);
console.log("Jugador 2: ", player2Hand);
console.log("Jugador 3: ", player3Hand);
