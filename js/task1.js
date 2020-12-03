// Пример 1 - базовые операции с массивом

// Создайте массив styles с элементами 
// «Джаз» и «Блюз».
const styles = ['Джаз', 'Блюз'];
console.log(styles);
// Джаз, Блюз

// Добавьте «Рок-н-ролл» в конец.
styles.push('Рок-н-ролл');
console.log(styles);
// Джаз, Блюз, Рок-н-ролл

// Замените значение в середине на «Классика». 
// Код для замены значения в середине 
// должен работать для массива любой длины.
const middleElementIndex = Math.ceil(styles.length / 2) - 1;

// styles[middleElementIndex] = 'Классика';
styles.splice(middleElementIndex, 1, 'Классика');
console.log(styles);
// Джаз, Классика, Рок-н-ролл

// Удалите первый элемент и выведите его в консоль.
const deletedItem = styles.shift();
console.log(deletedItem);
// Джаз
console.log(styles);
// Классика, Рок-н-ролл

// Вставьте «Рэп» и «Регги» в начало массива.
styles.unshift('Рэп', 'Регги');
console.log(styles);
// Рэп, Регги, Классика, Рок-н-ролл
