// Пример 2 - Сортировка строк
// Выполнить сортировку массива названий мониторов 
// в алфавитном и обратном алфавитном порядке.

const items = ['SAMSUNG', 'lg', 'ASUS', 'dell', 'BENQ'];

function ascCompare(prev, next) {
  return prev.toLowerCase() > next.toLowerCase() ? 1 : -1;
}

function descCompare(prev, next) {
  return prev.toUpperCase() < next.toUpperCase() ? 1 : -1;
}

const itemsInAlphabeticalOrder = items.sort(ascCompare);
console.table(itemsInAlphabeticalOrder);
// const itemsInDescAlphabeticalOrder = items
//   .sort()
//   .reverse();

const itemsInDescAlphabeticalOrder = items.sort(descCompare);

console.table(itemsInDescAlphabeticalOrder);
