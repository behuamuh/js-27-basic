// 4 - Вставка элементов через appendChild
// Дан ol. Вставьте ему в конец li с текстом 'пункт'.

const olRef = document.querySelector('ol');
const liRef = document.createElement('li');
liRef.textContent = 'пункт';

// olRef.appendChild(liRef);
const oLchildren = olRef.children;
const listMiddleIndex = Math.round(oLchildren.length / 2);

olRef.insertBefore(liRef, oLchildren[listMiddleIndex]);

// const olChildrenArray = Array.from(oLchildren);
// const textArray = olChildrenArray.map(el => el.textContent);
// console.table(textArray);

const textArray = Array.from(oLchildren).map(el => el.textContent);
console.table(textArray);

const newLiRefs = textArray.map(text => {
  const itemRef = document.createElement('li');
  itemRef.textContent = text;

  return itemRef;
});

const ulRef = document.querySelector('ul');

ulRef.append(...newLiRefs);
// Дан ul. Дан массив. 
// Вставьте элементы этого массива в конец ul так, 
// чтобы каждый элемент стоял в своем li.
