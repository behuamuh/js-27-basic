// 4 - Хранилище
// Напиши класс Storage 
// который создаёт объекты для управления складом товаров. 
// При вызове будет получать один аргумент - 
// начальный массив товаров, 
// и записывать его в свойство items.

// Добавь методы класса:

// getItems() - возвращает массив товаров.
// addItem(item) - получает новый товар и добавляет его к текущим.
// removeItem(item) - получет товар и, если он есть, 
// удаляет его из текущих.

class Storage {
  constructor(items) {
    this._items = items;
  }

  getItems() {
    return this._items;
  }

  addItem(item) {
    // if (this._items.includes(item)) return;

    this._items.push(item);
  }

  removeItem(removedItem) {
    const removedItemIndex = this._items.indexOf(removedItem);

    if (removedItemIndex === -1) return;

    this._items.splice(removedItemIndex, 1);
    // const newItems = [];

    // for (const item of this._items) {
    //   if (item === removedItem) continue;

    //   newItems.push(item);
    // }

    // this._items = newItems;

    // const newItems = this._items.filter(item => item !== removedItem);
    // this._items = newItems;
  }
}

const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
storage.addItem('Пролонгер');
storage.addItem('Пролонгер');
storage.addItem('Пролонгер');
storage.addItem('Пролонгер');
storage.addItem('Антигравитатор');

console.table(storage.getItems()); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(storage.getItems()); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
