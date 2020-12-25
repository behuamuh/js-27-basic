// Пример 3 - перепишите классы User, Student
// с использованием классов

class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  getFullName() {
    return `${this.name} ${this.surname}`;
  }
}

class Student extends User {
  constructor(name, surname, year) {
    super(name, surname);

    this.year = year;
  }

  getCourse() {
    const now = new Date();
    const nowYear = now.getFullYear();
  
    return nowYear - this.year;
  }
}

const student = new Student('Иван', 'Иванов', 2015);

console.log(student); 
console.log(student.name); //выведет 'Иван'
console.log(student.surname); //выведет 'Иванов'
console.log(student.getFullName()); //выведет 'Иван Иванов'
console.log(student.year); //выведет 20152018
console.log(student.getCourse()); //выведет 3 - третий курс, так как текущий год 