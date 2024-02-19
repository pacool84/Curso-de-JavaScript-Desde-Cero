//Ejecución condicional "if", tambien conocida como estructras de control

let nombre = "Sebas";

if (nombre === "Sebas") {
  console.log(`La condicion SI cumple con ${nombre}`);
} else if (nombre === "Paco" || nombre === "Brenda") {
  console.log(`La condicion SI cumple con los papas ${nombre}`);
} else {
  console.log(`La condicion NO se cumplio con ${nombre}`);
}
