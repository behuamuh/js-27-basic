// Пример 2 - Напишите новый "класс" Boss, 
// который наследуется от Worker из прошлого задания. 
// Появляется новые свойство: workers - количество работников. 
// И зарплата считается по другому: 
// произведение (умножение) ставки rate на количество отработанных дней 
// и на количество работников.

function Worker({ name, surname, rate, days }) {
  this.name = name;
  this.surname = surname;
  this.rate = rate;
  this.days = days;
}

Worker.prototype.getSalary = function() {
  const salary = this.rate * this.days;
  return salary;
};

Worker.prototype.getFullName = function() {
  const fullName = `${this.name} ${this.surname}`;
  return fullName;
};

// function Boss({ name, surname, rate, days, workers }) {
//   const instance = Object.create(Boss.prototype);
//   Worker.call(instance, { name, surname, rate, days });

//   instance.workers = workers;

//   return instance;
// }

function Boss({ name, surname, rate, days, workers }) {
  Worker.call(this, { name, surname, rate, days });

  this.workers = workers;
}

Boss.prototype = Object.create(Worker.prototype);

Boss.prototype.constructor = Boss;

Boss.prototype.getSalary = function() {
  const salary = this.rate * this.days * this.workers;
  return salary;
};

const boss = new Boss({
  surname: 'Иванов', 
  rate: 10, 
  name: 'Иван', 
  days: 31,
  workers: 10,
});

console.log(boss.name); //выведет 'Иван'
console.log(boss.surname); //выведет 'Иванов'
console.log(boss.getFullName()); //выведет 'Иванов Иван'
console.log(boss.rate); //выведет 10
console.log(boss.days); //выведет 31
console.log(boss.workers); //выведет 10
console.log(boss.getSalary()); //выведет 3100 - то есть 10*31*10
