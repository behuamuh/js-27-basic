// const printMessage = function(message) {
//   console.log(message);
// };

// function reverseString(str) {
//   const reversedString = str.split('').reverse().join('');

//   console.log(reversedString);
// }

// const higherOrderFunction = function(callback) {
//   const string = 'HOCs are awesome';
//   callback(string);
// };

// higherOrderFunction(printMessage);
// higherOrderFunction(reverseString);

const bar = function () {
  console.log('bar');
};

const baz = function () {
  console.log('baz');
};

const foo = function () {
  console.log('foo');
  bar();
  baz();
};

// [main]

foo(); 
// [main, foo]
// [main, foo, console.log]
// [main, foo]
// [main, foo, bar]
// [main, foo, bar, console.log]
// [main, foo, bar]
// [main, foo]
// [main, foo, baz]
// [main, foo, baz, console.log]
// [main, foo, baz]
// [main, foo]
// [main]
//
