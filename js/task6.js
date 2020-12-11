// Пример 6 - напишите функцию getObjectWithoutPropperty
// которая принимает объект, название свойства
// и возвращает копию объекта без этого свойства

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

// const getObjectWithoutPropperty = (obj, key) => {
//   const newObj = { ...obj };

//   delete newObj[key];

//   return newObj;
// };

// const getObjectWithoutPropperty = (obj, key) => {
//   const { [key]: _, ...rest } = obj;
//   return rest;
// };

const getObjectWithoutPropperty = (key, { [key]: _, ...rest }) => rest;

// const newUser = getObjectWithoutPropperty(user, 'age');

console.table(user);
console.table(getObjectWithoutPropperty('age', user));
console.table(getObjectWithoutPropperty('name', user));
console.table(getObjectWithoutPropperty('jgljklkglk', user));
// {
//   age: 20,
//   hobby: 'html',
//   premium: true,
// };
