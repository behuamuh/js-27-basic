// 5 - Сделайте 3 промиса, 
// в каждом из которых расположена функция setTimeout 
// со случайно задержкой от 1 до 5 секунд. 
// Пусть каждый промис своим результатом возвращает эту задержку. 
// С помощью Promise.all получите массив результатов, 
// найдите его сумму, выведите на экран.

const getRandomPromise = () => {
  return new Promise(resolve => {
    const random = Math.floor(Math.random() * 5) + 1;

    // console.log(random);
    // setTimeout(() => resolve(random), random * 1000);
    setTimeout(resolve, random * 1000, random);
  });
};

const promise1 = getRandomPromise();
const promise2 = getRandomPromise();
const promise3 = getRandomPromise();

Promise.all([
  promise1, promise2, promise3,
]).then(numbers => {
  console.log(numbers);
  const sum = numbers.reduce((acc, item) => acc + item);

  console.log('sum: ', sum);
});
