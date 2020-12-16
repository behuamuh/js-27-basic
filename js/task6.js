// Пример 6 - Замыкания
// Напишите функцию savePassword(password) 
// которая принимает пароль и возвращает внутреннюю функцию, 
// которая принимает строку и возвращает буль true, 
// если строка совпадает с сохраненным паролем 
// и false - если не совпадает.

// function savePassword(password) {
//   // const password = 'qwerty' // 1 раз
//   // const password = 'Qwerty12345' // 2 раз
//   function checkPassword(str) {
//     // return password === str ? true : false;
//     // if (password === str) {
//     //   return true;
//     // } else {
//     //   return false;
//     // }
//     return password === str;
//   }

//   return checkPassword;
// }

const savePassword = password => str => password === str;

const checkUserPassword = savePassword('qwerty');

alert(checkUserPassword(prompt('Input password')));
alert(checkUserPassword(prompt('Input password')));

const checkAdminPassword = savePassword('Qwerty12345');

alert(checkAdminPassword(prompt('Input password')));
alert(checkAdminPassword(prompt('Input password')));
