/* 
Crea un programa pueda verificar si la persona ganadora se encuentra dentro de una lista de ganadores.
Puedes tomar como entrada nombres de personas o tickets de loteria, en caso de encontrar a la persona o ticket,
despliega en pantalla la informacion
*/

const participants = ["Brenda", "Sebastian", "Naginie", "Paco"];
const winner = "Sebastian";

function lotery(winnerPerson) {
  const validation = participants.find((name) => name === winnerPerson);
  if (validation) {
    console.log("El ganador de la rifa es", validation);
  } else {
    console.log("NO hubo ganador de la rifa 🥲");
  }
}

lotery(winner);

//Otra forma de resolver el ejercicio

const winningParticipants = [
  { id: 1, name: "Jennifer", ticketNumber: 001 },
  { id: 8, name: "Michael", ticketNumber: 008 },
  { id: 15, name: "Emily", ticketNumber: 015 },
  { id: 47, name: "Charlie", ticketNumber: 047 },
];

function findWinnerByName(name) {
  const winner = winningParticipants.find(
    (participants) => participants.name === name
  );
  return winner || "No winner found with that name.";
}

function findIndexWinnerByTicket(ticketNumber) {
  const index = winningParticipants.findIndex(
    (participants) => participants.ticketNumber === ticketNumber
  );
  return index !== -1 ? index : "No winner found with that ticket number.";
}

function displayWinnerInformation(winner) {
  if (
    winner !== undefined &&
    winner != null &&
    winner !== "No winner found with that name."
  ) {
    console.log("Winner information: ", winner);
  } else {
    console.log("No winner found.");
  }
}

const winnerByName = findWinnerByName("Emily");
const indexWinnerByTicket = findIndexWinnerByTicket(008);

displayWinnerInformation(winnerByName);
console.log("Index of Winner by Ticket Number: ", indexWinnerByTicket);
