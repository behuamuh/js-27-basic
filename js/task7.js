// Пример 7 - Сортировка массива с циклом, 
// без Array.prototype.sort()
// Вернуть отсортированную копию по алфавиту 
// (не меняя исходный массив)

// Bubble sort
// Сортировка пузырьком или сортировка простыми обменами – один из простейших алгоритмов сортировки. 
// Он применяется
// для упорядочивания массивов небольших размеров.
// Суть алгоритма в том, что совершается несколько проходов по массиву. 
// При каждом проходе попарно сравниваются два соседних элемента. 
// Если они находятся в верном порядке, то ничего не происходит, в противном случае они меняются местами. 
// В результате первого прохода максимальный элемент окажется в конце, то есть всплывет словно пузырек. 
// Затем все повторяется до того момента пока весь массив не будет отсортирован.

const arr = ['HTML', 'JavaScript', 'Algol', 'CSS', 'Python', 'Basic'];

const sortStringArray = (stringArray) => {
  const sortedArray = stringArray.slice(0);

  for (let i = sortedArray.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (sortedArray[j] > sortedArray[j + 1]) {
        const temp = sortedArray[j];
        sortedArray[j] = sortedArray[j + 1];
        sortedArray[j + 1] = temp;
      }
    }
  }

  return sortedArray;
};

console.log(arr.join());
console.log(sortStringArray(arr).join());
