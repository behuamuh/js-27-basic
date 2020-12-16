// Пример 7 - Замыкания
// Напишите функцию для хранения скидки. 
// Функция возвращает другую функцию, 
// которая принимает сумму покупки 
// и возвращает финальную сумму с сохранённой скидкой.

function applyDiscount(discount) {
  // discount = 0;
  function getPriceWithDiscount(price) {
    const priceWithDiscount = price - price * discount / 100;

    return priceWithDiscount;
  }

  return getPriceWithDiscount;
}



// const applyDiscount = discount => price => price - price * discount / 100;

const withBaseDiscount = applyDiscount(0); // price => price - price * 0 / 100;
const withSilverDiscount = applyDiscount(5); // price => price - price * 5 / 100;
const withGoldDiscount = applyDiscount(10); // price => price - price * 10 / 100;

console.log('withBaseDiscount', withBaseDiscount(100));
console.log('withBaseDiscount', withBaseDiscount(200));
console.log('withSilverDiscount', withSilverDiscount(100));
console.log('withSilverDiscount', withSilverDiscount(200));
console.log('withGoldDiscount', withGoldDiscount(100));
console.log('withGoldDiscount', withGoldDiscount(200));
console.log('withGoldDiscount', withGoldDiscount(300));
console.log('withGoldDiscount', withGoldDiscount(400));
