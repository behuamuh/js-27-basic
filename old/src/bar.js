const chalk = require('chalk');

function bar() {
  console.log(chalk.blue('Hello from bar'));
}

module.exports.bar = bar;
