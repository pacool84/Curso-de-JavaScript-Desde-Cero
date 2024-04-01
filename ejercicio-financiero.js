/* 
1. Imagina que tienes una lista de transacciones financieras y deseas realizar varias operaciones de procesamiento de datos. Usa las siguientes instrucciones como guía para completar el ejercicio:
2. Calcular el Saldo Total: - Utiliza el método reduce para calcular y mostrar el saldo total de todas las transacciones.
3. Encontrar la Transacción más Grande (Ingreso o Egreso): - Emplea el método reduce para encontrar la transacción con el mayor monto (ya sea ingreso o egreso) y muéstrala en la consola.
4. Filtrar Transacciones de Compra: - Usa el método filter para obtener y mostrar en la consola solo las transacciones de compra (con montos negativos).
5. Encontrar una Transacción por Descripción: - Utiliza el método find para buscar y mostrar en la consola una transacción específica por su descripción.
6. Encontrar el Índice de una Transacción por Monto: - Emplea el método findIndex para encontrar y mostrar en la consola el índice de una transacción específica por su monto.
7. Actualizar Descripciones de Transacciones: - Utiliza el método forEach para actualizar las descripciones de las transacciones. Añade el prefijo "Gasto: " a las transacciones con montos negativos y "Ingreso: " a las transacciones con montos positivos. Muestra las transacciones actualizadas en la consola. */

const transactions = [
  { id: 1, description: "Regalo Cumpleaños", ammount: -40 },
  { id: 2, description: "Parque de Diversiones", ammount: -100 },
  { id: 3, description: "Comidas", ammount: -50 },
  { id: 4, description: "Pagos de Escuelas", ammount: -90 },
  { id: 5, description: "Ingresos", ammount: 200 },
  { id: 5, description: "Vacaciones", ammount: -25000 },
];

//Calcular el balance total

const totalBalance = transactions.reduce(
  (accumulator, transaction) => accumulator + transaction.ammount,
  0
);

console.log("El balance total es: $", totalBalance);

//Identifica la transaccion mas grande no importando si es ingreso o egreso

const largeAmmount = transactions.reduce((acumulador, transaccionActual) => {
  return Math.abs(transaccionActual.ammount) > Math.abs(acumulador.ammount)
    ? transaccionActual
    : acumulador;
}, transactions[0]);

console.log("La transaccion mas grande es: ", largeAmmount.ammount);
console.log("El detalle de la transaccion mas grande es: ", largeAmmount);

//Identificar las transacciones con gastos, cantidades en negativo

const purchaseAmmounts = transactions.filter(
  (transaction) => transaction.ammount < 0
);

console.log("Lo gastos indentificados son: ", purchaseAmmounts);

// Buscar transaccion por descripcion

const searchValue = "Pagos de Escuelas";
const specificTransaction = transactions.find(
  (transaction) => transaction.description === searchValue
);

console.log("La transaccion especifica es: ", specificTransaction);

//Encontrar el indice de una transaccion por monto

const indexTransactionWithAmmount = transactions.findIndex(
  (transaction) => transaction.ammount === 200
);
console.log("El indice de la transaccion es: ", indexTransactionWithAmmount);

//Actualizar descripcion de una transaccion

transactions.forEach((transaction) => {
  if (transaction.ammount < 0) {
    transaction.description = `Expense: ${transaction.description}`;
  } else {
    transaction.description = `Income: ${transaction.description}`;
  }
});

console.log("Transacciones Actualizadas:", transactions);
