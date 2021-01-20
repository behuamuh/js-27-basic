// Пример 3 - Свойство tagName
// Дан элемент #elem. 
// Выведите название его тега.

// const elemRef = document.querySelector('#elem');

// console.log(elemRef.tagName);

// Выведите название его тега в нижнем регистре.
// console.log(elemRef.tagName.toLowerCase());

// Даны элементы с классом www. 
// Добавьте каждому элементу в 
// конец название его тега в нижнем регистре.
const wwwRefs = document.querySelectorAll('.www');

wwwRefs.forEach(ref => {
  ref.textContent += ref.tagName.toLowerCase();
});
