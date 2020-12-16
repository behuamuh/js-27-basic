// Пример 4 - напишите функции
// calculate(num1, num2, action) - которая принимает 2 числа
// и action - функцию - действие над числами
// add(a, b) - складывает числа
// substract(a, b) - вычитает из числа a число b
// mult(a, b) - умножает числа
// divide(a, b) - делит число a на число b

const calculate = (num1, num2, action) => {
  // const num1 = 13; 
  // const num2 = 7
  // const action = (a, b) => a + b)
  const result = action(num1, num2); // 20

  console.log(result);
};

// const add = (a, b) => a + b;
// const substract = (a, b) => a - b;
// const mult = (a, b) => a * b;
// const divide = (a, b) => a / b;

// calculate(3, 7, add); // 10
// calculate(13, 7, substract); // 6
// calculate(3, 7, mult); // 21
// calculate(49, 7, divide); // 7

calculate(13, 7, (a, b) => a + b); // 20
calculate(13, 17, (a, b) => a - b); // -4
calculate(6, 7, (a, b) => a * b); // 42
calculate(49, 7, (a, b) => a / b); // 7
