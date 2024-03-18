/* 
Crea un programa que tome una array de calificaciones como entrada y que calcule el promedio solo de aquellas 
calificaciones aprobatorias tomando en cuenta que calificaciones aprobatorias sean igual o mayor a 7
*/

const grades = [9, 10, 8, 9, 7, 5, 6, 0, 1, 2, 3, 4, 5];

//Filtrado de notas aprobatorias

const approvalGrades = grades.filter((grade) => grade >= 7);

//Calculo de la suma de notas
const sumGrades = approvalGrades.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(`Las calificaciones aprobatorias son: ${approvalGrades}`);
console.log(`La suma de las calificaciones aprobatorias es: ${sumGrades}`);
console.log(
  `El numero total de calificaciones aprobatorias es: ${approvalGrades.length}`
);

//Calculo del promedio de las notas aprobatorias

function averageGrades(totalGrades) {
  const averageGrades = totalGrades / approvalGrades.length;
  console.log(`El promedio de las calificaciones es ${averageGrades}`);
}

averageGrades(sumGrades);
