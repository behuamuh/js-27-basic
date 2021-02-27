// 3 - Сделайте цепочку из трех промисов. 
// Пусть первый промис возвращает число. 
// Сделайте так, чтобы каждый последующий промис через 3 секунды 
// возводил в квадрат результат предыдущего промиса. 
// После окончания манипуляций выведите число алертом на экран.

const getNewPromise = n => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(n * n);
    }, 3000);
  });
};

Promise.resolve(3)
  .then(getNewPromise) // 9
  .then(getNewPromise) // 81
  // .then(getNewPromise) // 6561
  .then(console.log);
