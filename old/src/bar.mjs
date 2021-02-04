/* eslint-disable import/prefer-default-export */
import chalk from 'chalk';

function bar() {
  console.log(chalk.blue('Hello from bar'));
}

export { bar };
