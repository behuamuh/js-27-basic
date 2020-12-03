// Пример 5 - Поиск элемента
// Напиши функцию findLargestNumber(numbers)которая 
// ищет самое большое число в массиве.

const findLargestNumber = function (numbers) {
  let largestNumber = numbers[0];

  // for (const number of numbers) {
  //   if (number > largestNumber) {
  //     largestNumber = number;
  //   }
  // }

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largestNumber) {
      largestNumber = numbers[i];
    }
  }

  return largestNumber;
};

console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
console.log(findLargestNumber([49, 4, 83, 7, 12])); // 83