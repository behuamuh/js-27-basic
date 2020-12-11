// Пример 7 напишите скрипт, 
// который поочереди спрашивает имя, возраст и зарплату
// и выводит в консоль объект только с теми полями, 
// которые были указаны

const name = prompt('Input name');
const age = prompt('Input age');
const salary = prompt('Input salary');

// const user = {};

// if (name) {
//   user.name = name;
// }

// if (age) {
//   user.age = age;
// }

// if (salary) {
//   user.salary = salary;
// }

const user = {
  ...(name && { name }),
  ...(age && { age }),
  ...(salary && { salary }),
};

console.log(user);
