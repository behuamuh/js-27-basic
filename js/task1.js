// Пример 1 - Поиска самого длинного слова
// Напиши фукцнию findLongestWord(string) 
// которая принимает произвольную строку 
// состоящую только из слов разделённых пробелом 
// (параметр string) и возвращает самое длинное слово в этой строке.

function findLongestWord(string) {
  const words = string.split(' ');
  let longestWord = words[0];

  for (const word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
console.log(findLongestWord('Google do a roll')); // 'Google'
console.log(findLongestWord('May the force be with you')); // 'force'

// function foo() {
//   console.log('foo');
// }

// const foo1 = function() {
//   console.log('foo1');
// };

// foo1();

// const foo2 = function bar() {
//   console.log('foo12-bar');
// };

// foo2();

// const compare = (a, b) => a - b;

// const numbers = [6, 4, 5, 10, 1, 2, 3];
// numbers.sort(compare);
// console.log(numbers);

const anyString = 'gkhjgkgkhjkgk';

console.log(anyString.substring(0, 3));
console.log(anyString.substring(3, 0));
