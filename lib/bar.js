"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bar = bar;

var _chalk = _interopRequireDefault(require("chalk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable import/prefer-default-export */
function bar() {
  console.log(_chalk.default.blue('Hello from bar'));
}