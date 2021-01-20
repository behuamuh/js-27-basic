// 8 - Соседи
// Дан элемент #elem. 
// Найдите его соседа сверху и добавьте ему в конец текст '!'.
const elemRef = document.querySelector('#elem');

elemRef.previousElementSibling.textContent += '!';
// Найдите его соседа снизу и добавьте ему в конец текст '?'.
elemRef.nextElementSibling.textContent += '?';
// Найдите его соседа снизу его соседа снизу 
// (следующий элемент за соседним) и добавьте ему в конец текст '#'.
elemRef
  .nextElementSibling
  .nextElementSibling
  .textContent += '#';
