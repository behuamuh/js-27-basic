// 6 - Сделайте 3 промиса, 
// в каждом из которых расположена функция setTimeout 
// со случайно задержкой от 1 до 5 секунд. 
// Пусть первый промис возвращает число 1, второй - число 2, третий - число 3. 
// С помощью Promise.race дождитесь загрузки первого сработавшего промиса 
// и выведите результат его работы на экран.

const getRandomPromise = value => {
  return new Promise(resolve => {
    const random = Math.floor(Math.random() * 5) + 1;

    setTimeout(resolve, random * 1000, value);
  });
};

const promise1 = getRandomPromise('Орел');
const promise2 = getRandomPromise('Решка');
// const promise3 = getRandomPromise('Ребро');

Promise.race([
  promise1, promise2,
]).then(first => {
  console.log(first);
});
