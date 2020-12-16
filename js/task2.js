// Пример 2 - Коллбек функции
// Напишите две функции:
let id = 10;

const getId = () => id++;
// makeProduct(name, price, callback) - принимает имя и цену товара, 
// а также колбек. Функция создаёт обьект товара, 
// добавляя ему уникальный идентификатор в свойство id 
// и вызывает колбек передавая ему созданный обьект.

// showProduct(product) - коллбек принимающий обьект продукта 
// и логирующий его в консоль

const showProduct = ({ id, name, price }) => {
  const message = `id: ${id}, name: ${name}, price: ${price}`;
  console.log(message);
};

const makeProduct = (name, price, callback) => {
  const product = {
    name, 
    price,
    id: getId(),
  };

  callback(product);
};

makeProduct('Холодильник', 10000, showProduct);
makeProduct('Холодильник', 10000, showProduct);
makeProduct('Холодильник', 8000, showProduct);
makeProduct('Холодильник', 10000, showProduct);
