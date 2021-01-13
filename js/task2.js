// Пример 2 - Напишите функцию filterRange(arr, a, b), 
// которая принимает массив arr, 
// ищет в нём элементы между a и b 
// и отдаёт массив этих элементов.
// Функция должна возвращать новый массив 
// и не изменять исходный.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const filterRange = (arr, min, max) => {
//   const result = [];

//   for (const num of arr) {
//     if (num >= min && num <= max) {
//       result.push(num);
//     }
//   }

//   return result;
// };

// const filterRange = (arr, min, max) => {
//   const result = [];

//   arr.forEach(num => {
//     if (num >= min && num <= max) {
//       result.push(num);
//     }
//   });

//   return result;
// };

// const filterRange = (arr, min, max) => {
//   const result = arr.filter(num => num >= min && num <= max);

//   return result;
// };

const filterRange = (arr, min, max) => arr
  .filter(n => n >= min && n <= max);

console.table(filterRange(numbers, 3, 7));
console.table(filterRange(numbers, 2, 5));
// console.log(filterRange(numbers, 6, 5));
