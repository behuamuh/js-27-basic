// 5 - Перемешивание
// Напишите функцию shuffle, 
// которая принимает массив и возвращает новый,
// с теми же элементами, но в случайном порядке.

const numbers = [1, 2, 3, 4, 5, 6];

function randomCompare() {
  return  Math.random() - 0.5; // if Math.random() < 0.5 отрицательное, 
  // иначе положительное
}

const shuffle = arr => {
  const result = arr.slice();

  // result.sort(() => Math.random() - 0.5);
  result.sort(randomCompare);

  return result;
};

console.log(shuffle(numbers));
console.log(shuffle(numbers));
console.log(shuffle(numbers));
console.log(shuffle(numbers));
console.log(shuffle(numbers));
