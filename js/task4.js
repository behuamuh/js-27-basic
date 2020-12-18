// Пример 4 - есть функция changeSalary
// и пользователи
// напишите функцию, которая принимает пользователя и число
// и меняет ему зарплату на число с помощью ф-ии changeSalary

function changeSalary(value) {
  this.salary += value;
}

const user1 = {
  name: 'Афанасий',
  salary: 1300,
};

const user2 = {
  name: 'Анастасия',
  salary: 2500,
};
