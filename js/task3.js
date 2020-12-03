// Пример 3 - с помощью метода split() и метода join()
// напишите функцию capitalize(word)
// которая принимает слово и возвращает новое слово, 
// с 1м символом в верхнем регистре
const lowerWord = 'hello';

const capitalize = (word) => {
  const letters = word.split('');

  letters[0] = letters[0].toUpperCase();

  return letters.join('');
};

console.log(lowerWord);
console.log(capitalize(lowerWord));