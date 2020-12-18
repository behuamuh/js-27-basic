// Пример 3 - bind
// Напишите функцию, которая принимает число - степень
// и возвращает функцию, 
// которая принимает число и возводит его в переданную 
// ранее степень

// function makePower(num) {
//   function power(n) {
//     return Math.pow(num, n);
//   }

//   return power;
// }

const makePower = num => Math.pow.bind(null, num);

// Math.pow(num, n) => num ** n;
const powTwo = makePower(2);

// const num = 2;
// const power = Math.pow.bind(null, 2);
// this внутри power - null
// num => 2 ** num;

console.log(powTwo(2)); // 4
console.log(powTwo(3)); // 8
console.log(powTwo(4)); // 16
console.log(powTwo(5)); // 32
console.log('-------');

const powThree = makePower(3);

console.log(powThree(2)); // 9
console.log(powThree(3)); // 27
console.log(powThree(4)); // 81
