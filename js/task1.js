// 1 - Пользователь
// Напиши класс User для создания пользователя со следующим свойствами:

// username - имя, строка
// age - возраст, число
// numberOfPosts - кол-во постов, число
// Класс ожидает 1 параметр - объект настроек с одноимёнными свойствами.

// Добавь метод getInfo(), который, возвращает строку: 
// User ${имя} is ${возраст} years old and has ${кол-во постов} posts.

const mango = new User({
  name: 'Mango',
  age: 24,
  numberOfPosts: 20,
});

console.log(mango.getInfo()); // User Mango is 24 years old and has 20 posts

const poly = new User({
  name: 'Poly',
  age: 19,
  numberOfPosts: 17,
});

console.log(poly.getInfo()); // User Poly is 19 years old and has 17 posts
