// Пример 4 - Переделайте предыдущую задачу так, 
// чтобы один из промисов в цепочке выполнился с ошибкой. 
// В конце цепочки расположите метод catch, который поймает эту ошибку.

const getNewPromise = n => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(n * n);
    }, 3000);
  });
};

const catchError = err => console.log('Catch', err);

Promise.resolve(3)
  .then(getNewPromise) // 9
  .then(getNewPromise) // 81
  // .then(n => Promise.reject(n))
  .then(getNewPromise) // 6561
  .then(console.log)
  .catch(catchError)
  .finally(() => console.log('finally'));

  // Promise.resolve(3)
  // .then(getNewPromise, catchError) // 9
  // .then(getNewPromise, catchError) // 81
  // .then(n => Promise.reject(n), catchError)
  // .then(getNewPromise, catchError) // 6561
  // .then(console.log, catchError);