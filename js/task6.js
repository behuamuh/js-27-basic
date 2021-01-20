// 6 - Создание элементов
// Дан массив. Создайте ul через createElement, 
// затем вставьте каждый элемент этого массива в отдельную li внутри этой ul, 
// затем вставьте эту ul в конец body.
const arr = ['Moscow', 'Kyiv', 'NewYork'];

const ulRef = document.createElement('ul');

const liRefs = arr.map(text => {
  const liRef = document.createElement('li');
  liRef.textContent = text;
  return liRef;
});

ulRef.append(...liRefs);

document.body.appendChild(ulRef);
