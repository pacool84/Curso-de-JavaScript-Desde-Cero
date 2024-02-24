//For Each es muy similar al metodo For
//For Each tiene una sintaxis mas pequeña que For
//For Each se ejecuta POR CADA uno de los elementos en una lista
//Su estructura es la siguiente:
/*  
array.forEach((item) => {
  codigo a ejecutar
})

tener en cuenta que "item" puede ser cualquier nombre y se aconseja que sea el singular del nombre de nuestra lista 
frutas "item" ===> fruta
 */

let list = ["eat", "sleep", "code", "repeat"];

list.forEach((actividad) => {
  console.log(`Esta es la actividad ${actividad}`);
});
