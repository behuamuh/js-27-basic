// Пример 1 SPREAD
// Напиши функцию, которая принимает массив чисел
// и находит минимальное

const arrayOfNumbers = [24, 11, 5, 127];
const b = [
  { number: new Number(5) },
  { number: new Number(6) },
];
const c = [new Number(4), new Number(8)];

const getMinOfArray = numbers => Math.min(...numbers);
const getMaxOfArray = numbers => Math.max(...numbers);

// console.log(getMinOfArray(arrayOfNumbers));
// console.log(getMaxOfArray(arrayOfNumbers));

console.log(getMinOfArray(b));
console.log(getMinOfArray(c));
