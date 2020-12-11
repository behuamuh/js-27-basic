// Пример 4 - используя Object entries
// и деструктуризацию напишите скрипт, который
// выводит содержимое объекта user в формате ключ:значение 

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

const userEntries = Object.entries(user);

// for (const entry of userEntries) {
//   const [key, value] = entry;

//   console.log(`${key}: ${value}`);
// }

// console.log(userEntries);

for (const [key, value] of userEntries) {
  console.log(`${key}: ${value}`);
}
