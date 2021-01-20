// 7 - Потомки
// Дан элемент #elem. 
// Найдите первого потомка этого элемента 
// и сделайте его текст красного цвета.
const elemRef = document.querySelector('#elem');

elemRef.firstElementChild.style.color = 'red';

// Найдите последнего потомка этого элемента 
// и сделайте его текст синего цвета.
elemRef.lastElementChild.style.color = 'blue';

const childrenRefs = Array.from(elemRef.children);

childrenRefs.forEach(ref => {
  ref.textContent += '!';
});

// Найдите всех потомков этого элемента и добавьте им в конец текст '!'.
