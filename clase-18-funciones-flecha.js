const greeting = function (name) {
  return `Hi, ${name}`;
};

//Arrow function - explicit return
const newGreeting = (name) => {
  return `Hi, ${name}`;
};

//Arrow function - implicit return

const anotherHello = (name) => `Hi, ${name}`; //Aqui pudieramos quitar ademas de las llaves {} los parentesis () para el parametro, siempre y cuando solo se reciba un solo parametro

//Revisemos ahora la vinculacion con el contexto, el this
//Lexical Binding

const fictionalCharacter = {
  name: "Uncle Ben",
  messageWithTraditionalFunction: function (message) {
    //messageWithTraditionalFunction Se considera como el famoso método
    console.log(`${this.name} says: ${message} `);
  },
  messageWithArrowFunction: (message) => {
    console.log(`${this.name} says: ${message}`); //Con una Arrow Function el "this" no existe, por lo que el resultado en consola de UNDEFINED, NO EXISTE EL ENLACE LEXICO
  },
};

fictionalCharacter.messageWithTraditionalFunction(
  "With great power comes great responsability"
);

fictionalCharacter.messageWithArrowFunction(
  "Un gran poder conlleva una gran responsabilidad"
);
