// 4 - Напишите функцию unique(arr), 
// которая возвращает массив, 
// содержащий только уникальные элементы arr

const notUniqueNumbers = [1, 2, 3, 1, 3, 2, 4, 5, 4, 7, 5];

// const unique = arr => {
//   const uniqueNumbers = [];

//   for (const num of arr) {
//     if (uniqueNumbers.includes(num)) continue;

//     uniqueNumbers.push(num);
//   }

//   return uniqueNumbers;
// };

const unique = arr => arr.reduce((acc, num) => {
  if (!acc.includes(num)) {
    acc.push(num);
  }

  return acc;
}, []);

console.table(unique(notUniqueNumbers));

const uniqeNumbers = [...new Set(notUniqueNumbers)];
console.log(uniqeNumbers);
