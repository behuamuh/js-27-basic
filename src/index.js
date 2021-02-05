import _ from 'lodash';
import { printSum } from './utils';

import './style.css';

function component() {
  const element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}


document.body.appendChild(component());
// console.log(sum(5, 6));
printSum(7, 9);

