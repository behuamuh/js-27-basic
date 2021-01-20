// 5 - Вставка элементов через insertBefore
// Дан элемент ul, а в нем li #elem. 
// Вставьте перед элементом #elem новую li с текстом '!!!'.
const ulRef = document.querySelector('ul');
const elemRef = document.querySelector('#elem');
const liRef = document.createElement('li');
liRef.textContent = '!!!';

ulRef.insertBefore(liRef, elemRef);
