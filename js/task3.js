// Пример 3 - Сортировка сложных типов
// Выполнить сортировку массива объектов:

// по возрастанию и убыванию значения свойства price.
// по имени в алфавитном и обратном алфавитном порядке.
const items = [
  { name: 'SAMSUNG', price: 15000 },
  { name: 'LG', price: 9000 },
  { name: 'ASUS', price: 27000 },
  { name: 'DELL', price: 12000 },
  { name: 'BENQ', price: 7000 },
];

const priceAscCompare = (a, b) => a.price - b.price;
const priceDescCompare = (a, b) => b.price - a.price;
const nameAscCompare = (a, b) => a.name > b.name ? 1 : -1;
const nameDescCompare = (a, b) => a.name < b.name ? 1 : -1;
// По свойству price
const itemsByAscendingPrice = items
  .slice()
  .sort(priceAscCompare);
console.log(itemsByAscendingPrice);
const itemsByDescendingPrice = items
  .slice()
  .sort(priceDescCompare);
console.log(itemsByDescendingPrice);

// По свойству name
const itemsInAlphabeticalOrder = items
  .slice()
  .sort(nameAscCompare);
console.log(itemsInAlphabeticalOrder);

const itemsInDescAlpahbeticalOrder = items
  .slice()
  .sort(nameDescCompare);
console.log(itemsInDescAlpahbeticalOrder);
