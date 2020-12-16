// Пример 5 - напишите функцию
// makeCounter() - которая возвращает обект счетчик
// у которого есть методы 
// increment() - увеличить на 1
// decrement() - уменьшить на 1
// reset() - сбросить счетчик на 0
// show() - вывести текущее значение в консоль

function makeCounter() {
  let count = 0;
  return {
    increment() {
      count++;
    },
    decrement() {
      count--;
    },
    show() {
      console.log(count);
    },
    reset() {
      count = 0;
    },
  };
}

const counter = makeCounter(); // count = 0
const counter2 = makeCounter(); // count = 0

console.log(counter === counter2);

counter.increment();
counter.increment();
counter.increment();
counter.increment();
counter.increment();

counter.show();
counter2.show();

counter.decrement();
counter.decrement();
counter.decrement();
counter.decrement();
counter.decrement();
counter.decrement();
counter.decrement();
counter.decrement();

counter.show();
counter2.show();

counter.reset();

counter.show();
counter2.show();
