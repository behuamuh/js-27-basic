// Пример 2 - Напишите новый "класс" Boss, 
// который наследуется от Worker из прошлого задания. 
// Появляется новые свойство: workers - количество работников. 
// И зарплата считается по другому: 
// произведение (умножение) ставки rate на количество отработанных дней 
// и на количество работников.

const boss = new Boss('Иван', 'Иванов', 10, 31, 10);

console.log(boss.name); //выведет 'Иван'
console.log(boss.surname); //выведет 'Иванов'
console.log(boss.getFullName); //выведет 'Иванов Иван'
console.log(boss.rate); //выведет 10
console.log(boss.days); //выведет 31
console.log(boss.workers); //выведет 10
console.log(boss.getSalary()); //выведет 3100 - то есть 10*31*10
