/* 
Manejando un stack de libros.

Crear un programa que simule un stack de libros utilizando los metodos push y pop.
El stack debe de almacenar una coleccion de libros.
EL usuario debe de poder realizar las siguientes acciones:
-Agregar un nuevo libro en el TOP del stack.
-Remover un libro en el TOP del stack.
-Mostrar el stack actual de los libros.

Implementa un loop que le permita al usuario interactuar con el stack hasta que elija la opción 
para salir del programa.
*/
const bookStack = [
  "El Caliz de Fuego",
  "El señor de los Anillos - Las dos Torres",
  "Aprendiendo REACT",
];

let optionMenu = 1;

do {
  console.log("\nOpciones:");
  console.log("1. Agregar un nuevo libro al Stack");
  console.log("2. Remover un libro del Stack");
  console.log("3. Visualizar el Stack");
  console.log("4. Salir del programa");

  optionMenu = parseInt(
    prompt("Ingrese el número de la opción que desea realizar:")
  );

  switch (optionMenu) {
    case 1:
      const addBook = prompt("Ingrese el nombre del nuevo libro:");
      bookStack.push(addBook);
      console.log(`${addBook} fue agregado al TOP del Stack.`);
      break;

    case 2:
      if (bookStack.length === 0) {
        console.log("El stack de libros está vacío.");
      } else {
        const removedBook = bookStack.pop();
        console.log(`${removedBook} fue removido del Stack.`);
      }
      break;

    case 3:
      if (bookStack.length === 0) {
        console.log("El stack de libros está vacío.");
      } else {
        console.log("Stack actual de libros:");
        bookStack.forEach((book, index) => {
          console.log(`${index + 1}. ${book}`);
        });
      }
      break;

    case 4:
      console.log("Saliendo del programa...");
      break;

    default:
      console.log("Opción no válida. Por favor, ingrese un número válido.");
      break;
  }
} while (optionMenu !== 4);

console.log("¡Gracias por utilizar el programa!");

//Otra forma de resolver el ejercicio

let bookCart = [];
const ADD_TO_CART_ACTION = "addToCart";
const REMOVE_FROM_CART_ACTION = "removeFromCart";
const VIEW_CART_ACTION = "viewCart";

function viewCart() {
  console.log("Current Cart of Books: ", bookCart);
}

function performCartActions(action, newBook) {
  switch (action) {
    case ADD_TO_CART_ACTION:
      bookCart.push(newBook);
      break;
    case REMOVE_FROM_CART_ACTION:
      if (bookCart.length === 0) {
        console.log("Cart is empty. No books to remove.");
      } else {
        const removedBook = bookCart.pop();
        console.log(`Removed book from the cart: ${removedBook}`);
      }
      break;
    case VIEW_CART_ACTION:
      viewCart();
      break;
    default:
      console.log("Invalid action. Please choose a vaid option.");
  }
}
performCartActions(ADD_TO_CART_ACTION, "Think like a monk");
performCartActions(VIEW_CART_ACTION);
performCartActions(ADD_TO_CART_ACTION, "Ego is the enemy.");
performCartActions(VIEW_CART_ACTION);
performCartActions(REMOVE_FROM_CART_ACTION);
