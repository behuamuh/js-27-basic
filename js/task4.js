// Пример 4 - Викторина
// Какие значения будут выводиться в коде ниже?

const animal = { jumps: null };
const rabbit = { jumps: true };

Object.setPrototypeOf(rabbit, animal);

console.log(rabbit.jumps); // ? (1)

delete rabbit.jumps;
console.log(rabbit.jumps); // ? (2)

delete animal.jumps;
console.log(rabbit.jumps);  // ? (3)

// В примерах ниже производятся различные действия с prototype.
// Каковы будут результаты выполнения ? Почему ?

function Rabbit() { }

Rabbit.prototype = { eats: true };
const rabbit2 = new Rabbit();

Rabbit.prototype = {};

// Rabbit.prototype.eats = false; // А если раскоментить эту строку
// delete Rabbit.prototype.eats; // А если раскоментить эту строку

console.log(rabbit2.eats);
