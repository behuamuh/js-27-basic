// 9 - Родители
// Дан элемент #elem. 
// Найдите его родителя и покрасьте его в красный цвет.
const elemRef = document.querySelector('#elem');

elemRef.parentElement.style.backgroundColor = 'red';
// Найдите родителя его родителя и покрасьте его в синий цвет.
elemRef
  .parentNode
  .parentElement
  .style.backgroundColor = 'blue';

console.log(elemRef.dataset.size);
console.log(elemRef.dataset.value);
