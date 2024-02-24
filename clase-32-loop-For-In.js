//For in lo utilizaremos para ITERAR con objetos ENUMERABLES, como los OBJETOS
//Su estructura es la siguiente:
/* 
for(variable in objeto) {
  codigo a ejecutar
}
*/

const listaCompras = {
  manzana: 5,
  pera: 2,
  naranja: 3,
  uva: 1,
};

for (fruta in listaCompras) {
  console.log(fruta);
  console.log(`Cantidad a comprar: ${listaCompras[fruta]}`);
}

//En el codigo anterior fruta se convierte en una variable numerica por lo cual al utilizarla manda llamar al incide del objeto
//Pero cuando utilizamos la estrucutra ${listaCompras[fruta]} lo que hacemos es traernos el "value" o valor dentro del objeto
