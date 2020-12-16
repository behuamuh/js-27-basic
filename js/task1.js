// Пример 1 - Коллбек функции
// Напишите две функции:

// letMeSeeYourName(callback) - спрашивает имя пользователя 
// через prompt и вызывает коллбек ф-цию callback
// greet(name) - коллбек принимающий имя 
// и логирующий в консоль строку "Привет" + name

const letMeSeeYourName = callback => {
  const name = prompt('Введите ваше имя:');

  callback(name);
};

const greet = name => {
  console.log(`Привет ${name}`);
};

letMeSeeYourName(greet);

letMeSeeYourName(name => {
  console.log(`Пока ${name}`);
});
