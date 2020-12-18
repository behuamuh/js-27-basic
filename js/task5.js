// Пример 5 - Bind
// Напишите функцию applyDiscount для хранения скидки
// на основании функции getPriceWithDiscount
// Функция возвращает другую функцию, 
// которая принимает сумму покупки 
// и возвращает финальную сумму с сохранённой скидкой.

// До bind
function getPriceWithDiscount(discount, price) {
  const priceWithDiscount = price - price * discount / 100;

  return priceWithDiscount;
}

// После bind
function getPriceWithDiscountCopy(price) {
  const priceWithDiscount = price - price * 0 / 100;

  return priceWithDiscount;
}

// const applyDiscount = discount => getPriceWithDiscount.bind(null, discount);
function applyDiscount(discount) {
  return getPriceWithDiscount.bind(null, discount);
} 

const withBaseDiscount = applyDiscount(0);
// После bind
// function getPriceWithDiscountCopy(price) {
//   const priceWithDiscount = price - price * 0 / 100;

//   return priceWithDiscount;
// }

const withSilverDiscount = applyDiscount(5);
// После bind
// function getPriceWithDiscountCopy(price) {
//   const priceWithDiscount = price - price * 5 / 100;

//   return priceWithDiscount;
// }

const withGoldDiscount = applyDiscount(10);
// После bind
// function getPriceWithDiscountCopy(price) {
//   const priceWithDiscount = price - price * 10 / 100;

//   return priceWithDiscount;
// }

console.log('withBaseDiscount', withBaseDiscount(100));
console.log('withBaseDiscount', withBaseDiscount(200));
console.log('withSilverDiscount', withSilverDiscount(100));
console.log('withSilverDiscount', withSilverDiscount(200));
console.log('withGoldDiscount', withGoldDiscount(100));
console.log('withGoldDiscount', withGoldDiscount(200));
console.log('withGoldDiscount', withGoldDiscount(300));
console.log('withGoldDiscount', withGoldDiscount(400));
