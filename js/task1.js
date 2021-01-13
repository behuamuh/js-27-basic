// 1 - Дан массив с числами
// Напечатайте в консоль только четные
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function logEven(item) {
//   if (item % 2 !== 0) return;

//   console.log(item);
// }

// numbers.forEach(function(item) {
//   if (item % 2 !== 0) return;

//   console.log(item);
// });

numbers.forEach(item => {
  if (item % 2 === 0) {
    console.log(item);
  }
});

numbers
  .filter(n => n % 2 === 0)
  .forEach(n => console.log(n));

// console.log(evenNumbers);
