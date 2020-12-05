// Пример 8 - Напишите функцию power(x,n), 
// которая возводит x в степень n.

const power = (x, n) => {
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
};

console.log(power(5, 0)); // 1
console.log(power(5, 2)); // 25
console.log(power(5, 3)); // 125
