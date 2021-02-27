// 7 - Даны 3 картинки. 
// С помощью Promise.all дождитесь окончания загрузки 
// всех картинок и выведите их на экран.

const images = [
  'https://images.unsplash.com/photo-1611542088053-8da2ed40f5bd?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8cm5TS0RId3dZVWt8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
  '',
  'https://images.unsplash.com/photo-1579558448624-1a4b3d50d17c?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8cm5TS0RId3dZVWt8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
];

const getImage = src => {
  const image = document.createElement('img');
  image.src = src; // Пошла загрузка картинки
  image.width = 500;
  image.height = 300;

  return new Promise((resolve, reject) => {
    image.onload = () => resolve(image);
    image.onerror = () => reject('Load aborted');
  });
};

Promise.all(images.map(getImage))
  .then(imgList => document.body.append(...imgList))
  .catch(() => console.log('Ooops'));
