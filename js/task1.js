// Пример 1 - Основы обьектов
// Напиши скрипт, который, для объекта user, последовательно:

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

// добавляет поле mood со значением 'happy'
// user.mood = 'happy';
user['mood'] = 'happy';
// console.table(user);

// заменяет значение hobby на 'skydiving'
// user.hobby = 'skydiving';
user['hobby'] = 'skydiving';
// console.table(user);

// заменяет значение premium на false
// user.premium = false;
user['premium'] = false;
// console.table(user);

// выводит содержимое объекта user в формате ключ:значение 
// for (const key in user) {
//   console.log(`${key}: ${user[key]}`);
// }

// используя Object.keys() и for...of
const userKeys = Object.keys(user);

for (const key of userKeys) {
  console.log(`${key}: ${user[key]}`);
}
