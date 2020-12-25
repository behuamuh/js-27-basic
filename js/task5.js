// 5 - Клиент
// Напиши класс Client который создаёт объект 
// со свойствами login и email. 
// Объяви приватные свойства login и email, 
// доступ к которым сделай через геттер и сеттер login и email.

class Client {
  // constructor({ login, email }) {
  //   this.login = login;
  //   this.email = email;
  // }
  constructor({ login, email }) {
    this._login = login;
    this._email = email;
  }

  get login() {
    return this._login;
  }

  set login(value) {
    console.log(`Old: ${this._login}, new: ${value}`);
    this._login = value;
  }

  get email() {
    return this._email;
  }

  set email(value) {
    if (!value.includes('@')) return;

    this._email = value;
  }
}

const mango = new Client({
  login: 'Mango',
  email: 'mango@dog.woof',
});

console.log(mango.email);

mango.email = 'fakeemail';
console.log(mango.email);

// console.log(mango.login); // Mango
mango.login = 'Mangodoge';
// console.log(mango.login); // Mangodoge

// const poly = new Client({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });

// console.log(poly.login); // Poly
// poly.login = 'Polycutie';
// console.log(poly.login); // Polycutie
