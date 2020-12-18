// Напишите функцию сложения вида add(num1)(num2)
// console.log(add(2)(5)(7)()); // 14
// add() // 0

function add(n) {
  let result = 0; // 2 + 5 // 7 + 7 // 14

  function addToResult(num) {
    if (num === undefined) return result;

    result += num;

    return addToResult;
  }

  return addToResult(n);
}

console.log(add());
console.log(add(2)(5)(7)()); // 14

// function addToResult() {
//   if (undefined === undefined) return result;

//   result += 7;

//   return addToResult;
// }

console.log(add(5)(5)(12)(10)()); // 32
