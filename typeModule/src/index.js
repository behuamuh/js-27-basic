// import User from "./components/user.js";
// import sum from "./utils/sum.js";
// import multiply from "./utils/multiply.js";
// import power from "./utils/power.js";
import names from './data/names.js';
// import { countries, year } from './dataCopy.js';
// // import { countries, year } from './data/const.js';
// // import { countries as places, year } from './data/const.js';
// import { sum, multiply, power } from './utils/index.js';

// console.log(sum(5, 10));
// console.log(multiply(5, 10));
// console.log(power(5, 10));

// import * as consts from './data/const.js';

// // console.table(places);
// // console.table(consts.countries);
// // console.table(consts.year);
// console.table(consts);

// names.forEach(name => {
//   const user = new User(name, 30);
//   console.dir(user);
// });

import { counter, increment } from './data/counter.js';

console.log(counter);

// counter += 1;
increment();

console.log(counter);
