// Пример 3 - Коллбек функции
// Напишите две функции:
// eachArray(arr, callback) - принимает массив и колбэк
// и вызывает колбэк для каждого элемента массива
// reverseString(str) - принимает строку
// и печатает в консоль задом наперед

const strings = ['Happy', 'New', 'Year!'];

function eachArray(arr, callback) {
  for (const str of arr) {
    callback(str);
  }
}

function reverseString(str) {
  const reversedString = str.split('').reverse().join('');

  console.log(reversedString);
}

function upperCaseString(str) {
  console.log(str.toUpperCase());
}

eachArray(strings, reverseString);
eachArray(strings, upperCaseString);
