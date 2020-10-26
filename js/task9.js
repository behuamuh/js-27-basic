/**
 * Пример 9 - Логические операторы
 * Что выведет код?
 */

console.log(true && 3);
console.log(false && 3);
console.log(true && 4 && "hello");
console.log(true && 0 && "hello");
console.log(true || 3);
console.log(true || 3 || 4);
console.log(true || false || 7);
console.log(null || 2 || undefined);
console.log((1 && null && 2) > 0);
console.log(null || 2 && 3 || 4);
