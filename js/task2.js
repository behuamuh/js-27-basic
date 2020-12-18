// Пример 2 - Привязка контекста
// Исправьте ошибки чтобы код работал.

const product = {
  price: 5000,
  showPrice() {
    console.log(this.price);
  },
};

const product2 = {
  price: 10000,
  showPrice() {
    console.log(this.price);
  },
};

function callAction(callback) {
  callback();
}

const showProductPrice = product.showPrice.bind(product);

callAction(showProductPrice);
callAction(product2.showPrice.bind(product2));

// function callAction(action, context) {
//   action.call(context);
// }

// callAction(product.showPrice, product);
// callAction(product2.showPrice, product2);

// product.showPrice.bind(product);
// showPriceCopy() {
//   console.log(product.price);
// }
