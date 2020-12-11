// Пример 5 - напишите функцию
// которая принимает информацию о пользователе
// и выводит ее в консоль

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
  obj: { a: 1, b: 2 },
};

// const showUserInfo = (name, age, hobby, premium) => {
//   const message = `name: ${name}, age: ${age}, hobby: ${hobby}, premium: ${premium}`;

//   console.log(message);
// };

// const { name, age, hobby, premium } = user;

// showUserInfo(hobby, age, premium, name);

// const showUserInfo = anyUser => {
//   const { age, hobby, name, premium } = anyUser;

//   const message = `name: ${name}, age: ${age}, hobby: ${hobby}, premium: ${premium}`;

//   console.log(message);
// };

const showUserInfo = ({ age, hobby, name, premium }) => {
  const message = `name: ${name}, age: ${age}, hobby: ${hobby}, premium: ${premium}`;

  console.log(message);
};

// showUserInfo(user);
// showUserInfo({ ...user });

// console.log(user === { ...user });

// const userCopy = { ...user };

const userClon = JSON.parse(JSON.stringify(user));

console.log(JSON.stringify(user));
// console.log(user === userCopy);
console.log(user === userClon);
// console.log(user.obj === userCopy.obj);
console.log(user.obj === userClon.obj);

showUserInfo(userClon);
// showUserInfo({
//   premium: false,
//   name: 'Alex',
//   hobby: 'Tennis',
//   age: 35,
// });
