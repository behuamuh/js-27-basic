// Пример 7 - Напишите функцию, 
// которая считает сумму цифр в числе
// и возвращает ее

const calcDiditsSum = number => {
  const digits = String(number).split('');
  let sum = 0;

  for (let digit of digits) {
    sum += Number(digit);
  }

  return sum;
};

console.log(calcDiditsSum(123)); // 6
console.log(calcDiditsSum(258)); // 15
console.log(calcDiditsSum(1)); // 1
