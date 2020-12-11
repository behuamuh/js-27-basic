// Пример 2
// Перепешите функцию calculateAverage() 
// на стрелочную,
// которая принимает произвольное кол-во аргументов 
// и возвращает их среднее значение. 
// Все аргументы будут только числами.

// function calculateAverage() {
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }

//   const average = sum / arguments.length;
//   return average ;
// }

const calculateAverage = (...args) => {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }

  const average = sum / args.length;
  return average ;
};

console.log(calculateAverage(1, 2, 3, 4)); // 2.5
console.log(calculateAverage(14, 8, 2)); // 8
console.log(calculateAverage(27, 43, 2, 8, 36)); // 23.2
