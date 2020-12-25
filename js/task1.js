// 1 - Пользователь
// Напиши класс User для создания пользователя 
// со следующим свойствами:

// username - имя, строка
// age - возраст, число
// numberOfPosts - кол-во постов, число
// Класс ожидает 1 параметр - объект настроек с 
// одноимёнными свойствами.

// Добавь метод getInfo(), который, возвращает строку: 
// User ${имя} is ${возраст} years old and has ${кол-во постов} posts.

class User {
  constructor({ name, age, numberOfPosts }){
    this.name = name;
    this.age = age;
    this.numberOfPosts = numberOfPosts;
  }

  // getInfo() {
  //   const userInfo = `User ${this.name} is ${this.age} years old and has ${this.numberOfPosts} posts.`
  //   return userInfo;
  // }

  get info() {
    const userInfo = `User ${this.name} is ${this.age} years old and has ${this.numberOfPosts} posts.`
    return userInfo;
  }
}

// User.prototype.getInfo = function() {
//   const userInfo = `User ${this.name} is ${this.age} years old and has ${this.numberOfPosts} posts.`
//   return userInfo;
// };

const mango = new User({
  name: 'Mango',
  age: 24,
  numberOfPosts: 20,
});

console.log(mango);
console.log(mango.info); // User Mango is 24 years old and has 20 posts

const poly = new User({
  name: 'Poly',
  age: 19,
  numberOfPosts: 17,
});

console.log(poly.info); // User Poly is 19 years old and has 17 posts
