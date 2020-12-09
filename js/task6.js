// Создайте функцию multiplyNumeric(obj), 
// которая умножает все числовые свойства объекта obj на 2.

const menu = {
  width: 200,
  height: 300,
  title: 'My menu',
};

console.table(menu);

const multiplyNumeric = obj => {
  const keys = Object.keys(obj);

  for (const key of keys) {
    if (typeof obj[key] !== 'number') continue;

    obj[key] *= 2;
  }
};

multiplyNumeric(menu);

console.table(menu);

// после вызова функции
// menu = {
//   width: 400,
//   height: 600,
//   title: 'My menu',
// };
