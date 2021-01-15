// 1 - Сортировка примитивов
// Выполнить сортировку массива цен по убыванию и возрастанию.
// Вспомнить как сортирует по умолчанию.
// Рассмотреть callback для метода sort.

const prices = [2, 14, 1, 37, 26, 8];
// console.table(prices);

function ascCompare(prev, next) {
  // if (prev > next) return 1;
  // if (prev < next) return -1;

  // return 0;
  return prev - next;
}

function descCompare(prev, next) {
  // if (prev > next) return 1;
  // if (prev < next) return -1;

  // return 0;
  return next - prev; 
}

const pricesInAscendingOrder = prices.sort((a, b) => a - b);
console.table(pricesInAscendingOrder);

const pricesInDescendingOrder = prices.sort((a, b) => b - a);
console.table(pricesInDescendingOrder);
