// Пример 3 - Массив объектов
// Напишите ф-цию calcTotalPrice(stones, stoneName), 
// которая принимает массив обьектов и строку с названием камня. 
// Ф-ция считает и возвращает общую стоимость камней с таким именем, 
// ценой и количеством из обьекта

const stones = [
    { name: 'Изумруд', price: 1300, quantity: 4 },
    { name: 'Бриллиант', price: 2700, quantity: 3 },
    { name: 'Сапфир', price: 400, quantity: 7 },
    { name: 'Щебень', price: 200, quantity: 2 },
];

const calcTotalPrice = (stones, stoneName) => {
  for (const stone of stones) {
    if (stone.name !== stoneName) continue;

    return stone.price * stone.quantity;
  }

  return 0;
};

console.table(calcTotalPrice(stones, 'Изумруд'));
console.table(calcTotalPrice(stones, 'Бриллиант'));
console.table(calcTotalPrice(stones, 'Сапфир'));
console.table(calcTotalPrice(stones, 'Щебень'));
console.table(calcTotalPrice(stones, 'Галька'));
