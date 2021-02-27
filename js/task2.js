// 2 - Сделайте промис, который через 5 секунд случайным 
// образом выполнится или с успехом, 
// или с ошибкой. 
// Примените метод catch для отлавливания ошибок.
const rejected = new Promise((_resolve, reject) => {
  setTimeout(reject, 5000, 'Reject');
});

rejected.catch(console.log);

const resolved = Promise.resolve(2);

resolved
  .then(n => {
    console.log(n);

    return n * 2;
  })
  .then(n => {
    console.log(n);

    return n * 2;
  })
  .then(n => {
    console.log(n);

    return n * 2;
  })
  .then(n => {
    console.log(n);

    return n * 2;
  });
