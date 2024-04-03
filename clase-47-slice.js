//El metodo slice crea una copia superficial (shallow copy) de una porcion del array, especificada por indices de inicio y fin(fin no incluido)

const animals = ["ant", "bison", "camel", "duck", "elephant"];

const lessAnimals = animals.slice(3); //El resultado en consola es [ 'duck', 'elephant' ]
const minorAnimals = animals.slice(1, 4); //El resultado en consola es [ 'bison', 'camel', 'duck' ], aqui considerar que el segundo parametro que pasamos en la funcion slice hace el indice menos uno
const noMoreAnimals = animals.slice(1, 9); //El resultado en consola es [ 'bison', 'camel', 'duck', 'elephant' ], al pasarle una posicion mayor al tamaño del propio array podemos incluir TODOS los elementos que lo conforman
const lastAnimalsPosition = animals.slice(-3); //El resultado en consola es [ 'camel', 'duck', 'elephant' ], lo que realiza es contar de atras hacia adelante tomando la siguiente secuencia ultima posicion = -1, penultima posicion = -2 y asi sucecivamente
const moreLastPositionsAnimals = animals.slice(2, -1); //El resultado en consola es [ 'camel', 'duck' ]

console.log(lessAnimals);
console.log(minorAnimals);
console.log(noMoreAnimals);
console.log(lastAnimalsPosition);
console.log(moreLastPositionsAnimals);
