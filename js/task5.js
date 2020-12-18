// Пример 5 - Bind
// Напишите функцию applyDiscount для хранения скидки
// на основании функции getPriceWithDiscount
// Функция возвращает другую функцию, 
// которая принимает сумму покупки 
// и возвращает финальную сумму с сохранённой скидкой.

function getPriceWithDiscount(discount, price) {
  const priceWithDiscount = price - price * discount / 100;

  return priceWithDiscount;
}

const withBaseDiscount = applyDiscount(0);
const withSilverDiscount = applyDiscount(5);
const withGoldDiscount = applyDiscount(10);

console.log('withBaseDiscount', withBaseDiscount(100));
console.log('withBaseDiscount', withBaseDiscount(200));
console.log('withSilverDiscount', withSilverDiscount(100));
console.log('withSilverDiscount', withSilverDiscount(200));
console.log('withGoldDiscount', withGoldDiscount(100));
console.log('withGoldDiscount', withGoldDiscount(200));
console.log('withGoldDiscount', withGoldDiscount(300));
console.log('withGoldDiscount', withGoldDiscount(400));
