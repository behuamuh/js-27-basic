// Пример 4 - Стрелочные функции (explicit return)
// Выполните рефакторинг 
// заменив объявление функции на стрелочную функцию.

// function checkNumbers(a, b) {
//   if (a > b) {
//     return `число ${a} больше ${b}`;
//   }

//   return `число ${b} больше ${a}`;
// }

const checkNumbers = (a, b) => {
  if (a > b) {
    return `число ${a} больше ${b}`;
  }

  return `число ${b} больше ${a}`;
};

console.log(checkNumbers(7, 3)); // число 7 больше 3
console.log(checkNumbers(7, 10)); // число 10 больше 7
