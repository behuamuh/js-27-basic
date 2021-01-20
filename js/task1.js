// 1 - Классы
// Дан элемент #elem. 
// Добавьте ему класс www.
const elemRef = document.querySelector('#elem');

elemRef.classList.add('www');

// Удалите у него класс www.
// elemRef.classList.remove('www');
// Проверьте наличие у него класса www.
const hasClass = elemRef.classList.contains('www');
console.log(hasClass);
// Добавьте ему класс www, если его нет и удалите - если есть.
// setInterval(() => {
//   elemRef.classList.toggle('www');
// }, 978);
// Узнайте количество его классов.
const classesCount = elemRef.classList.value
  .split(' ')
  .length;
console.log(classesCount);

elemRef.classList.value
  .split(' ')
  .forEach(cl => alert(cl));

// Выведите последовательно алертом его классы.
