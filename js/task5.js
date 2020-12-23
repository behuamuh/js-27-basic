// Пример 5 - // Есть объекты:

const head = {
  glasses: 1,
};

const table = {
  pen: 3,
};

const bed = {
  sheet: 1,
  pillow: 2,
};

const pockets = {
  money: 2000,
};

// Присвойте объектам прототипы так, 
// чтобы любой поиск чего - либо шёл по алгоритму 
// pockets -> bed -> table -> head.
// То есть pockets.pen == 3, bed.glasses == 1, но table.money == undefined.

console.log(pockets.pen); // 3
console.log(bed.glasses); // 1
console.log(table.money); // undefined
