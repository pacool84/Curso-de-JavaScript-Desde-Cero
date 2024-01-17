// Los datos primitivos son Inmutables y SE PASAN POR VALOR
//Los datos complejos son Mutables y SE PASAN POR REFERENCIA

let x = 1;
let y = "Hola";
let z = null;

let a = x;
let b = y;
let c = z;

console.log(x, y, z, a, b, c);

//Aqui es donde hacemos un PASO POR VALOR al querer cambiar el valor
a = 12;
b = "platzi";
c = undefined;

//Ahora revisaremos PASO POR REFERENCIA

let frutas = ["manzana"]; // En este ejemplo es importante visualizar como esta compuesto en memoria el arreglo
// variables    valores     Dirección en memoria      Objeto
// frutas      <#001>            #001              ['frutas']
//Al crear objetos o arreglos creamos REFERENCIAS en memoria y no valores

frutas.push("pera");
// variables    valores     Dirección en memoria      Objeto
// frutas      <#001>            #001           ['frutas', 'pera']

let panes = ["🥐"];
let copiaDePanes = panes;
panes.push("🥖");
console.log(panes, copiaDePanes); //El concepto importante es que la variable copiaDePanes apunta a la misma dirección de memoria de la variable panes
