'use strict';

const utils = require('./utils/utils');

let calculator = new utils.Calculator();
calculator.read();
console.log(`Sum = ${calculator.sum()}`);
console.log(`Multiply = ${calculator.mul()}`);