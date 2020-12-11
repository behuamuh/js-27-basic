// Пример 3 перепешите функцию сортировки
// с использованием деструктуризации
// для перестановки элементов

const arr = ['HTML', 'JavaScript', 'Algol', 'CSS', 'Python', 'Basic'];

const sortStringArray = stringArray => {
  const sortedArray = stringArray.slice(0);

  for (let i = sortedArray.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (sortedArray[j] > sortedArray[j + 1]) {
        // const temp = sortedArray[j];
        // sortedArray[j] = sortedArray[j + 1];
        // sortedArray[j + 1] = temp;
        [sortedArray[j], sortedArray[j + 1]] = [sortedArray[j + 1], sortedArray[j]];
      }
    }
  }

  return sortedArray;
};

console.table(arr);
console.table(sortStringArray(arr));
