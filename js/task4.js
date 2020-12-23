// Пример 4 - Викторина
// Какие значения будут выводиться в коде ниже?

const animal = { jumps: null };
const rabbit = { jumps: true };

Object.setPrototypeOf(rabbit, animal);

console.log(1, rabbit.jumps); // ? (1)

delete rabbit.jumps;
console.log(2, rabbit.jumps); // ? (2)

delete animal.jumps;
console.log(3, rabbit.jumps);  // ? (3)

// В примерах ниже производятся различные действия с prototype.
// Каковы будут результаты выполнения ? Почему ?

function Rabbit() { }

Rabbit.prototype = { eats: true };
const rabbit2 = new Rabbit();

// console.log(rabbit2);
// rabbit2.__proto__ = Rabbit.prototype => { eats: true }

// Rabbit.prototype = {};
// const rabbit3 = new Rabbit();

// Rabbit.prototype.eats = false; // А если раскоментить эту строку
delete Rabbit.prototype.eats; // А если раскоментить эту строку

console.log(4, rabbit2.eats);
// console.log(5, rabbit3.eats);
