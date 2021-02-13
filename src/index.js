import items from './arr';
import menuTemplate from './templates/menu.hbs';

// console.log(arr);
document.body.innerHTML = menuTemplate({
  title: 'Hello handlebars',
  items,
});

// const a = {
//   n: 1,
// };

// const b = {
//   n: 1,
// }
let bCopy;

// try {
// } catch (error) {
// }

try {
  bCopy = JSON.parse('index.js:24 [1,2,3]');
} catch (err) {
  bCopy = null;
} finally {
  console.log(bCopy);
}

// console.log(bCopy);

const a = [1,2,3];

const b = [1,2,3];

console.log(a === b);
console.log(JSON.stringify(a) === JSON.stringify(b));

const str = JSON.stringify(a);
console.log(str);

const aCopy = JSON.parse(str);
console.log(aCopy);
