//Existen STRINGS primitivos - Inmutables

const stringPrimitivo = "Soy un String primitivo";
console.log(typeof stringPrimitivo); //El resultado en consola es string

const stringPrimitivo2 = String("También soy un string primitivo");
console.log(typeof stringPrimitivo2); //El resultado en consola es string

//Existen STRING de tipo objeto - Mutables

const stringObjeto = new String("Soy un string objeto"); //Con la palabra clave "new" creamos un objeto
console.log(typeof stringObjeto);

//Manipulacion de Strings, Acceder a caracteres

const saludo = "Hola. ¿Como estas?"; //Los STRINGS tienen indices
console.log(saludo[2]); //Queremos acceder a la primera "l" por lo que su indice es el dos

//Otro ejemplo de manipulacion de Strings

console.log(saludo.charAt(2)); //Queremos acceder a la primera "l" por lo que su indice es el dos

//Conocer el indice de alguna letra

console.log(saludo.indexOf("¿")); //El resultado en consola es 6

//Conocer el indice en done comienza una palabra

console.log(saludo.indexOf("estas")); //El resultado es 12

//Valorar si una palabra NO existe en nuestro strings

console.log(saludo.indexOf("estrella")); //El resultado es -1 ya que la palabra "estrella" no existe dentro de nuestro string

//Saber la ultima posicion de un STRING o letra

console.log(saludo.lastIndexOf("s")); //El resultado es 16, ya que evalua la ultima S posicionada dentro de todo el string, no toma en cuenta la primera S

//Partir o dividir los Strings

console.log(saludo.slice(7, 17)); //El primer parametro es donde empieza y el segundo parametro + 1 es donde termina

//Otra forma de dividir los strings
const saludoDividido = saludo.split(" ");
console.log(saludoDividido); // Este metodo transforma en un Array el string, y lo divide en este ejemplo por cada "espacio" que encuentre

console.log(saludoDividido[0]); // De esta manera accedemos al indice 0 del array, por lo que el resultado en consola es "Hola."

//Saber la longitud de nuestro string

console.log(saludo.length); //El resultado es 18, tener en cuenta que lenght no trabaja por indices, trabaja por cantidad de letras dentro del string

//Transformar el string a mayusculas
console.log(saludo.toUpperCase());

//Tranformar el string a minusculas
console.log(saludo.toLowerCase());

//Remover espacios al principio y al final de un string
const saludoConEspacios = " Hola Mundo ";
const saludoSinEspacios = saludoConEspacios.trim();
console.log(saludoSinEspacios);

//Reemplazar palabras dentro de un string
const saludoOriginal = "Hola Mundo";
const remplazoDeSaludo = saludoOriginal.replace("Mundo", "Paquito"); //El primer parametro es el string que se reemplazara, el segundo parametro es el string con el que se reemplazara

console.log(remplazoDeSaludo);
