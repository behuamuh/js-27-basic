// Пример 2 - Стили
// Дан элемент #elem. 
// Сделайте его красного цвета
const elemRef = document.querySelector('#elem');

// elemRef.style.backgroundColor = 'red';
// Сделайте его размером 30px
// elemRef.style.width = '30px';

// добавьте ему границу
// elemRef.style.border = '10px solid black';
// Решите задачу с помощью свойства cssText.

const cssText = 'background-color: red; width: 30px; border: 10px solid black';

elemRef.style.cssText = cssText;
