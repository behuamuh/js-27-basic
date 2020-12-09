// Пример 2 - метод Object.values()
// У нас есть объект, 
// в котором хранятся зарплаты нашей команды. 
// Напишите код для суммирования всех зарплат 
// и сохраните результат в переменной sum. 
// Должно получиться 390. Если объект salaries пуст, 
// то результат должен быть 0.

let sum = 0;

const salaries = {
  // John: 100,
  // Ann: 160,
  // Pete: 130,
};

const salariesValues = Object.values(salaries);

for (const salary of salariesValues) {
  sum += salary;
}

console.log(sum);
