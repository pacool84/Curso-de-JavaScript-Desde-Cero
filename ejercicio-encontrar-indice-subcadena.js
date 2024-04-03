/* 
Encontrar Índices de Subcadena
Dado un array de cadenas de texto y una cadena de texto objetivo, escribe una función para determinar si la cadena objetivo está presente en el array. 
Si está presente, devuelve el índice de la primera ocurrencia y el índice de la última ocurrencia; de lo contrario, devuelve -1.
*/
const stringArray = ["apple", "banana", "orange", "grape", "banana", "kiwi"];
const target = "watermelon";

const findStringIndicesInArray = (array, target) => {
  const result = {
    includesTargetString: false,
    firstOccurrenceIndex: -1,
    lastOccurrenceIndex: -1,
  };
  array.forEach((element, index) => {
    if (element.includes(target)) {
      result.includesTargetString = true;
      result.firstOccurrenceIndex = array.indexOf(target);
      result.lastOccurrenceIndex = array.lastIndexOf(target);
    }
  });
  return result;
};
const result = findStringIndicesInArray(stringArray, target);
console.log(result);
