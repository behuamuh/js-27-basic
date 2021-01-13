// Пример 3 - Напишите функцию getAverage(numbers), 
// которая принимает массив чисел и возвращает среднее
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

// const getAverage = arr => {
//   let sum = 0;
  
//   for (const num of arr) {
//     sum += num;
//   }

//   return sum / arr.length;
// };

const getAverage = arr => {
  // const sum = arr.reduce((acc, num) => {
  //   return acc + num;
  // }, 0);

  const sum = arr.reduce((acc, num) => acc + num);
  const average = sum / arr.length;

  return average;
};

// const getAverage = arr => arr.reduce((acc, num) => acc + num) / arr.length;

console.table(getAverage(numbers));
