// Пример 2 - перепишите классы  Worker, Boss 
// с использованием классов

// class A {
//   constructor() {
//     console.log('A created');
//   }
// }

// class B extends A {
//   constructor() {
//     super();
//     console.log('B created');
//   }
// }

// const a1 = new A();
// const b1 = new B();

class Worker {
  constructor({ name, surname, rate, days }) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
  }

  getSalary() {
    const salary = this.rate * this.days;
    return salary;
  }

  getFullName() {
    const fullName = `${this.name} ${this.surname}`;
    return fullName;
  }
}

class Boss extends Worker {
  constructor({ name, surname, rate, days, workers }){
    super({ name, surname, rate, days });

    this.workers = workers;
  }

  getSalary() {
    const salary = this.rate * this.days * this.workers;
    return salary;
  }
}

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
