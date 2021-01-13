// 6 - Напишите функцию, 
// которая разделяет массив 
// на части заданного размера.

// 4 [[1, 2], [3]] => [[1, 2], [3, 4]]
// 5 [[1, 2], [3, 4]] => [[1, 2], [3, 4], [5]]
// 1 [[]] => [[1]]
// 2 [[1]] => 
const chunk = (array, size) => array.reduce((acc, num) => {
  const lastArray = acc[acc.length - 1];
  if (lastArray.length < size) {
    lastArray.push(num);
  } else {
    acc.push([num]);
  }

  return acc;
}, [[]]);

const data = [1, 2, 3, 4, 5, 6, 7];
console.log(chunk(data, 2)); // [[1, 2], [3, 4], [5, 6], [7]]
console.log(chunk(data, 3)); // [[1, 2, 3], [4, 5, 6], [7]]
console.log(chunk(data, 4)); // [[1, 2, 3, 4], [5, 6, 7]]
console.log(chunk(data, 1));
