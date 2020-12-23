// Пример 1 - Реализуйте "класс" Worker (Работник)
// который будет иметь следующие свойства: 
// name (имя), surname (фамилия), rate (ставка за день работы), 
// days (количество отработанных дней). 
// Также "класс" должен иметь метод getSalary(), 
// который будет выводить зарплату работника. 
// Зарплата - это произведение (умножение) ставки rate 
// на количество отработанных дней days. 
// И метод getFullName() - имя и фамиля работника.

// Реализуйте статическое свойство count,
// в котором храните число созданных работников

function Worker({ name, surname, rate, days }) {
  this.name = name;
  this.surname = surname;
  this.rate = rate;
  this.days = days;

  Worker.count++;
}

Worker.count = 0;
Worker.factory = 'ООО Рога и Копыта';

Worker.prototype.getSalary = function() {
  const salary = this.rate * this.days;

  return salary;
};

Worker.prototype.getFullName = function() {
  const fullName = `${this.name} ${this.surname}`;

  return fullName;
};

const worker = new Worker({
  surname: 'Иванов', 
  rate: 10, 
  name: 'Иван', 
  days: 31,
});

console.log(worker.name); //выведет 'Иван'
console.log(worker.surname); //выведет 'Иванов'
console.log(worker.getFullName()); //выведет 'Иванов Иван'
console.log(worker.rate); //выведет 10
console.log(worker.days); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31

for (let i = 0; i < 10; i++) {
  new Worker({
    surname: 'Иванов', 
    rate: 10, 
    name: 'Иван', 
    days: 31,
  });
}

console.log(Worker.factory);
