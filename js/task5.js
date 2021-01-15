// 5 - Блиц
// На forEach
// Дан массив с числами. 
// Создайте новый массив, состоящий из квадратов этих чисел.

const arr = [5, 6, 7, 8, 9];
const squares = [];

arr.forEach(x => {
  const square = x ** 2;
  squares.push(square);
});

console.log(arr);
console.log(squares);

// Найдите сумму этих чисел.
let sum = 0;
arr.forEach(x => {
  sum += x;
});

console.log(sum);
console.log('---------------------------');

// На map
// Дан массив с числами. Сделайте из него массив, состоящий из квадратов этих чисел.
const mapedSquares = arr.map(x => x ** 2);
console.log({ mapedSquares });

// На reduce
const reducedSum = arr.reduce((acc, item) => acc + item);
console.log({ reducedSum });

// На every, some
const positiveNums = [4, 6, 7, 3, 9];
const positiveAndNegativeNums = [4, -6, -7, -3, 9];
// Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля.
// const checkPositiveNums = positiveNums.every(x => x > 0);
// const checkPositiveAndNegativeNums = positiveAndNegativeNums
//   .every(x => x > 0);

// console.log({ checkPositiveNums });
// console.log({ checkPositiveAndNegativeNums });
// Дан массив с числами. Проверьте то, что в нем есть отрицательные элементы.
const checkPositiveNums = positiveNums.some(x => x < 0);
const checkPositiveAndNegativeNums = positiveAndNegativeNums
  .some(x => x < 0);

console.log({ checkPositiveNums });
console.log({ checkPositiveAndNegativeNums });
// На filter
// Дан массив с числами. Оставьте в нем только отрицательные числа.
const filteredNegativeNums = positiveAndNegativeNums
  .filter(num => num < 0);
console.log({ filteredNegativeNums });

// Дан массив с числами. Оставьте в нем только четные числа.
const evenNums = positiveNums
  .filter(num => num % 2 === 0);
console.log({ evenNums });

// Дан массив со строками. Оставьте в нем только те строки, 
// длина которых больше 5-ти символов.
const items = ['SAMSUNG', 'lg', 'ASUS', 'dell', 'BENQ'];
const longItems = items.filter(s => s.length > 5);
console.log({ longItems });

// Дан массив, в нем могут быть обычные элементы и подмассивы, 
// например [1, 2, [3, 4], 5, [6, 7]].
// Оставьте в нем только подмассивы.
const data = [1, 2, [3, 4], 5, [6, 7]]; 
const dataArrays = data.filter(item => Array.isArray(item));
console.log({ dataArrays });

// Дан массив с числами. Посчитайте количество отрицательных чисел в этом массиве.
const negativeNumsCount = positiveAndNegativeNums
  .filter(x => x < 0).length;
  console.log({ negativeNumsCount });
