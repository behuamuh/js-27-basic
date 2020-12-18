// Пример 4 - есть функция changeSalary
// и пользователи
// напишите функцию, которая принимает пользователя и число
// и меняет ему зарплату на число с помощью ф-ии changeSalary

function changeSalary(value) {
  this.salary += value;
}

// function changeUserSalary(user, value) {
//   user.salary += value;
// }

function changeUserSalary(user, value) {
  // changeSalary.call(user, value);
  changeSalary.apply(user, [value]);
}

const user1 = {
  name: 'Афанасий',
  salary: 1300,
};

const user2 = {
  name: 'Анастасия',
  salary: 2500,
};

changeUserSalary(user1, 300);
changeUserSalary(user2, -400);

console.table(user1);
console.table(user2);
