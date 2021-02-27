// 1 - Функции resolve и reject

// Сделайте промис, внутри которого будет задержка setTimeout в 3 секунды, 
// после которой промис должен зарезолвится (то есть выполнится успешно).

const resolved = new Promise(resolve => {
  setTimeout(() => {
    resolve('then');
  }, 3000);
});

// resolved.then(console.log);
// resolved.then(console.log);
// resolved.then(console.log);
// resolved.then(console.log);

// Сделайте промис, внутри которого будет задержка setTimeout в 3 секунды, 
// после которой промис должен зареджектится (то есть выполнится с ошибкой).

const rejected = new Promise((_resolve, reject) => {
  setTimeout(() => {
    reject('catch');
  }, 3000);
});

rejected.catch(console.log);
// Сделайте функцию, которая будет генерировать случайные числа от 1 до 10. 
// Сделайте так, чтобы сгенерированное число было задержкой функции setTimeout в секундах. 
// Оберните все это в промис. 
// Пусть промис выполнится успешно, если сгенерировано число от 1 до 5, 
// и с ошибкой - если от 6 до 10.
const getRandomNumber = () => Math.floor(Math.random() * 10) + 1;

const promise = new Promise((resolve, reject) => {
  const randomNumber = getRandomNumber();
  setTimeout(() => {
    if (randomNumber < 6) {
      resolve(randomNumber);
    } else {
      reject(randomNumber);
    }
  }, randomNumber * 1000);
});

promise
  .then(
    num => console.log('Resolved', num),
    // num => console.log('Rejected', num),
  ).catch(num => console.log('Rejected', num));

// for (let i = 0; i < 10; i++) {

// }
// new Promise((reject, resolve) => {
//   reject(5);
//   // resolve(5);
// }).then(value => console.log('Success', value))
// .catch(err => console.log('Error', err));
