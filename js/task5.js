// Пример 5 - Стрелочные функции (implicit return)
// Выполните рефакторинг 
// заменив объявление функции на стрелочную функцию.

// function mult(x, y, z) {
//   return x * y * z;
// }

const mult = (x, y, z) => x * y * z;

console.log(mult(1,2,3)); // 6
console.log(mult(2, 5, 10)); // 100
